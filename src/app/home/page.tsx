"use client";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import FadeInSection from "../components/fadeinsection";
import {Box, Typography, Button} from '@mui/material';
import {useState, useEffect, useRef} from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import Image from 'next/image';
import {motion} from 'framer-motion'
import DownloadIcon from '@mui/icons-material/Download';

export default function Home() {
  
  const quotes: string[][] =
[["Welcome!  Whether you're a recruiter or just someone checking my LinkedIn or GitHub, I believe job applications don’t tell the whole story—so here I aim to illustrate mine.", "/gallery/welcomepart.jpg"],
["Let’s start with introductions. My name is Daniel George, and I’m an undergraduate at Boston University, majoring in Mathematics and Computer Science.", "/gallery/college.jpg"],
["I've always been passionate about math—so much so that I used to have a list of numbers hanging in my bedroom!", "/gallery/kid.jpg"],
["Now, I’m taking my love of problem solving by exploring software engineering and mathematics. (Hint: Check out my projects!)", "/gallery/ai.jpg"],
["God has and will always be first in my life.  I love finding new ways to serve him: in and out of church.", "/gallery/church.jpg"],
["I even serve on my church’s praise and worship team and choir!", "/gallery/pw.jpg"],
["I've been practicing martial arts for the past 11 years, earning a black belt in Shotokan karate—and I still train at my college!", "/gallery/karate.jpg"],
["I'm also diving into calisthenics and currently working on achieving a free handstand!", "/gallery/handstand.jpg"],
["Contrary to the classic CS stereotype, I do touch grass.  Well, random shopping carts.", "/gallery/myself.jpg"],
["Content creation has also been a huge part of my life. Through years of video editing and filming, I’ve built a YouTube channel, FalzarGaming, with over 2,000 subscribers.", "/gallery/ytchannel.jpg"],
["I also take great pride in my culture. My family is from the tropical state of Kerala (unofficially the Hawaii of India, haters gonna hate lol), and I believe everyone should check it out!", "/gallery/india.jpg"],
["Fun Fact: These are 1/4 of my cousins!    Fun Fact #2: Curly hair and wind don't mix...", "/gallery/beach.jpg"],
["But enough about me—now I want to hear about you! Feel free to reach out via email or connect with me on LinkedIn. Also, don’t forget to check out my projects!"]]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(handleNext, 10000);
    return () => clearTimeout(timer);
  });

  const handleNext = () => {
    setIndex((index) => (index < quotes.length - 1 ? index + 1 : index));
  };

  const handlePrev = () => {
    setIndex((index) => (index > 0 ? index - 1 : index));
  };
  const logos: string[] = [
        "/logos/python.svg",
        "/logos/java.svg",
        "/logos/ocaml.svg",
        "/logos/supabase.svg",
        "/logos/flask.svg",
        "/logos/html.svg",
        "/logos/css.svg",
        "/logos/javascript.png",
        "/logos/typescript.svg",
        "/logos/react.svg",
        "/logos/express.svg",
        "/logos/tailwind.svg",
        "/logos/mongodb.svg",
        "/logos/mysql.svg"
      ];

   const titles : string[] =
   ["Python", "Java", "OCaml", "Supabase", "Flask", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Express.js", "Tailwind CSS", "MongoDB", "MySQL"]

   let x = 0;
   let rightVelocity = true;

   const scrollRef = useRef<HTMLDivElement>(null);

   const scroll = (direction: "left" | "right") => {
     if (scrollRef.current) {
       const scrollAmount = 100;
       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
       if (direction === "right" && x < logos.length - visibleLogos)
       {
        x++;
       }
       else if (direction === "left" && x > 0)
       {
        x--;
       }
       console.log(x);
     }
   };

    const [width, setWidth] = useState(0)
    const [visibleLogos, setVisibleLogos] = useState(3)

   useEffect(() => {
    setWidth(window.innerWidth);
   })

   useEffect(() => {
      if (width < 640) {
        setVisibleLogos(3)
      }
      if (width >= 640) {
        setVisibleLogos(5)
      }
      if (width > 1024) {
        setVisibleLogos(7)
      }
        const timer = setInterval(() => {
        if (rightVelocity)
        {
            scroll("right");
        }
        else
        {
            scroll("left");
        }
        if (x >= logos.length - visibleLogos)
        {
            rightVelocity = false;
        }
        else if (x <= 0)
        {
            rightVelocity = true;
        }
        }, 1500);
        
        return () => clearInterval(timer);
    });
  
return (<div className="h-screen flex flex-col">
<Sidebar />
<Toggle />
  <div id="home" className="pt-[64px]">
  <Box className="transition-colors duration-300 ease-in-out flex overflow-hidden text-[var(--text)]  w-full h-[calc(100vh-64px)]">
    <Box 
      component="main" 
      sx={{ flexGrow: 1, bgcolor: "transparent", p: 3 }} 
      className="flex items-center justify-center transition-colors duration-300 ease-in-out"
    >
      <ArrowBackIos 
        className={`absolute left-5 transition-colors duration-300 ease-in-out text-gray-500 hover:text-[#0A84FF] ${index === 0 ? "opacity-0" : "cursor-pointer"}`} 
        onClick={handlePrev}
      />

      <Box className="flex flex-col">
        <motion.div 
          key={index}  
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          {index < quotes.length - 1 && (
            <div className="relative w-[60vw] mx-auto aspect-video">
              <img
                src={quotes[index][1]}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl border-[3px] border-[#0A84FF] shadow-[0px_0px_20px_rgba(10,132,255,0.5)] bg-[#1A1A1A]"
              />
            </div>
          )}
          <Box 
            className={`max-w-[65%] text-center m-auto pt-5 text-${index == quotes.length - 1 ? "3xl" : "lg"} text-[var(--text)] transition-all duration-200`}
          >
            {quotes[index][0]}
          </Box>
        </motion.div>
      </Box>

      <ArrowForwardIos 
        className={`absolute right-5 transition-colors duration-300 ease-in-out duration-300 text-gray-500 hover:text-[#0A84FF] ${index === quotes.length - 1 ? "opacity-0" : "cursor-pointer"}`} 
        onClick={handleNext}
      />
    </Box>
  </Box>
</div>
<div id="projects" className="lg:pt-[100px]">
  <Box className="w-full" sx={{ transition: "colors 0.3s ease-in-out", display: "flex", bgcolor: "transparent", color: "var(--text)" }}> 
    <Box 
      component="main"
      sx={{ flexGrow: 1, p: {xs: 2, md:3}, textAlign: "center" }}
    >
      <FadeInSection delay={200}>
        <Typography sx={{ marginBottom: 2, fontFamily: "Montserrat", fontWeight: "bold", fontSize: {xs: "1.25rem", lg:"2rem"} }}>
          Here are my projects so far. More to come!
        </Typography>
      <Box className="flex flex-wrap justify-center gap-8 pb-7 z-8">
          {[ 
          { img: "/dreamjournalimg.png", title: "Dream Journal", desc: "CRUD App to document your dreams and anonymously see others publicly.", stack: "Supabase, Next.js, Typescript", link: "https://dream-journal-drab.vercel.app/" },
          { img: "/nutritionimg.png", title: "MyFitnessTerrier", desc: "Nutrition calculator for all dining halls at Boston University.", stack: "Python, Next.js, TypeScript, MongoDB", link: "https://bu-nutrition.vercel.app/" },
          { img: "/incomeimg.png", title: "Global Income Score", desc: "How well off are you in a certain location in the world?", stack: "Express.js, Node.js, Vite, MySQL", link: "https://global-income-score-mu.vercel.app/" },
          { img: "/steamroller.png", title: "Steamroller", desc: "Recommends additional games to waste your life on.", stack: "Next.js, Typescript", link: "https://steamroller.vercel.app/" }
        ].map((project, idx) => (
          <Box 
            key={idx} 
            className="m-0 flex flex-col sm:flex-row items-center text-center gap-4 w-[80%] sm:w-[70%] lg:w-[40%] p-4 border-[3px] border-solid border-[#0A84FF] rounded-3xl shadow-[0px_0px_15px_rgba(10,132,255,0.5)] bg-[var(--sidebar)] transition-all duration-300 ease-in-out group"
          >
            <a href={project.link} className="h-auto" target="_blank">
              <Box className="relative">
                <img
                  src={project.img} 
                  alt={project.title} 
                  className="aspect-video max-w-full h-full rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-[0.5] group-hover:blur-[2px]"
                />
                <Box className="absolute inset-0 flex flex-col items-center justify-center text-white text-center opacity-0 text-[30px] transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <span className="underline">{project.title}</span>
                  <Typography className="pb-3 text-white">{project.desc}</Typography>
                  <Typography className="text-sm text-white">{project.stack}</Typography>
                </Box>
              </Box>
            </a>
          </Box>
        ))}
        
      </Box>
      </FadeInSection>


      <FadeInSection delay={200}>
      <Typography variant="h4" sx={{ fontFamily: "Montserrat", paddingTop: "20px", marginBottom: "10px", color: "var(--text)" }}>
        Skills:
      </Typography>

      <Box className="flex items-center justify-center">
        <ArrowBackIos 
          onClick={() => scroll("left")} 
          className="cursor-pointer text-gray-500 hover:text-[#0A84FF] transition-colors duration-300 ease-in-out"
        />
        
        <Box 
          ref={scrollRef} 
          sx={{ 
            display: 'flex', gap: 4, py: 1, overflow: 'hidden', 
            width: {xs: 364, md: 628, lg: 892}, scrollSnapType: 'x mandatory',
            '& > *': { scrollSnapAlign: 'start' }, 
            '::-webkit-scrollbar': { display: 'none' } 
          }}
        >
          {logos.map((item, index) => (
            <Box key={index} className="flex flex-col items-center min-w-[100px]">
              <Image src={item} alt="logo" width={100} height={100} />
              <Typography variant="caption" sx={{ marginTop: "8px", textAlign: "center", color: "var(--text)" }}>
                {titles[index] || "Skill"}
              </Typography>
            </Box>
          ))}
        </Box>

        <ArrowForwardIos 
          onClick={() => scroll("right")} 
          className="cursor-pointer text-gray-500 hover:text-[#0A84FF] transition-colors duration-300 ease-in-out"
        />
      </Box>
      </FadeInSection>
    </Box>
  </Box>
</div>
<div id="resume" className="lg:pt-[100px]">
  <FadeInSection delay={200}>
      <Box sx={{display: "flex", bgcolor: "transparent", color: "var(--text)" }}>
        
            <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "transparent",
            padding: 3,
            minHeight: {sm: "50vh", lg:"100vh"},
            transition: "colors 0.3s ease-in-out"
          }}
        >
            <Typography sx={{ textAlign: "center", marginBottom: 2, fontFamily: "Montserrat", fontWeight: "bold", fontSize: "2rem" }}>
              Here is my resume!
            </Typography>
            <Box textAlign="center">
              <div className="w-full flex justify-center">
                <div className="w-[90%] sm:w-[500px] md:w-[650px] lg:w-[850px]">
                  <iframe
                    className="w-full aspect-[8.5/11] rounded-lg shadow-lg"
                    title="resume"
                    src="/resume/danielthomasresume2025.pdf"
                    allow="autoplay"
                    style={{
                      backgroundColor: "#0A0A0A",
                      border: "1px solid #0A84FF",
                      boxShadow: "0px 0px 15px rgba(10, 132, 255, 0.3)",
                    }}
                  ></iframe>
                </div>
              </div>
            </Box>
            <Box className="text-center pt-[20px]">
              <Button variant="contained" startIcon={<DownloadIcon/>} target="_blank" href="/resume/danielgeorgeresume.pdf" className="m-auto">Download</Button>
            </Box>
        </Box>
      </Box>
      </FadeInSection>
</div>
</div>
)}
