import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isReplit = !!process.env.REPL_ID;

// PORT is only required in Replit dev environment
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

// BASE_PATH is only required in Replit; default to "/" for Vercel
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig(async () => {
  const plugins = [react(), tailwindcss()];

  // Replit-only plugins (runtime error overlay, cartographer, dev banner)
  if (isReplit) {
    const { default: runtimeErrorOverlay } = await import(
      "@replit/vite-plugin-runtime-error-modal"
    );
    plugins.push(runtimeErrorOverlay());

    if (process.env.NODE_ENV !== "production") {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      plugins.push(
        cartographer({ root: path.resolve(import.meta.dirname, "..") }),
      );

      const { devBanner } = await import("@replit/vite-plugin-dev-banner");
      plugins.push(devBanner());
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets",
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      // "dist" is gitignored so Vercel can't serve it.
      // Use "web-dist" on Vercel (not gitignored, stays inside this package dir).
      // Keep "dist" for local dev.
      outDir: process.env.VERCEL ? "web-dist" : "dist",
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
