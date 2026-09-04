// @lovable.dev/vite-tanstack-config already includes the required TanStack Start, React,
// Tailwind, Nitro, path aliases and environment handling for the project.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Keep the custom server entry used by the project.
    server: { entry: "server" },
  },
});
