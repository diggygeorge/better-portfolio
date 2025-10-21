"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// --- import logos ---
import pythonLogo from "@/components/img/logos/python.svg";
import javaLogo from "@/components/img/logos/java.svg";
import springbootLogo from "@/components/img/logos/springboot.svg";
import goLogo from "@/components/img/logos/go.svg";
import ocamlLogo from "@/components/img/logos/ocaml.svg";
import supabaseLogo from "@/components/img/logos/supabase.svg";
import flaskLogo from "@/components/img/logos/flask.svg";
import htmlLogo from "@/components/img/logos/html.svg";
import cssLogo from "@/components/img/logos/css.svg";
import javascriptLogo from "@/components/img/logos/javascript.png";
import typescriptLogo from "@/components/img/logos/typescript.svg";
import reactLogo from "@/components/img/logos/react.svg";
import nodeLogo from "@/components/img/logos/node.svg";
import nextLogo from "@/components/img/logos/next.svg";
import expressLogo from "@/components/img/logos/express.svg";
import tailwindLogo from "@/components/img/logos/tailwind.svg";
import mongodbLogo from "@/components/img/logos/mongodb.svg";
import mysqlLogo from "@/components/img/logos/mysql.svg";
import postgreLogo from "@/components/img/logos/postgre.svg";
import dockerLogo from "@/components/img/logos/docker.svg";
import gcpLogo from "@/components/img/logos/gcp.svg";
import figmaLogo from "@/components/img/logos/figma.svg";

export default function SkillsCarousel() {
  const logos = [
    pythonLogo, javaLogo, springbootLogo, goLogo, ocamlLogo,
    supabaseLogo, flaskLogo, htmlLogo, cssLogo, javascriptLogo,
    typescriptLogo, reactLogo, nodeLogo, nextLogo, expressLogo,
    tailwindLogo, mongodbLogo, mysqlLogo, postgreLogo, dockerLogo,
    gcpLogo, figmaLogo,
  ];

  const captions = [
    "Python", "Java", "Spring Boot", "Go", "OCaml",
    "Supabase", "Flask", "HTML", "CSS", "JavaScript",
    "TypeScript", "React", "Node.js", "Next.js", "Express",
    "Tailwind", "MongoDB", "MySQL", "Postgres", "Docker",
    "GCP", "Figma",
  ];

  const plugin = React.useRef(Autoplay({ delay: 1500, stopOnInteraction: false }));

  return (
    <section
      className="fixed py-20 flex justify-start items-center"
    >
      <div className="w-full max-w-xs ml-10">
        <h2 className="text-2xl font-bold text-center pb-15 text-foreground">
          Skills
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          orientation="vertical"
          plugins={[plugin.current]}
          className="w-full"
        >
          {/* This controls visible height (show ~5 logos) */}
          <CarouselContent className="-mt-1 h-[480px]">
            {logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="pt-1 md:basis-1/4 flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center p-2">
                  <Image
                    src={logo}
                    alt={captions[index]}
                    width={60}
                    height={60}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                  <span className="mt-2 text-sm text-muted-foreground">
                    {captions[index]}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Centered arrows under carousel */}
          <div className="flex justify-center gap-3 mt-4">
            <CarouselPrevious className="hover:cursor-pointer" variant={"link"}/>
            <CarouselNext className="hover:cursor-pointer" variant={"link"}/>
          </div>
        </Carousel>
      </div>
    </section>
  );
}