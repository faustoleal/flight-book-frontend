import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Conexion al servidor local
        target: "http://localhost:3005",

        // Conexion al backend desplegado en Render
        //target: "https://flight-book-backend-sbty.onrender.com/",
        changeOrigin: true,
      },
    },
  },
});
