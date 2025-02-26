import Sidebar from "../components/sidebar";
import {Box, Typography} from '@mui/material';
export default function Home() {
  return (
    <>
    <Box sx={{display: "flex"}}>
        <Sidebar/>
        <Box 
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', padding: 3, textAlign: "center" }}
            >
            <Typography sx={{marginBottom: 2, fontFamily:"", textDecoration: "bold", fontSize: "2rem"}}>
                Here are my projects so far.  More to come!
            </Typography>
            <Box className="flex flex-wrap justify-center gap-8">
                <Box className="flex flex-row items-center text-center gap-[16px] w-[40%] min-w-[400px] p-[20px] border-[3px] border-solid border-black rounded-xl shadow-[0 4px 8px rgba(0, 0, 0, 0.1)] bg-[#f9f9f9] relative group">
                    <a href="https://bostonhacks.vercel.app/" target="_blank">
                        <img src="/nutritionimg.jpg" alt="BU Food Tracker" className="w-full transition-all duration-250 ease-in-out group-hover:brightness-[0.50]"/>
                        <Box className="absolute w-0.8 font-medium top-[15%] left-1/2 -translate-x-1/2 text-[30px] m-auto text-white text-center opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100">
                            <span className="underline">BU Food Tracker</span>
                            <Typography className="pb-[15px]">Nutrition calculator for all dining halls at Boston University.</Typography>
                            <Typography>Made with Next.js, Mantine, Typescript, and MongoDB.  Deployed on Vercel</Typography>
                        </Box>
                    </a>
                </Box>
                <Box className="flex flex-row items-center text-center gap-[16px] w-[40%] min-w-[400px] p-[20px] border-[3px] border-solid border-black rounded-xl shadow-[0 4px 8px rgba(0, 0, 0, 0.1)] bg-[#f9f9f9] relative group">
                    <a href="https://therapist-227352888866.us-east4.run.app/" target="_blank">
                        <img src="/therapistimg.png" alt="Therapist" className="w-full transition-all duration-250 ease-in-out group-hover:brightness-[0.50]"/>
                        <Box className="absolute w-0.8 font-medium top-[15%] left-1/2 -translate-x-1/2 text-[30px] m-auto text-white text-center opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100">
                            <span className="underline">AI Therapist</span>
                            <Typography className="pb-[15px]">Analyzes your feelings and responds with a motivational quote.</Typography>
                            <Typography>Made with TensorFlow, Flask, and Docker.  Deployed on Google Cloud Run</Typography>
                        </Box>
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  );
}
