import { spawn, execSync } from "child_process";
import { mkdirSync, writeFileSync, copyFileSync, existsSync } from "fs";

const BASE_URL = "https://www.mabryac.com";

const serviceSlugs = ["ac-repair", "heating-repair", "ac-installation"];
const locationSlugs = ["alvin", "friendswood", "pearland", "clear-lake", "deer-park", "league-city", "pasadena", "sienna", "angleton", "manvel", "rosharon"];

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  const urls: { loc: string; priority: string; changefreq: string }[] = [];

  urls.push({ loc: BASE_URL, priority: "1.0", changefreq: "weekly" });
  urls.push({ loc: `${BASE_URL}/about`, priority: "0.8", changefreq: "monthly" });
  urls.push({ loc: `${BASE_URL}/contact`, priority: "0.9", changefreq: "monthly" });
  urls.push({ loc: `${BASE_URL}/reviews`, priority: "0.7", changefreq: "monthly" });

  for (const slug of serviceSlugs) {
    urls.push({ loc: `${BASE_URL}/services/${slug}`, priority: "0.9", changefreq: "monthly" });
  }

  for (const slug of locationSlugs) {
    urls.push({ loc: `${BASE_URL}/areas/${slug}`, priority: "0.8", changefreq: "monthly" });
  }

  for (const service of serviceSlugs) {
    for (const location of locationSlugs) {
      urls.push({ loc: `${BASE_URL}/services/${service}/${location}`, priority: "0.7", changefreq: "monthly" });
    }
  }

  const urlEntries = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

console.log("Building Next.js application...");

const build = spawn("npx", ["next", "build"], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: { ...process.env },
});

build.on("close", (code) => {
  if (code === 0) {
    console.log("Creating dist/index.cjs for production start...");
    mkdirSync("dist", { recursive: true });
    
    const startScript = `
const http = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

const port = parseInt(process.env.PORT || "5000", 10);
const app = next({ dev: false, hostname: "0.0.0.0", port });
const handle = app.getRequestHandler();

const STATIC_FILES = {
  "/sitemap.xml": { file: path.join(__dirname, "sitemap.xml"), type: "application/xml" },
  "/robots.txt": { file: path.join(__dirname, "robots.txt"), type: "text/plain" },
};

app.prepare().then(() => {
  http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const staticFile = STATIC_FILES[parsedUrl.pathname];
    if (staticFile && fs.existsSync(staticFile.file)) {
      res.setHeader("Content-Type", staticFile.type);
      res.setHeader("Cache-Control", "public, max-age=3600");
      fs.createReadStream(staticFile.file).pipe(res);
      return;
    }
    handle(req, res, parsedUrl);
  }).listen(port, "0.0.0.0", () => {
    console.log("Production server running on port " + port);
  });
});
`;
    writeFileSync("dist/index.cjs", startScript);

    const sitemap = generateSitemap();
    writeFileSync("dist/sitemap.xml", sitemap);
    console.log("Generated sitemap.xml in dist/");

    if (existsSync("public/robots.txt")) {
      copyFileSync("public/robots.txt", "dist/robots.txt");
      console.log("Copied robots.txt to dist/");
    }

    console.log("Build complete!");
  }
  process.exit(code || 0);
});
