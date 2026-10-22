"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import dreamJournalImg from "@/components/img/dreamjournalimg.png";
import nutritionImg from "@/components/img/nutritionimg.png";
import incomeImg from "@/components/img/incomeimg.png";
import lovaslideImg from "@/components/img/lovaslideimg.png"
import whispersImg from "@/components/img/whisperimg.jpg"
import gdImg from "@/components/img/gdimg.png"
import traceImg from "@/components/img/traceimg.jpg"
import paxImg from "@/components/img/paximg.png"
import buFoodImg from "@/components/img/bufoodimg.png"

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "hackathon">("all");

  const projects = [
    {
      image: traceImg,
      alt: "Trace app preview showing a disaster prediction map",
      title: "Trace",
      description: "Predict disasters. Alert civilians. Save countless lives.",
      tech: ["Python", "React", "Three.js", "Mapbox", "ElevenLabs"],
      github: "https://github.com/Berny-ft/HackHarvard2026",
      devpost: "https://devpost.com/software/trace-ory60i",
      hackathon: "HackHarvard 2026",
      award: "Best Data-Driven Agent Built With Chalk"
    },
    {
      image: gdImg,
      alt: "Mod in Geometry Dash that shows the game's best players and the hardest levels",
      title: "Pointercrate Leaderboard",
      description: "Shows the game's best players and the hardest levels",
      tech: ["C++", "Geode SDK", "Cocos2d-x"],
      github: "https://github.com/diggygeorge/pointercratelb"
    },
    {
      image: paxImg,
      alt: "Pax Jamaica map of traffic and pavement distress in Jamaica Plain",
      title: "Pax Jamaica",
      description: "Maps traffic, accessibility chokeholds, and pavement distress in Jamaica Plain.",
      tech: ["Python", "Flask", "Leaflet.js", "Three.js", "LiDAR"],
      github: "https://github.com/samc5/civ2",
      devpost: "https://devpost.com/software/pax-jamaica",
      hackathon: "Civic Hacks 2026"
    },
    {
      image: whispersImg,
      alt: "Whispers app preview showing map-based story discovery",
      title: "Whispers",
      description: "Find stories where you stand.",
      tech: ["Next.js", "React", "Prisma ORM", "Supabase", "Google Maps API"],
      github: "https://github.com/rohitmandapati/whispers/",
      demo: "https://whispers-one.vercel.app/",
      youtube: "https://youtu.be/Ru7j08XEiTI",
      devpost: "https://devpost.com/software/whispers-12xb06",
      hackathon: "BostonHacks 2025"
    },
    {
      image: lovaslideImg,
      alt: "Lovaslide animated presentation preview",
      title: "Lovaslide",
      description: "AI-generates a completely animated presentation!",
      tech: ["FastAPI", "Next.js", "Typescript", "Web Speech API", "SerpAPI"],
      github: "https://github.com/diggygeorge/lovaslide/",
      youtube: "https://youtu.be/yFuwiUV3AHQ",
      devpost: "https://devpost.com/software/lovaslide",
      hackathon: "HackHarvard 2025"
    },
    {
      image: nutritionImg,
      alt: "MyFitnessTerrier web app dashboard displaying BU dining hall meals",
      title: "MyFitnessTerrier",
      description:
        "Nutrition calculator for all dining halls at Boston University.",
      tech: ["Python", "Next.js", "TypeScript", "MongoDB"],
      github: "https://github.com/diggygeorge/myfitnessterrier/",
      demo: "https://bu-nutrition.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=E_UhFZvgSTU"
    },
    {
      image: "",
      alt: "No image provided.",
      title: "Raft Consensus Algorithm",
      description:
        "Implemented a distributed system with fault tolerance based on the Raft Consensus Protocol.",
      tech: ["Golang"],
      github: "",
      demo: "",
      youtube: ""
    },
    {
      image: incomeImg,
      alt: "Global Income Score interface comparing income values worldwide",
      title: "Global Income Score",
      description:
        "How well off are you in a certain location in the world?",
      tech: ["MySQL", "Supabase", "Express.js", "Node.js", "Vite"],
      github: "https://github.com/diggygeorge/global-income-score/",
      demo: "https://global-income-score-mu.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=0_ViSrEWkiM"
    },
    {
      image: dreamJournalImg,
      alt: "Dream Journal app UI preview showing dream log entries",
      title: "Dreamcatchers",
      description:
        "Document your dreams and anonymously see others.",
      tech: ["Supabase", "Next.js", "TypeScript"],
      github: "https://github.com/diggygeorge/dream-journal/",
      demo: "https://dream-journal-drab.vercel.app/",
    },
    {
      image: buFoodImg,
      alt: "BU Food Tracker preview showing dining hall nutrition",
      title: "BU Food Tracker",
      description: "A nutritional tracker for BU dining halls (legacy version of MyFitnessTerrier).",
      tech: ["Next.js", "React", "Python", "MongoDB", "Mantine UI"],
      github: "https://github.com/joeulam/bostonhacks",
      devpost: "https://devpost.com/software/bufoodtracker",
      hackathon: "BostonHacks 2024"
    },
  ];

  const visibleProjects = projects.filter((p) => filter === "all" || p.hackathon);

  return (
    <section id="projects" className="py-20 mx-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
        Projects
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "hackathon" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("hackathon")}
        >
          Hackathons
        </Button>
      </div>
      <div className="flex flex-wrap gap-6">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
