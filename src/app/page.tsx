"use client";
import {Stack, Toolbar, Typography} from '@mui/material';
import "../app/globals.css";
import {useState, useEffect} from 'react';
import {useRouter} from "next/navigation";

const names : string[] = 
["computer scientist.", "software developer.", "karateka.", "Christian!"]

const useTypewriter = (speed = 6000) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, speed);

    return () => clearInterval(timer);
  }, [speed]);

  useEffect(() => {
    let i = displayText.length;
    let empty = true;
    const timer = setInterval(() => {
      if (i > 0 && empty)
      {
        setDisplayText((currText) => (currText.substring(0, i - 1)));
        i--;
      }
      else
      {
        empty = false;
        if (i < names[index].length)
        {
           setDisplayText((prevText) => (prevText + names[index].charAt(i)));
           i++;
        }
        else
        {
           setDisplayText((currText) => (currText));

        }
      }
    }, 60)
    return () => clearInterval(timer);
  }, [index]
);

  return displayText;
};


export default function Home() {

  const router = useRouter();
  const text = useTypewriter();

  return (
    <>
        <Toolbar/>
        <Typography sx={{justifyContent: "center", textAlign: "center", fontSize: "5rem", fontFamily: "Grotesk, sans-serif"}}>
            Daniel George
        </Typography>
        <Typography sx={{textAlign: "center", fontSize: "2rem", fontFamily: "sans-serif"}}>
            I&apos;m a {text}
        </Typography>
        <Stack spacing={5} direction="row" sx={{justifyContent: "center", marginTop: "200px"}}>
        <button className="bg-transparent hover:bg-[#1a1a1a] text-white text-3xl font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow" onClick={() => router.push('home')}>
            Go!
        </button>
        </Stack>
    </>
  );
}
