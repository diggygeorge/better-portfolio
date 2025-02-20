import * as React from 'react';
import {Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';

const Sidebar: React.FC = () => {

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
        
        <Typography align="center" fontSize="2rem" margin="20px">
            Daniel George
        </Typography>
        <Divider />
        <List>
            <ListItem key={"Home"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeSharpIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Projects"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConstructionIcon />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Resume"} disablePadding>
              <ListItemButton>
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