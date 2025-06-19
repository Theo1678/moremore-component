/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts}", // 컴포넌트 경로 명시
  ],
  // 전역 스타일 비활성화 (라이브러리용)
  corePlugins: {
    preflight: false, // Tailwind의 전역 리셋 스타일 비활성화
    container: false, // container 클래스 비활성화 (전역 충돌 방지)
  },
  // 모든 클래스에 prefix 추가 (선택사항)
  // prefix: 'mmc-',
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
  // 라이브러리 빌드 시 모든 클래스 포함 (purge 비활성화)
  safelist: [
    // 동적으로 생성되는 클래스들 보호
    {
      pattern: /grid-cols-[1-6]/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /bg-(yellow|blue|green|red|gray)-(50|100|200|300|400|500)/,
    },
    {
      pattern:
        /text-(yellow|blue|green|red|gray|black)-(400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(yellow|blue|green|red|gray)-(200|300|400)/,
    },
    // 레이아웃 클래스들
    "w-full",
    "h-full",
    "min-w-0",
    "max-w-2xl",
    "mx-auto",
    "flex",
    "flex-col",
    "flex-row",
    "flex-wrap",
    "flex-grow",
    "flex-shrink-0",
    "items-center",
    "items-start",
    "items-stretch",
    "justify-center",
    "justify-between",
    "gap-1",
    "gap-1.5",
    "gap-2",
    "gap-3",
    "gap-4",
    "gap-8",

    // 그리드 클래스들
    "grid",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",

    // 반응형 그리드
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",

    // 크기 클래스들
    "w-2",
    "w-2.5",
    "w-4",
    "w-5",
    "w-8",
    "w-16",
    "w-24",
    "h-2",
    "h-4",
    "h-5",
    "h-8",
    "h-24",
    "h-full",

    // 패딩/마진 클래스들
    "p-0",
    "p-1",
    "p-1.5",
    "p-3",
    "p-6",
    "px-2",
    "px-5",
    "py-1",
    "mb-2",
    "mb-3",
    "my-2",
    "mt-auto",

    // 보더 및 라운드 클래스들
    "border",
    "border-t",
    "border-gray-200",
    "border-gray-300",
    "rounded",
    "rounded-lg",
    "rounded-2xl",
    "rounded-full",
    "rounded-md",

    // 배경 색상들
    "bg-white",
    "bg-gray-50",
    "bg-gray-300",
    "bg-yellow-400",
    "bg-blue-500",
    "bg-green-500",
    "bg-red-500",
    "bg-gray-400",

    // 텍스트 색상들
    "text-gray-400",
    "text-gray-500",
    "text-gray-600",
    "text-gray-800",
    "text-gray-900",
    "text-blue-500",
    "text-black-700",

    // 폰트 크기 및 굵기
    "text-xs",
    "text-sm",
    "text-[13px]",
    "text-[15px]",
    "text-[17px]",
    "font-medium",
    "font-bold",
    "font-normal",
    "leading-[20px]",
    "leading-[22px]",
    "leading-tight",

    // 레이아웃 관련
    "relative",
    "absolute",
    "overflow-hidden",
    "aspect-[4/3]",

    // 포지셔닝
    "top-1/2",
    "left-0",
    "right-0",
    "-translate-y-1/2",
    "z-10",
    "-left-4",
    "-right-4",

    // 애니메이션 및 트랜지션
    "transition-transform",
    "transition-all",
    "transition-opacity",
    "duration-200",
    "hover:scale-105",
    "hover:scale-[1.02]",
    "hover:shadow-md",
    "hover:opacity-80",
    "cursor-pointer",

    // 텍스트 관련
    "text-left",
    "text-center",
    "truncate",
    "line-clamp-1",
    "line-clamp-2",
    "line-clamp-3",

    // 기타 유틸리티
    "scrollbar-hide",
    "fade-in",
    "slide-in",
    "transform",
    "object-cover",
    "overflow-hidden",
    "no-background",
  ],
};
