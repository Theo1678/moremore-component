import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    // 라이브러리 빌드 설정
    return {
      plugins: [vue()],
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
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
        cssCodeSplit: false, // CSS를 단일 파일로 번들링
      },
    };
  }

  // 개발 모드 설정
  return {
    plugins: [vue()],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    server: {
      host: "localhost", // 또는 '0.0.0.0' (외부에서 접근 가능)
      port: 3000, // 원하는 포트 번호
      open: true, // 브라우저 자동 열기 (선택사항)
    },
  };
});
