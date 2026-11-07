import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', "Pretendard", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        // 유리 카드: 위쪽 하이라이트 + 따뜻한 톤의 부드러운 그림자
        glass: "inset 0 1px 0 rgba(255,255,255,0.65), 0 8px 24px -12px rgba(150,80,40,0.22)",
        "glass-hover": "inset 0 1px 0 rgba(255,255,255,0.75), 0 14px 32px -14px rgba(150,80,40,0.32)",
        "glass-dark": "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px -12px rgba(0,0,0,0.6)",
        avatar: "0 18px 40px -16px rgba(194,110,60,0.55)",
        "avatar-dark": "0 18px 40px -16px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};

export default config;
