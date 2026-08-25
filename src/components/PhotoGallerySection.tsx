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
import church from "@/components/img/gallery/church.jpg";
import karate from "@/components/img/gallery/karate.jpg";
import handstand from "@/components/img/gallery/handstand.jpg";
import ytchannel from "@/components/img/gallery/ytchannel.jpg";
import india from "@/components/img/gallery/india.jpg";

export default function PhotoGallerySection() {
  const quotes = [
    [
      "Welcome!  My name is Danny, and I’m an undergraduate at Boston University, majoring in Mathematics and Computer Science.",
      college,
      "Boston University student photo",
    ],
    [
      "God has and will always be first in my life. I love finding new ways to serve him: in and out of church.",
      church,
      "Church photo representing faith",
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
      "Content creation has also been a huge part of my life. Through years of video editing and filming, I’ve built a YouTube channel, FalzarGaming, with over 2,000 subscribers.",
      ytchannel,
      "YouTube channel screenshot or editing photo",
    ],
    [
      "My family is from the tropical state of Kerala, located in the very VERY southern tip of India, and I believe everyone should check it out!",
      india,
      "Photo of Kerala scenery",
    ],
    [
      "Fun Fact: I'm learning guitar!  Action shots coming up soon...",
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
