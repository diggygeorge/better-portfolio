"use client";
import * as React from 'react';
import {useState, useEffect} from 'react';
import {Box, Drawer, CssBaseline, AppBar, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import "../../app/globals.css";
import {useRouter, usePathname} from "next/navigation";
import Image from 'next/image'

const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const drawerWidth = 275;

    const [isDarkMode, setIsDarkMode] = useState(false);

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
    <Box className="transition-all duration-200" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'var(--background)' }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'var(--sidebar)',
            color: 'var(--text)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', 
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease-in-out'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Typography 
          sx={{
            textAlign: "center", 
            fontSize: "2rem", 
            margin: "20px", 
            fontFamily: "Grotesk, sans-serif",
            color: 'var(--text)' // White accent
          }}>
            Daniel George
        </Typography>
        
        <List>
            {[
                { text: "Home", icon: <HomeSharpIcon/>, path: "/home" },
                { text: "Projects", icon: <ConstructionIcon />, path: "/projects" },
                { text: "Resume", icon: <DescriptionIcon />, path: "/resume" },
            ].map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => router.push(item.path)}
                    sx={{
                      bgcolor: pathname === item.path ? "var(--accent)" : "transparent",
                      color: pathname === item.path ? "var(--background)" : "var(--text)",
                      "&:hover": pathname === item.path 
                        ? { bgcolor: "rgba(10, 132, 255, 1)"}
                        : { bgcolor: "rgba(10, 132, 255, 0.2)" },
                    }}                    
                  >
                    <ListItemIcon sx={{ color: pathname === item.path ? "var(--background)" : "var(--text)" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
            ))}
        </List>

        <Box className="pt-5 flex justify-evenly">
          {[
            { href: "https://github.com/diggygeorge", src: "/logos/github.svg", alt: "Github" },
            { href: "https://linkedin.com/in/daniel-t-george/", src: "/logos/linkedin.svg", alt: "LinkedIn" },
            { href: "https://mail.google.com/mail/u/0/?fs=1&to=dannygeorge527@gmail.com&tf=cm", src: "/logos/email.svg", alt: "Gmail" }
          ].map(({ href, src, alt }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              <Image 
                src={src} 
                alt={alt} 
                width={32}
                height={32}
                className={`transition-invert hover:drop-shadow-[0_0_10px_rgba(10,162,255,0.8)] ${isDarkMode ? "invert-[1]" : ""}`}
              />
            </a>
          ))}
        </Box>

      </Drawer>
    </Box>
  );
}

export default Sidebar;
