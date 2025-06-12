import { defineConfig } from "eslint/config";
import skipFormattingConfig from "./skip-formatting.js";

export default defineConfig([
  {
    name: "app/files-to-lint",
    files: ["*.js"],
  },

  skipFormattingConfig
]);
