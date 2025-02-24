import Sidebar from "../components/sidebar";
import {Box, Toolbar, Typography} from '@mui/material';




export default function Home() {
  return (
    <>
    <Box sx={{display: "flex"}}>
      <Sidebar/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
        </Typography>
      </Box>
    </Box>
    </>
  );
}
