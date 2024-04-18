import { Box } from "@mui/material";
import Navbar from "../../components/navbar/NavBar";
import Analytic from "./component/Analytic";
import OverView from "./component/overview/Overview";
import Transaction from "./component/transaction/Transaction";
import Cashflow from "./component/cashflow/Cashflow";


const HomePage = () => {
  return (
    <Box>
      <Box className="px-[5rem] pt-4 bg-black min-h-[460px]">
        <Navbar />
        <Box className="px-[2rem]">
          <Analytic />
        </Box>
      </Box>
      <Box
        className="relative overflow-x-auto px-[7rem] mt-[-10rem] overflow-y-hidden w-screen h-[calc(100vh - 460px)]"
      sx={{
        "&::-webkit-scrollbar": {
            width: "0px",
            height: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            // backgroundColor: "#FDC600", // Color of the scrollbar
            borderRadius: "20px",
            width: "0px",
            height: "0px",
          },
      }}
      >
        <OverView />
      </Box>
      <Box className="min-h-[300px] px-[7rem] mt-[2rem] mb-[3rem] flex gap-10 justify-between">
        <Transaction />
        <Cashflow />
      </Box>
    </Box>
  );
};

export default HomePage;
