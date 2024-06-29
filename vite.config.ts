import {
    cloudflareDevProxyVitePlugin as remixCloudflare,
    vitePlugin as remix,
} from "@remix-run/dev"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
    plugins: [
        tsconfigPaths(),
        process.env.VITEST ? undefined : remixCloudflare(),
        process.env.VITEST
            ? react()
            : remix({
                  appDirectory: "src",
                  ignoredRouteFiles: ["**/.*"],
                  future: {},
                  serverModuleFormat: "esm",
              }),
    ],
    server: {
        open: true,
        port: 3000,
    },
    test: {
        clearMocks: true,
        coverage: {
            all: false,
            clean: true,
            enabled: true,
            provider: "v8",
            reporter: ["text", "lcov"],
            reportOnFailure: false,
        },
        environment: "jsdom",
        globals: false,
        passWithNoTests: true,
        setupFiles: "src/tests/setup.ts",
        watch: false,
    },
})

export default config
