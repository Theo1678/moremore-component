import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    // 라이브러리 빌드 설정
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.js"),
          name: "MoremoreComponent",
          fileName: "moremore-component",
        },
        rollupOptions: {
          external: ["vue", "@headlessui/vue"],
          output: {
            globals: {
              vue: "Vue",
              "@headlessui/vue": "HeadlessUI",
            },
          },
        },
      },
    };
  }

  // 개발 모드 설정
  return {
    plugins: [vue()],
  };
});
