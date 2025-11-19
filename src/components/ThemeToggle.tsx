"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Star, Droplet } from "lucide-react";
import { JSX, useEffect, useState, useMemo, useCallback } from "react";

export function ThemeToggle() {
  const { theme: systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [customTheme, setCustomTheme] = useState("light");

  const themes = useMemo(() => ["light", "dark", "sepia", "galaxy"], []);

  const icons: Record<string, JSX.Element> = useMemo(
    () => ({
      light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
      dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
      sepia: <Star className="h-[1.2rem] w-[1.2rem]" />,
      galaxy: <Droplet className="h-[1.2rem] w-[1.2rem]" />,
    }),
    []
  );

  const ensureCustomStyles = useCallback(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("custom-theme-styles")) return;

    const style = document.createElement("style");
    style.id = "custom-theme-styles";
    style.textContent = `
    /* 🌤️ Light Theme Accent */
    html.light, html.light body {
      background: linear-gradient(160deg, #ffffff 0%, #f5f7ff 100%) !important;
      color: #1a1a1a !important;
    }
    html.light .bg-background,
    html.light .card,
    html.light .rounded-2xl,
    html.light .shadow-lg {
      background-color: rgba(255, 255, 255, 0.9) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.05);
      color: #1a1a1a !important;
    }

    /* 🌑 Dark Theme Accent */
    html.dark, html.dark body {
      background: radial-gradient(circle at 20% 30%, #1a1a1a, #0e0e0e 80%) !important;
      color: #e5e5e5 !important;
    }
    html.dark .bg-background,
    html.dark .card,
    html.dark .rounded-2xl,
    html.dark .shadow-lg {
      background-color: rgba(40, 40, 40, 0.9) !important;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      color: #e5e5e5 !important;
    }

    /* ☕ Sepia Mode */
    html.custom-sepia, html.custom-sepia body {
      background-color: #f4ecd8 !important;
      color: #5b4636 !important;
    }
    html.custom-sepia .bg-background {
      background-color: #f4ecd8 !important;
    }
    html.custom-sepia .card, html.custom-sepia .rounded-2xl, html.custom-sepia .shadow-lg {
      background-color: #fff8ec !important;
      color: #5b4636 !important;
    }

    /* 🌌 Galaxy Mode */
    html.custom-galaxy, html.custom-galaxy body {
      background: radial-gradient(rgba(0, 20, 102, 1), #000020 80%) !important;
      color: #ffffff !important;
      overflow-x: hidden;
    }
    html.custom-galaxy .bg-background,
    html.custom-galaxy .card,
    html.custom-galaxy .rounded-2xl,
    html.custom-galaxy .shadow-lg {
      background-color: rgba(255, 255, 255, 0.05) !important;
      color: #ffffff !important;
      border-color: rgba(255, 255, 255, 0.2) !important;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.2); }
    }

    html.custom-galaxy::before {
      content: "";
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background:
        radial-gradient(2px 2px at 20% 40%, white, transparent),
        radial-gradient(1px 1px at 80% 60%, white, transparent),
        radial-gradient(2px 2px at 50% 90%, white, transparent),
        radial-gradient(1px 1px at 30% 20%, white, transparent),
        radial-gradient(2px 2px at 70% 10%, white, transparent);
      background-repeat: repeat;
      animation: twinkle 6s infinite ease-in-out alternate;
      opacity: 0.6;
      pointer-events: none;
      z-index: -1;
    }

    html.custom-galaxy button svg {
      filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5));
    }
  `;

    document.head.appendChild(style);
  }, []);

  const applyCustomRootClass = useCallback((cls?: string) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("custom-sepia", "custom-galaxy");
    if (cls) root.classList.add(cls);
  }, []);

  const handleClick = useCallback(() => {
    const idx = themes.indexOf(customTheme);
    const next = themes[(idx + 1) % themes.length];
    ensureCustomStyles();

    if (next === "dark" || next === "light") {
      applyCustomRootClass(undefined);
      setTheme(next);
    } else if (next === "sepia") {
      setTheme("light");
      applyCustomRootClass("custom-sepia");
    } else if (next === "galaxy") {
      setTheme("dark");
      applyCustomRootClass("custom-galaxy");
    }

    setCustomTheme(next);
  }, [customTheme, themes, setTheme, ensureCustomStyles, applyCustomRootClass]);

  useEffect(() => {
    setMounted(true);
    ensureCustomStyles();
  }, [ensureCustomStyles]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    applyCustomRootClass(
      customTheme === "sepia"
        ? "custom-sepia"
        : customTheme === "galaxy"
        ? "custom-galaxy"
        : undefined
    );
  }, [customTheme, applyCustomRootClass]);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={`
        rounded-full border transition fixed bottom-6 right-6 z-10 hover:cursor-pointer
        bg-background text-foreground hover:bg-muted
        dark:text-yellow-400
        custom-sepia:text-[#5b4636]
        custom-galaxy:text-[#e0e0ff]
      `}
    >
      {icons[customTheme] ?? <Sun className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}