import React, { useState } from "react";
import { Box } from "@mui/material";
import { FaUmbraco } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa6";
import { formatAmount } from "../../../../util/formatNumberToMoney";

const FlowTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box className="flex mt-7 border-b border-b-slate-300 pb-3 relative">
      <Box
        className={`flex w-[50%] items-center gap-3 pl-[20px] justify-start ${
          selectedTab === 0 ? "text-black" : "text-gray-400"
        } cursor-pointer hover:text-black`}
        onClick={() => setSelectedTab(0)}
      >
        <FaUmbraco size={30} />
        <Box className="flex flex-col items-center gap-0">
          <span className="text-[14px] font-medium">Money In</span>
          <span className="text-[18px] font-medium">
            {formatAmount(5083, false)}
          </span>
        </Box>
      </Box>
      <Box
        className={`flex w-[50%] items-center gap-3 justify-start ${
          selectedTab === 1 ? "text-black" : "text-gray-400"
        } cursor-pointer hover:text-black`}
        onClick={() => setSelectedTab(1)}
      >
        <FaXbox size={30} />
        <Box className="flex flex-col items-center gap-0">
          <span className="text-[14px] font-medium">Money Out</span>
          <span className="text-[18px] font-medium">
            {formatAmount(485.64)}
          </span>
        </Box>
      </Box>
      {selectedTab === 0 && (
        <Box
          className="absolute bottom-0 left-[0px] w-[50%] border-b-2 border-black"
          style={{ transform: "translateY(100%)" }}
        ></Box>
      )}
      {selectedTab === 1 && (
        <Box
          className="absolute bottom-0 w-[50%] border-b-2 border-black left-[50%]"
          style={{ transform: "translateY(100%)" }}
        ></Box>
      )}
    </Box>
  );
};

export default FlowTab;
