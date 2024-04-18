import { Box } from "@mui/material";
import { GoNorthStar } from "react-icons/go";

const Cashflow = () =>{

    return (
        <Box className="w-[50%]">
        <Box className="flex justify-between items-center border-b border-b-slate-300 pb-[1.2rem]">
          <Box className="flex gap-3 items-center">
            <GoNorthStar size={25} className="font-bold" />
            <span className="font-semibold">Cashflow</span>
            <span className="text-[#7A7B83]">Last 30 days</span>
          </Box>
          <span className="text-purple-900 font-medium text-[13px] cursor-pointer">
            See All
          </span>
        </Box>
      </Box>

    )
}

export default Cashflow