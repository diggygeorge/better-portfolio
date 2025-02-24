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

    function Name({name}: {name: string}) {
        return(
        <Typography sx={{textAlign: "center", fontSize: "2rem", margin: "20px", fontFamily: "Grotesk, sans-serif"}}>
            {name}
        </Typography>);
    }
    
    const drawerWidth = 300;

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
        
        <Name name={"Daniel George"}/>
        <Divider />
        <List>
            <ListItem key={"Home"} disablePadding>
              <ListItemButton onClick={() => router.push('/home')}>
                <ListItemIcon>
                  <HomeSharpIcon />
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
        <Divider />
      </Drawer>
    </Box>
  );
}

export default Sidebar;