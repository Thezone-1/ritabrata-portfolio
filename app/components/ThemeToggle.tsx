"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="fixed right-5 top-5 z-[80] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-line bg-card p-0 text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:border-accent"
      style={{ boxShadow: "var(--shadow)" }}
    >
      {mounted && (dark ? <Sun size={18} strokeWidth={1.7} /> : <Moon size={18} strokeWidth={1.7} />)}
    </button>
  );
}
