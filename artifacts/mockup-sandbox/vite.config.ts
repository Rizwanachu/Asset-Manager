import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

const isReplit = !!process.env.REPL_ID;

// PORT is only required in Replit dev environment; default to 3000 for non-Replit builds
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

// BASE_PATH is only required in Replit; default to "/" for non-Replit builds
const basePath = process.env.BASE_PATH ?? "/";

async function buildConfig(): Promise<UserConfig> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugins: any[] = [mockupPreviewPlugin(), react(), tailwindcss()];

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
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
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
}

export default defineConfig(() => buildConfig());
