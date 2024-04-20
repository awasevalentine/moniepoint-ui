import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { RiArrowDropLeftLine } from "react-icons/ri";
import OverViewChat from "./OverViewChat";
import { formatAmount } from "../../../../util/formatNumberToMoney";

const OverViewItems = ({
  title,
  totalAmount,
  viewMoreText,
  isChart,
}: IProps) => {
  const [showChat, setShowChat] = useState(false);

  const handleDrawerOpen = () => {
    setShowChat(true);
  };

  const handleDrawerClose = () => {
    setShowChat(false);
  };

  return (
    <Box>
      <Box
        className="flex flex-row border border-b-slate-100 pl-[20px] pt-[25px] relative"
        sx={{
          minWidth: "350px",
          height: "180px",
          transition: "minWidth 2s ease",
          background: "#FFF",
        }}
      >
        {/* Content */}
        <Box
          sx={{
            width: "100%", // Adjust the width based on drawer state
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Your existing content here */}
          <Typography>{title}</Typography>
          <Typography>{formatAmount(totalAmount)}</Typography>
          <Button onClick={handleDrawerOpen}>{viewMoreText}</Button>
        </Box>

        {/* Drawer */}
        {isChart && (
          <Box
            sx={{
              width: showChat ? "350px" : "0", // Set width based on drawer state
              overflowX: "hidden",
              transition: "width 2s ease",
            }}
          >
            {showChat && (
              <Box>
                <OverViewChat />
                <Box
                  onClick={handleDrawerClose}
                  className="cursor-pointer mr-[-10px] w-[20px] h-[80%] 
                              flex justify-between items-center bg-slate-200"
                >
                  <RiArrowDropLeftLine size={20} className="font-bold" />
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {/* Additional content */}
    </Box>
  );
};

export default OverViewItems;
