"use client";
import * as React from 'react';
import {Box, Drawer, CssBaseline, AppBar, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import "../../app/globals.css";
import {useRouter, usePathname} from "next/navigation";

const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const drawerWidth = 275;

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: '#121212' }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#1E1E1E',
            color: '#E0E0E0',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', 
            backdropFilter: 'blur(10px)'
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
            color: '#E0E0E0' // White accent
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
                      bgcolor: pathname === item.path ? "#0AA2FF" : "transparent",
                      color: pathname === item.path ? "#121212" : "#E0E0E0",
                      "&:hover": pathname === item.path 
                        ? { bgcolor: "rgba(10, 132, 255, 1)"}
                        : { bgcolor: "rgba(10, 132, 255, 0.2)" },
                    }}                    
                  >
                    <ListItemIcon sx={{ color: pathname === item.path ? "#121212" : "#E0E0E0" }}>
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
              <img 
                src={src} 
                alt={alt} 
                width={32}
                height={32}
                className="invert-[1] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(10,162,255,0.8)]"
              />
            </a>
          ))}
        </Box>

      </Drawer>
    </Box>
  );
}

export default Sidebar;
