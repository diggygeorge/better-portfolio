"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:diggyzar@bu.edu",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-g-thomas/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/diggygeorge",
      icon: <Github className="w-5 h-5" />,
    }
  ];

  return (
    <section
      id="contact"
      className={"py-20 text-center transition-colors duration-500"}
    >
      <h2
        className="text-3xl font-bold mb-8 text-foreground"
      >
        Let’s Connect
      </h2>

      <p
        className="max-w-xl mx-auto mb-10 text-muted-foreground"
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
              className={`flex items-center gap-2 rounded-xl px-5 py-6 border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition`}
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
