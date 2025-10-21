"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const sections = [
  { id: "hero", label: "Home" },
  { id: "gallery", label: "Gallery" },
  { id: "experience", label: "Experience"},
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-lg font-semibold tracking-wide">Daniel Thomas</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {sections.map((s) => (
              <NavigationMenuItem key={s.id}>
                <NavigationMenuLink
                  onClick={() => scrollToSection(s.id)}
                  className={`cursor-pointer text-sm font-medium transition-colors ${
                    activeSection === s.id ? "text-blue-400" : "hover:text-blue-300"
                  }`}
                >
                  {s.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.nav>
  );
}
