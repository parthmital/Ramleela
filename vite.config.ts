/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { eventHtml } from "./vite/eventHtml";

export default defineConfig({
	plugins: [react(), eventHtml()],
	test: { include: ["src/**/*.test.ts", "vite/**/*.test.ts"] },
});
