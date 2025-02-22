import Sidebar from "../components/sidebar";
import {Box, Toolbar, Typography} from '@mui/material';




export default function Home() {
  return (
    <>
    <Sidebar/>
    <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', padding: 3 }}
        >
    <Toolbar/>
    <Typography sx={{marginBottom: 2, paddingLeft: 40}}>
        <iframe title="resume" src="https://drive.google.com/file/d/17s2aDBmAA6K04auBKROS8Z78SOLuZavp/preview" width="800" height="720" allow="autoplay"></iframe>
        <a href="https://drive.google.com/file/d/17s2aDBmAA6K04auBKROS8Z78SOLuZavp/view?usp=drive_link">Hi</a>
    </Typography>
    </Box>
    </>
  );
}
