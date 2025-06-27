"use client";
import * as React from 'react';
import {useState, useEffect} from 'react';
import {Box, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import "../../app/globals.css";
import {useRouter} from "next/navigation";
import Image from 'next/image'

const Sidebar: React.FC = () => {
    const router = useRouter();

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [hash, setHash] = useState("#home")

    useEffect(() => {
      const timer = setInterval(() => {
       const theme = document.documentElement.getAttribute("data-theme");
       if (theme === "light")
        {
          setIsDarkMode(false);
        } 
        else
        {
          setIsDarkMode(true);
        }
      }, 0);

      return () => clearInterval(timer);
    }, []);

    return (
    <Box className="bg-[var(--background)] transition-colors duration-300 ease-in-out top-0 fixed flex flex-wrap justify-center w-full h-[128px] lg:h-[64px] z-50">
      <div className="text-center">
        <Typography
          sx={{ 
            fontSize: "2rem", 
            fontFamily: "Grotesk, sans-serif", 
            color: "var(--text)", 
            lineHeight: "60px",
            transition: "opacity 0.2s ease-in-out",
            paddingRight: 4
          }}
        >
          Daniel George
        </Typography>
      </div>
      <div className="flex justify-center">
            {[
                { text: "Home", icon: <HomeSharpIcon/>, path: "#home" },
                { text: "Projects", icon: <ConstructionIcon />, path: "#projects" },
                { text: "Resume", icon: <DescriptionIcon />, path: "#resume" },
            ].map((item) => (
              <Box key={item.text} className="p-2">
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(item.path)
                      setHash(item.path)
                    }
                    }
                    sx={{
                      borderRadius: 4,
                      bgcolor: hash === item.path ? "var(--accent)" : "transparent",
                      color: hash === item.path ? "var(--background)" : "var(--text)",
                      "&:hover": hash === item.path 
                        ? { bgcolor: "rgba(10, 132, 255, 1)"}
                        : { bgcolor: "rgba(10, 132, 255, 0.2)" },
                    }}                    
                  >
                    <div className="sm:mr-1">
                      {item.icon}
                    </div>
                    <ListItemText className="" primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}

          {[
            { href: "https://github.com/diggygeorge", src: "/logos/github.svg", alt: "Github" },
            { href: "https://linkedin.com/in/daniel-t-george/", src: "/logos/linkedin.svg", alt: "LinkedIn" },
            { href: "https://mail.google.com/mail/u/0/?fs=1&to=dannygeorge527@gmail.com&tf=cm", src: "/logos/email.svg", alt: "Gmail" }
          ].map(({ href, src, alt }, index) => (
            <Box key={index} className="p-4">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image 
                src={src} 
                alt={alt} 
                width={32}
                height={32}
                className={`transition-invert duration-200 hover:drop-shadow-[0_0_10px_rgba(10,162,255,0.8)] ${isDarkMode ? "invert-[1]" : ""}`}
              />
            </a>
            </Box>
          ))}
      </div>
    </Box>
    
  );
}

export default Sidebar;