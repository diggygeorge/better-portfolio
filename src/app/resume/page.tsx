import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import "@fontsource/montserrat";

export default function Home() {
  return (
    <>
      <Box sx={{ position: "relative", display: "flex", bgcolor: "var(--background)", color: "var(--text)" }}>
        <Sidebar />
        <Toggle />
            <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "var(--background)",
            padding: 3,
            minHeight: "100vh",
            transition: "all 0.2s ease"
          }}
        >
            <Typography sx={{ textAlign: "center", marginBottom: 2, fontFamily: "Montserrat", fontWeight: "bold", fontSize: "2rem" }}>
              Here is my resume!
            </Typography>
            <Box textAlign="center">
              <iframe
                className="block m-auto rounded-lg shadow-lg"
                title="resume"
                src="/resume/danielgeorgesweresume.pdf"
                width="850"
                height="1130"
                allow="autoplay"
                style={{
                  backgroundColor: "#0A0A0A",
                  borderRadius: "8px",
                  border: "1px solid #0A84FF",
                  boxShadow: "0px 0px 15px rgba(10, 132, 255, 0.3)",
                }}
              ></iframe>
            </Box>
            <Box className="text-center pt-[20px]">
              <Button variant="contained" startIcon={<DownloadIcon/>} target="_blank" href="/resume/danielgeorgesweresume.pdf" className="m-auto">Download</Button>
            </Box>
        </Box>
      </Box>
    </>
  );
}
