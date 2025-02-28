import Sidebar from "../components/sidebar";
import { Box, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", bgcolor: "#121212", color: "#E0E0E0" }}> {/* Dark mode */}
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#1E1E1E", // Slightly lighter than the sidebar for contrast
            padding: 3,
            minHeight: "100vh",
            boxShadow: "inset 0px 4px 20px rgba(0, 0, 0, 0.5)", // Subtle depth
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
                backgroundColor: "#0A0A0A", // Makes iframe blend better
                borderRadius: "8px",
                border: "1px solid #0A84FF", // Blue accent border
                boxShadow: "0px 0px 15px rgba(10, 132, 255, 0.3)", // Subtle blue glow
              }}
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
}
