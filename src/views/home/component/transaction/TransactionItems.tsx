import { Box } from "@mui/material";
import { ITransaction } from "../../../../interface/transaction.interface";
import { formatAmount } from "../../../../util/formatNumberToMoney";
import dayjs from "dayjs";
import { useState } from "react";

interface IProps {
  item: ITransaction;
}
const TransactionItems = ({ item }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const setImageColor = (item_name: string) => {
    switch (item_name) {
      case "strip":
        return "text-[#FFF]";
        break;
      case "sportify":
        return "text-[#FFF]";
        break;
      case "zendesk":
        return "text-[#FFF]";
        break;
      case "dropbox":
        return "text-[#874CCC]";
        break;

        return "text-[#FFF]";
    }
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeve={() => setIsHovered(false)}
      className="flex flex-row items-center justify-between px-[15px] pt-2 border-b
     border-b-slate-300 pb-2 hover:translate-x-[4px] transition duration-[0.3s] hover:bg-[#f3f5f9]"
    >
      <Box className="flex flex-row gap-8">
        <Box
          className={`flex items-center justify-center w-[50px] h-[50px] ${setImageColor(
            item?.name.toLowerCase()
          )} bg-black text-[20px]`}
        >
          {item?.image}
        </Box>
        <Box className="flex flex-col gap-0">
          <span className="font-medium">{item?.name}</span>
          <span className="text-[#7A7B83] text-[12px]">
            {dayjs(item?.transaction_date).format("ddd, DD MMM, HH:mm")}
          </span>
        </Box>
      </Box>
      <Box>
        <span className={`${isHovered ? "bg-[#FFF]" : "bg-[#f3f5f9]"} py-[2px] px-[10px]`}>{item?.type}</span>
      </Box>
      <Box>
        <span
          className={`${item?.amount > 0 ? "text-green-800" : "text-black"}`}
        >
          {item?.amount > 0
            ? `+${formatAmount(item?.amount)}`
            : formatAmount(item?.amount)}
        </span>
      </Box>
    </Box>
  );
};

export default TransactionItems;
