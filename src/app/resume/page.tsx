import Sidebar from "../components/sidebar";
import {Box, Button, Toolbar, Typography} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


export default function Home() {

  return (
    <>
    <Box sx={{display: "flex"}}>
    <Sidebar/>
      <Box 
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', padding: 3 }}
          >
        <Toolbar/>
        <Box textAlign="center">
          <iframe className="block m-auto" title="resume" src="https://drive.google.com/file/d/17s2aDBmAA6K04auBKROS8Z78SOLuZavp/preview" width="800" height="1020" allow="autoplay"></iframe>
          <Button sx={{marginTop: "10px"}} startIcon={<DownloadIcon/>}variant="contained" href="https://drive.google.com/file/d/17s2aDBmAA6K04auBKROS8Z78SOLuZavp/view?usp=drive_link">Download</Button>
        </Box>
      </Box>
    </Box>
    </>
  );
}
