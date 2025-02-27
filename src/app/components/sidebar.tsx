"use client";
import * as React from 'react';
import {Box, Drawer, CssBaseline, AppBar, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import "../../app/globals.css";
import {useRouter} from "next/navigation";

const Sidebar: React.FC = () => {

    const router = useRouter();
    
    const drawerWidth = 275;

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Typography sx={{textAlign: "center", fontSize: "2rem", margin: "20px", fontFamily: "Grotesk, sans-serif"}}>
            Daniel George
        </Typography>
        <List>
            <ListItem key={"Home"} disablePadding>
              <ListItemButton onClick={() => router.push('/home')}>
                <ListItemIcon>
                  <HomeSharpIcon/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Projects"} disablePadding>
              <ListItemButton onClick={() => router.push('/projects')}>
                <ListItemIcon>
                  <ConstructionIcon />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Resume"} disablePadding>
              <ListItemButton onClick={() => router.push('/resume')}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={"Resume"} />
              </ListItemButton>
            </ListItem>
        </List>
        <Box className="pt-[20px] flex justify-evenly">
            <a href="https://github.com/diggygeorge" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={32} height={32} alt="Github"/>
            </a>
            <a href="https://linkedin.com/in/daniel-t-george/" target="_blank">
                <img src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" width={32} height={32} alt="LinkedIn"/>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=dannygeorge527@gmail.com&tf=cm" target="_blank">
                <img src="https://png.pngtree.com/png-clipart/20240720/original/pngtree-gmail-inbox-logo-with-a-little-black-frame-vector-png-image_15595991.png" width={32} height={32} alt="Gmail"/>
            </a>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;