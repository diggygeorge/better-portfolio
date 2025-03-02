"use client";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import {Box, Typography} from '@mui/material';
import {useState, useEffect} from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import Image from 'next/image';
import {motion} from 'framer-motion'

export default function Home() {
  
  const quotes: string[][] =
[["Welcome!  Whether you're a recruiter or just someone checking my LinkedIn or GitHub, I believe job applications don’t tell the whole story—so here I aim to illustrate mine.", "/gallery/welcomepart.jpg"],
["Let’s start with introductions. My name is Daniel George, and I’m an undergraduate at Boston University, majoring in Mathematics and Computer Science.", "/gallery/college.jpg"],
["I've always been passionate about math—so much so that I used to have a list of numbers hanging in my bedroom!", "/gallery/kid.jpg"],
["Now, I’m taking my love of problem solving by exploring software engineering and machine learning. (Hint: Check out my projects!)", "/gallery/ai.jpg"],
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
  
return (
  <>
  <Box className="transition-all duration-200 relative flex overflow-hidden h-screen bg-[var(--background)] text-[var(--text)]">
    <Sidebar />
    <Toggle />
    <Box 
      component="main" 
      sx={{ flexGrow: 1, bgcolor: "var(--background)", p: 3 }} 
      className="relative flex items-center justify-center transition-all duration-200"
    >
      <ArrowBackIos 
        className={`absolute left-5 transition-colors duration-300 text-gray-500 hover:text-[#0A84FF] ${index === 0 ? "opacity-0" : "cursor-pointer"}`} 
        onClick={handlePrev}
      />

      <Box className="flex flex-col items-center max-w-[663px]">
        <motion.div 
          key={index} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          {index < quotes.length - 1 && (
            <Image
              className="block border-[3px] border-solid border-[#0A84FF] rounded-xl shadow-[0px_0px_20px_rgba(10,132,255,0.5)] bg-[#1A1A1A]"
              src={quotes[index][1]}
              alt=""
              width={663}
              height={500}
              style={{ objectFit: "contain" }}
            />
          )}
          <Typography 
            variant={index === quotes.length - 1 ? "h5" : "body1"} 
            className="pt-5 text-center text-lg text-[var(--text)] transition-all duration-200"
          >
            {quotes[index][0]}
          </Typography>
        </motion.div>
      </Box>

      <ArrowForwardIos 
        className={`absolute right-5 transition-colors duration-300 text-gray-500 hover:text-[#0A84FF] ${index === quotes.length - 1 ? "opacity-0" : "cursor-pointer"}`} 
        onClick={handleNext}
      />
    </Box>
  </Box>
</>

  );
}
