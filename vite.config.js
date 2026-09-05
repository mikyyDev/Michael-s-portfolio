import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Use the repository name as base path when building on GitHub Actions for Pages.
  base:
    process.env.GITHUB_ACTIONS === "true"
      ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] || ""}/`
      : "/",
  server: {
    host: "127.0.0.1",
    port: 5200,
    strictPort: true,
  },
  plugins: [react()],
});
