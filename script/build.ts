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
const { spawn } = require("child_process");

const server = spawn("npx", ["next", "start", "-p", process.env.PORT || "5000", "-H", "0.0.0.0"], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: { ...process.env, NODE_ENV: "production" },
});

server.on("close", (code) => {
  process.exit(code || 0);
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
