import Sidebar from "../components/sidebar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", bgcolor: "#121212", color: "#E0E0E0" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#1E1E1E",
            padding: 3,
            minHeight: "100vh",
            boxShadow: "inset 0px 4px 20px rgba(0, 0, 0, 0.5)",
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
        </Box>
      </Box>
    </>
  );
}
