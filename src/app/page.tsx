"use client";
import {Stack, Toolbar, Typography} from '@mui/material';
import "../app/globals.css";
import {useState, useEffect} from 'react';
import {useRouter} from "next/navigation";
import ParticleBackground from './components/particlebackground'
import Typewriter from './components/typewriter'

export default function Home() {

  const router = useRouter();
  
  return (
    <>
        <ParticleBackground/>
        <Toolbar/>
        <Typography sx={{justifyContent: "center", textAlign: "center", fontSize: "5rem", color: 'E0E0E0', fontFamily: "Grotesk, sans-serif"}}>
            Daniel George
        </Typography>
        <Typewriter/>
        <Stack spacing={5} direction="row" sx={{justifyContent: "center", marginTop: "200px"}}>
        <button className="bg-transparent hover:bg-[#1a1a1a] text-white text-3xl font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow" onClick={() => router.push('home')}>
            Go!
        </button>
        </Stack>
    </>
  )};
