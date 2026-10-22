"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Sparkles, Waves, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const themes: { name: string; label: string; icon: LucideIcon }[] = [
  { name: "dark", label: "Dark", icon: Moon },
  { name: "light", label: "Light", icon: Sun },
  { name: "galaxy", label: "Galaxy", icon: Sparkles },
  { name: "ocean", label: "Ocean", icon: Waves },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const idx = Math.max(0, themes.findIndex((t) => t.name === theme));
  const current = themes[idx];
  const next = themes[(idx + 1) % themes.length];
  const Icon = current.icon;
  const label = `Theme: ${current.label} — click for ${next.label}`;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next.name)}
      title={label}
      className="rounded-full border transition fixed bottom-6 right-6 z-10 hover:cursor-pointer bg-background text-primary hover:bg-muted"
    >
      <Icon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}
