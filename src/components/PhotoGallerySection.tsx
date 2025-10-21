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
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import welcomepart from "@/components/img/gallery/welcomepart.jpg";
import college from "@/components/img/gallery/college.jpg";
import kid from "@/components/img/gallery/kid.jpg";
import ai from "@/components/img/gallery/ai.jpg";
import church from "@/components/img/gallery/church.jpg";
import pw from "@/components/img/gallery/pw.jpg";
import karate from "@/components/img/gallery/karate.jpg";
import handstand from "@/components/img/gallery/handstand.jpg";
import myself from "@/components/img/gallery/myself.jpg";
import ytchannel from "@/components/img/gallery/ytchannel.jpg";
import india from "@/components/img/gallery/india.jpg";
import beach from "@/components/img/gallery/beach.jpg";

export default function PhotoGallerySection() {
  const quotes = [
    [
      "Welcome! Whether you're a recruiter or just someone checking my LinkedIn or GitHub, I believe job applications don’t tell the whole story—so here I aim to illustrate mine.",
      welcomepart,
      "Welcome image with personal intro",
    ],
    [
      "Let’s start with introductions. My name is Danny, and I’m an undergraduate at Boston University, majoring in Mathematics and Computer Science.",
      college,
      "Boston University student photo",
    ],
    [
      "I've always been passionate about math—so much so that I used to have a list of numbers hanging in my bedroom!",
      kid,
      "Childhood photo showing love for math",
    ],
    [
      "Now, I’m taking my love of problem solving by exploring software engineering and mathematics. (Hint: Check out my projects!)",
      ai,
      "AI coding illustration",
    ],
    [
      "God has and will always be first in my life. I love finding new ways to serve him: in and out of church.",
      church,
      "Church photo representing faith",
    ],
    [
      "I even serve on my church’s praise and worship team and choir!",
      pw,
      "Singing in church praise and worship team",
    ],
    [
      "I've been practicing martial arts for the past 12 years, earning a black belt in Shotokan karate—and I still train at my college!",
      karate,
      "Karate training photo",
    ],
    [
      "I'm also diving into calisthenics and currently working on achieving a free handstand!",
      handstand,
      "Calisthenics handstand training photo",
    ],
    [
      "Contrary to the classic CS stereotype, I do touch grass. Well, random shopping carts.",
      myself,
      "Funny photo with a shopping cart",
    ],
    [
      "Content creation has also been a huge part of my life. Through years of video editing and filming, I’ve built a YouTube channel, FalzarGaming, with over 2,000 subscribers.",
      ytchannel,
      "YouTube channel screenshot or editing photo",
    ],
    [
      "I also take great pride in my culture. My family is from the tropical state of Kerala (unofficially the Hawaii of India, haters gonna hate lol), and I believe everyone should check it out!",
      india,
      "Photo of Kerala scenery",
    ],
    [
      "Fun Fact: These are 1/4 of my cousins! Fun Fact #2: Curly hair and wind don't mix...",
      beach,
      "Family photo at the beach with cousins",
    ],
    [
      "But enough about me—now I want to hear about you! Feel free to reach out via email or connect with me on LinkedIn. Also, don’t forget to check out my projects!",
      null,
      "",
    ],
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  return (
    <section id="gallery" className="py-20">
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start", loop: true }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {quotes.map(([text, img, alt], idx) => (
            <CarouselItem key={idx}>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
                  {img ? (
                    <Image
                      src={img}
                      alt={String(alt)}
                      className="rounded-xl object-cover w-full h-[500px]"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-[500px] w-full">
                      <p className="text-lg font-medium text-center px-6 leading-relaxed">
                        {String(text)}
                      </p>
                    </div>
                  )}
                  {img && (
                    <p className="text-base text-foreground max-w-2xl leading-relaxed px-4">
                      {String(text)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows (outside the image) */}
        <div className="flex justify-between items-center">
          <CarouselPrevious variant={"link"} className="hover:cursor-pointer"/>
          <CarouselNext variant={"link"} className="hover:cursor-pointer"/>
        </div>
      </Carousel>
    </section>
  );
}
