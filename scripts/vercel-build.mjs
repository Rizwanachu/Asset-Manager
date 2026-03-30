import { execSync } from "child_process";
import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const distDir = path.join(repoRoot, "artifacts", "panthers-bite", "dist");
const vercelOutput = "/vercel/output";
const staticDir = path.join(vercelOutput, "static");

console.log("Building Panther's Bite...");
console.log("Repo root:", repoRoot);

execSync("pnpm --filter @workspace/panthers-bite run build", {
  stdio: "inherit",
  cwd: repoRoot,
  env: { ...process.env },
});

console.log("Writing to Vercel Build Output API:", vercelOutput);

if (existsSync(staticDir)) {
  rmSync(staticDir, { recursive: true });
}
mkdirSync(staticDir, { recursive: true });

cpSync(distDir, staticDir, { recursive: true });

writeFileSync(
  path.join(vercelOutput, "config.json"),
  JSON.stringify({
    version: 3,
    routes: [
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/index.html" },
    ],
  }),
);

console.log("Done. Output written to", vercelOutput);
