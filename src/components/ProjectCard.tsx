"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  alt: string;
  tech: string[];
  github?: string;
  demo?: string;
  youtube?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  alt,
  tech,
  github,
  demo,
  youtube
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="w-[30%] max-w-2xl mx-auto"
    >
      <Card className="overflow-hidden shadow-md rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
        {/* 🖼️ Image smaller in height */}
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="p-4">
          {/* Title */}
          <CardHeader className="p-0 pb-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </CardHeader>

          {/* Description */}
          <CardContent className="p-0 pb-3">
            <p className="text-sm text-muted-foreground leading-snug">
              {description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-secondary/70 rounded-full text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>

          {/* Buttons */}
          <CardFooter className="p-0 pt-2 flex gap-2">
            {github && (
              <Button asChild variant="outline" size="sm" className="text-xs">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
              </Button>
            )}
            {demo && (
              <Button asChild variant="default" size="sm" className="text-xs">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                </a>
              </Button>
            )}
            {youtube && (
              <Button asChild variant="destructive" size="sm" className="text-xs">
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-1" /> YouTube
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}