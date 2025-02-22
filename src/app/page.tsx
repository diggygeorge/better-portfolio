"use client";
import {Box, Toolbar, Typography} from '@mui/material';
import "../app/globals.css";
import {useState, useEffect} from 'react';

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
  }, [index]);

  return displayText;
};


export default function Home() {

  const text = useTypewriter();

  return (
    <>
        <Toolbar/>
        <Typography sx={{textAlign: "center", fontSize: "5rem", fontFamily: "Grotesk, sans-serif"}}>
            Daniel George
        </Typography>
        <Typography sx={{textAlign: "center", fontSize: "2rem", fontFamily: "sans-serif"}}>
            I'm a {text}
        </Typography>
    </>
  );
}
