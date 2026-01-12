import { spawn, execSync } from "child_process";
import { mkdirSync, writeFileSync } from "fs";

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
    console.log("Build complete!");
  }
  process.exit(code || 0);
});
