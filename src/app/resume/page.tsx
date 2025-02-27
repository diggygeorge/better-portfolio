import Sidebar from "../components/sidebar";
import {Box, Button, Toolbar} from '@mui/material';
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
          <iframe className="block m-auto" title="resume" src="/resume/danielgeorgesweresume.pdf" width="850" height="1130" allow="autoplay"></iframe>
        </Box>
      </Box>
    </Box>
    </>
  );
}
