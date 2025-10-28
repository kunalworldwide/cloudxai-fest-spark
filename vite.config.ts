import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  // Base path for built assets. Allow override with VITE_BASE env var.
  // - If VITE_BASE is set, use it (useful for custom domains like cloudconf.ai -> '/')
  // - Otherwise, default to '/' in development and '/<repo>/' for production project-site
  base: process.env.VITE_BASE
    ? process.env.VITE_BASE
    : mode === "development"
    ? "/"
    : "/cloudxai-fest-spark/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
