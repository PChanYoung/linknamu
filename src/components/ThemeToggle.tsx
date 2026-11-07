"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // 저장 불가 환경에서는 무시
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="rounded-full border border-gray-300 p-2 text-lg leading-none transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {/* 하이드레이션 전에는 아이콘 자리만 유지 */}
      <span className="block h-5 w-5">{isDark === null ? "" : isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
