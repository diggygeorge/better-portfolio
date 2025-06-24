"use client";
import {useState, useEffect} from 'react';
import {Typography} from '@mui/material';


const names : string[] = 
["a computer scientist. ", "a software developer. ", "broke. ", "a programmer. ", "a student. "]
export default function Typewriter() {
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
  
const text = useTypewriter();

return (
    <Typography sx={{textAlign: "center", fontSize: "2rem", color: 'E0E0E0', fontFamily: "sans-serif"}}>
        I&apos;m {text}
    </Typography>
);

}