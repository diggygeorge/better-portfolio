"use client";
import Sidebar from "../components/sidebar";
import {Button, Box, Toolbar, Typography} from '@mui/material';
import {useState, useEffect} from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';

export default function Home() {
  
  const quotes: string[] =
["Welcome!  Whether you're a recruiter or just someone checking my LinkedIn or GitHub, I believe job applications don’t tell the whole story—so I aim to illustrate that here.",
"Let’s start with introductions. My name is Daniel George, and I’m an undergraduate at Boston University, majoring in Mathematics and Computer Science.",
"First and foremost, I am a Christian. God has always been and will always be first in my life.",
"I serve on my church’s praise and worship team and choir.",
"I've been practicing martial arts for the past 11 years, earning a black belt in Shotokan karate—and I still train at my college!",
"I'm also diving into calisthenics and currently working on achieving a free handstand!",
"I've always been passionate about math—so much so that I used to have a list of numbers hanging in my bedroom!",
"Now, I’m taking that passion further by pursuing a master’s degree in Artificial Intelligence after completing my undergrad.",
"Contrary to the classic CS stereotype, I do touch grass.",
"My friends are like a second family to me, and they've arguably shaped me the most.",
"Content creation has also been a huge part of my life. Through years of video editing and filming, I’ve built a YouTube channel, FalzarGaming, with over 2,000 subscribers.",
"I also take great pride in my culture. My family is from Kerala (India’s Hawaii), and I’m working on becoming fluent in Malayalam.",
"Kerala’s tropical beauty is something I can’t wait to experience again!",
"But enough about me—now I want to hear about you! Feel free to reach out via email or connect with me on LinkedIn. Also, don’t forget to check out my projects!"]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => index < quotes.length - 1 ? index + 1 : index);
    }, 10000);

    return () => clearInterval(timer);
  }, [10000]);
  
return (
    <>
    <Box sx={{display: "flex"}}>
      <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Box className="flex mt-[25%] justify-between">
            <ArrowBackIos onClick={() => setIndex((index) => (index > 0 ? index - 1 : index))}></ArrowBackIos>
            <Box className="mb-[2px] text-center">
              <Typography>
                {quotes[index % quotes.length]}
              </Typography>
            </Box>
            <ArrowForwardIos onClick={() => setIndex((index) => (index < quotes.length - 1 ? index + 1 : index))}></ArrowForwardIos>
        </Box>
          
      </Box>
    </Box>
    </>
  );
}
