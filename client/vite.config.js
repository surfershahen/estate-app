import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  //! EACH TIME THE ADDRESS STARTS AND INCLUDES THE FORWARD /api , ADD THE "http://localhost:3000" AT THE BEGINNING SO THIS IS GOING TO REQUEST TO THE CORRECT PLACE
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
