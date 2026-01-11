import { spawn } from "child_process";

const next = spawn("npx", ["next", "dev", "-p", "5000", "--hostname", "0.0.0.0", "--webpack"], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: { ...process.env },
});

next.on("close", (code) => {
  process.exit(code || 0);
});
