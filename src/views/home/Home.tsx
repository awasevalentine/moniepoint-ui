import { Box } from "@mui/material";
import Navbar from "../../components/navbar/NavBar";

const HomePage = () => {
  return (
    <Box>
      <Box className="px-[5rem] pt-4 bg-black min-h-[300px]">
        <Navbar />
        <h1 className="text-9xl text-[#0959AA]">Welcome to home</h1>
      </Box>
    </Box>
  );
};

export default HomePage;
