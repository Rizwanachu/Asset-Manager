import { execSync } from "child_process";
import { cpSync, mkdirSync, rmSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const distDir = path.join(repoRoot, "artifacts", "panthers-bite", "dist");
const outputDir = path.join(repoRoot, "public");

console.log("Repo root:", repoRoot);
console.log("Output dir:", outputDir);

execSync("pnpm --filter @workspace/panthers-bite run build", {
  stdio: "inherit",
  cwd: repoRoot,
});

if (existsSync(outputDir)) rmSync(outputDir, { recursive: true });
mkdirSync(outputDir, { recursive: true });
cpSync(distDir, outputDir, { recursive: true });

console.log("Done. Files copied to:", outputDir);
