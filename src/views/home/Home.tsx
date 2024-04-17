import { Box } from "@mui/material";
import Navbar from "../../components/navbar/NavBar";
import Analytic from "./component/Analytic";

const HomePage = () => {
  return (
    <Box>
      <Box className="px-[5rem] pt-4 bg-black min-h-[300px]">
        <Navbar />
        <Box className="px-[2rem]">
          <Analytic />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
