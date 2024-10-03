import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import Components from "unplugin-react-components/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Components()],
  server: {
    port: "8084",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
