"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type ThemeBtnProps = { onClick?: () => void; icon?: string };
function ThemeBtn({ onClick, icon = "ri--moon-fill" }: ThemeBtnProps) {
  return (
    <span
      onClick={onClick}
      className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 cursor-pointer"
    >
      <i className={`iconify ${icon}`} />
    </span>
  );
}

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <ThemeBtn />;

  const isDark = theme === "dark";

  return (
    <ThemeBtn
      onClick={() => setTheme(isDark ? "light" : "dark")}
      icon={isDark ? "ri--sun-fill" : "ri--moon-fill"}
    />
  );
}
