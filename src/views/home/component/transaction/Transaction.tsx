import { Box } from "@mui/material";
import { TbTopologyStar } from "react-icons/tb";
import { transactions } from "../constant";
import TransactionItems from "./TransactionItems";

const Transaction = () => {
  return (
    <Box className="w-[50%]">
      <Box className="flex justify-between items-center border-b border-b-slate-300 pb-[1.2rem]">
        <Box className="flex gap-3 items-center">
          <TbTopologyStar size={25} className="font-bold" />
          <span className="font-semibold">Recent Transactions</span>
          <span className="text-[#7A7B83]">Last 5 activity</span>
        </Box>
        <span className="text-purple-900 font-medium text-[13px] cursor-pointer">
          See All
        </span>
      </Box>
      <Box className="mt-3">
      {
        transactions?.map((res)=>(
            <TransactionItems item={res} />
        ))
      }
      </Box>

    </Box>
  );
};

export default Transaction;
