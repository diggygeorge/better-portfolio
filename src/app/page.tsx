"use client";
import {Stack, Toolbar, Typography} from '@mui/material';
import "../app/globals.css";
import {useState, useEffect, useMemo} from 'react';
import {useRouter} from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

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
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <div style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none"}}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
      <div>
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
    </div>
    </>
  );
}
