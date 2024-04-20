import { Box } from "@mui/material";
import { GoNorthStar } from "react-icons/go";
import FlowTab from "./FlowTab";
import CustomProgress from "./CustomProgress";

const Cashflow = () => {
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
      <FlowTab />
      <Box className="flex flex-col p-[20px] gap-7 mt-4">
        <CustomProgress
          name="Strip"
          color="#AD88C6"
          percentage={70}
          amount={3514.72}
        />
        <CustomProgress
          name="Crypto Academy"
          color="#64CCC5"
          percentage={20}
          amount={1017.49}
        />
        <CustomProgress
          name="Wire Return"
          color="#FFB6D9"
          percentage={6}
          amount={318.44}
        />
      </Box>
    </Box>
  );
};

export default Cashflow;
