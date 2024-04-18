import { Box } from "@mui/material";
import logo5 from "../../../../assets/logos/mpoint-logo5.svg";
import OverViewItems from "./OverviewItems";

const OverView = () => {
  return (
    <Box className="w-full h-full">
      <Box className="flex gap-3 items-center pb-6">
        <img src={logo5} alt="Overview Icon" width={25} height={25} />
        <Box className="flex gap-2 items-center">
          <span className="text-white">Overview</span>
          <span className="text-[lightslategrey] font-medium text-[12px]">
            Last 30 days
          </span>
        </Box>
      </Box>
      <Box className="flex gap-6 w-full">
        <OverViewItems />
        <OverViewItems />
        <OverViewItems />
      </Box>
    </Box>
  );
};

export default OverView;
