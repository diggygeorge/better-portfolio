"use client";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import {Box, Typography, Divider} from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import {useRef} from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import "@fontsource/montserrat";

export default function Home() {

    const light_logos: string[] = [
        "/light_logos/python.png",
        "/light_logos/java.png",
        "/light_logos/ocaml.png",
        "/light_logos/tensorflow.png",
        "/light_logos/flask.png",
        "/light_logos/html.png",
        "/light_logos/css.png",
        "/light_logos/javascript.png",
        "/light_logos/typescript.png",
        "/light_logos/react.png",
        "/light_logos/tailwind.png",
        "/light_logos/mongodb.png"
      ];
      
      const dark_logos: string[] = [
        "/logos/python.png",
        "/logos/java.png",
        "/logos/ocaml.png",
        "/logos/tensorflow.png",
        "/logos/flask.png",
        "/logos/html.png",
        "/logos/css.png",
        "/logos/javascript.png",
        "/logos/typescript.png",
        "/logos/react.png",
        "/logos/tailwind.png",
        "/logos/mongodb.png"
      ];

   const titles : string[] =
   ["Python", "Java", "OCaml", "TensorFlow", "Flask", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "MongoDB"]

   let x = 0;
   let rightVelocity = true;

   const scrollRef = useRef<HTMLDivElement>(null);

   const scroll = (direction: "left" | "right") => {
     if (scrollRef.current) {
       const scrollAmount = 100;
       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
       if (direction === "right")
       {
        x++;
       }
       else if (direction === "left")
       {
        x--;
       }
       console.log(x);
     }
   };

   useEffect(() => {
        const timer = setInterval(() => {
        if (rightVelocity)
        {
            scroll("right");
        }
        else
        {
            scroll("left");
        }
        if (x >= logos.length - 5) // # of images - # of visible images
        {
            rightVelocity = false;
        }
        if (x <= 0)
        {
            rightVelocity = true;
        }
        }, 1500);
        
        return () => clearInterval(timer);
    });

    const [logos, setLogos] = useState<string[]>(dark_logos);  // Use state to store logos

    useEffect(() => {
            const theme = document.documentElement.getAttribute("data-theme");
            if (theme === "light") {
            setLogos(light_logos);
            } else {
            setLogos(dark_logos);
            }
        }, []);


  return (
    <>
  <Box sx={{ transition: "all 0.1s ease", display: "flex", bgcolor: "var(--background)", color: "var(--text)" }}> 
    <Sidebar />
    <Toggle />
    <Box 
      component="main"
      sx={{ flexGrow: 1, p: 3, textAlign: "center" }}
    >
      {/* Header */}
      <Typography sx={{ marginBottom: 2, fontFamily: "Montserrat", fontWeight: "bold", fontSize: "2rem" }}>
        Here are my projects so far. More to come!
      </Typography>

      {/* Projects Grid */}
      <Box className="flex flex-wrap justify-center gap-8 pb-7">
        {[ 
          { img: "/nutritionimg.jpg", title: "BU Food Tracker", desc: "Nutrition calculator for all dining halls at Boston University.", stack: "Next.js, Mantine, TypeScript, MongoDB", link: "https://bostonhacks.vercel.app/" },
          { img: "/therapistimg.png", title: "AI Therapist", desc: "Analyzes your feelings and responds with a motivational quote.", stack: "TensorFlow, Flask, Docker", link: "https://therapist-227352888866.us-east4.run.app/" }
        ].map((project, idx) => (
          <Box 
            key={idx} 
            className="relative flex flex-row items-center text-center gap-4 w-[40%] min-w-[400px] p-5 border-[3px] border-solid border-[#0A84FF] rounded-3xl shadow-[0px_0px_15px_rgba(10,132,255,0.5)] bg-[var(--projectbg)] transition-all duration-200 group"
          >
            <a href={project.link} target="_blank">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full rounded-lg transition-all duration-200 ease-in-out group-hover:brightness-[0.5]"
              />
              <Box 
                className="absolute w-0.8 font-medium top-[15%] left-1/2 -translate-x-1/2 text-[30px] text-white text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              >
                <span className="underline">{project.title}</span>
                <Typography className="pb-3 text-white">{project.desc}</Typography>
                <Typography className="text-sm text-white">{project.stack}</Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Box>

      <Divider sx={{ bgcolor: "var(--text)" }} />

      {/* Skills Section */}
      <Typography variant="h4" sx={{ fontFamily: "Montserrat", paddingTop: "20px", marginBottom: "10px", color: "var(--text)" }}>
        Skills:
      </Typography>

      <Box className="flex items-center justify-center">
        <ArrowBackIos 
          onClick={() => scroll("left")} 
          className="cursor-pointer text-gray-500 hover:text-[#0A84FF] transition-colors duration-300"
        />
        
        <Box 
          ref={scrollRef} 
          sx={{ 
            display: 'flex', gap: 4, py: 1, overflow: 'hidden', 
            width: 783, scrollSnapType: 'x mandatory', 
            '& > *': { scrollSnapAlign: 'start' }, 
            '::-webkit-scrollbar': { display: 'none' } 
          }}
        >
          {logos.map((item, index) => (
            <Box key={index} className="flex flex-col items-center">
              <AspectRatio ratio="1" sx={{ minWidth: 131 }}>
                <Image src={item} alt="logo" width={131} height={131}/>
              </AspectRatio>
              <Typography variant="caption" sx={{ marginTop: "8px", textAlign: "center", color: "var(--text)" }}>
                {titles[index] || "Skill"}
              </Typography>
            </Box>
          ))}
        </Box>

        <ArrowForwardIos 
          onClick={() => scroll("right")} 
          className="cursor-pointer text-gray-500 hover:text-[#0A84FF] transition-colors duration-300"
        />
      </Box>
    </Box>
  </Box>
</>

  );
}
