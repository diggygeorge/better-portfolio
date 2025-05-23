"use client";
import {Stack, Toolbar, Typography} from '@mui/material';
import "../app/globals.css";
import {useState, useEffect} from 'react';
import {useRouter} from "next/navigation";

const names : string[] = 
["a computer scientist. ", "a software developer. ", "broke. ", "a programmer. ", "a student. "]

const useTypewriter = (speed = 5000) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, speed);
  
      return () => clearInterval(timer);
    }, [speed]);
  
    useEffect(() => {
      let i = 0;
      let empty = true;
  
      const typeEffect = setInterval(() => {
        setDisplayText((currText) => {
          if (empty) {
            if (currText.length > 0) {
              return currText.slice(0, -1);
            } else {
              empty = false;
              return "";
            }
          } else {
            if (i < names[index].length) {
              const nextText = names[index].slice(0, i + 1);
              i++;
              return nextText;
            } else {
              clearInterval(typeEffect);
              return currText;
            }
          }
        });
      }, 80);
  
      return () => clearInterval(typeEffect);
    }, [index]);
  
    return displayText;
  };
  


export default function Home() {

  const router = useRouter();
  const text = useTypewriter();

  return (
    <>
        <Toolbar/>
        <Typography sx={{justifyContent: "center", textAlign: "center", fontSize: "5rem", color: 'E0E0E0', fontFamily: "Grotesk, sans-serif"}}>
            Daniel George
        </Typography>
        <Typography sx={{textAlign: "center", fontSize: "2rem", color: 'E0E0E0', fontFamily: "sans-serif"}}>
            I&apos;m {text}
        </Typography>
        <Stack spacing={5} direction="row" sx={{justifyContent: "center", marginTop: "200px"}}>
        <button className="bg-transparent hover:bg-[#1a1a1a] text-white text-3xl font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow" onClick={() => router.push('home')}>
            Go!
        </button>
        </Stack>
    </>
  );
}
