"use client";

import { Mail, Linkedin, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ContactSection() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const contacts = [
    {
      name: "Email",
      href: "mailto:diggyzar@bu.edu",
      icon: <Mail className="w-5 h-5" />,
      color: isDark
        ? "hover:bg-blue-100 text-white border-white/40"
        : "hover:bg-blue-100 text-blue-900 border-blue-300",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-g-thomas/",
      icon: <Linkedin className="w-5 h-5" />,
      color: isDark
        ? "hover:bg-sky-100 text-white border-white/40"
        : "hover:bg-sky-100 text-sky-900 border-sky-300",
    },
    {
      name: "GitHub",
      href: "https://github.com/diggygeorge",
      icon: <Github className="w-5 h-5" />,
      color: isDark
        ? "hover:bg-gray-100 text-white border-white/40"
        : "hover:bg-gray-100 text-gray-900 border-gray-300",
    }
  ];

  return (
    <section
      id="contact"
      className={"py-20 text-center transition-colors duration-500"}
    >
      <h2
        className={`text-3xl font-bold mb-8 transition-colors ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Let’s Connect
      </h2>

      <p
        className={`max-w-xl mx-auto mb-10 transition-colors ${
          isDark ? "text-gray-400" : "text-gray-700"
        }`}
      >
        Whether you want to collaborate, chat about tech, or just say hi — here’s how you can reach me.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="outline"
              className={`flex items-center gap-2 rounded-xl px-5 py-6 border hover:cursor-pointer transition ${contact.color}`}
            >
              {contact.icon}
              <span className="text-base">{contact.name}</span>
            </Button>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
