import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import logo6 from "../../../../assets/logos/mpoint-logo6.svg";
import logo7 from "../../../../assets/logos/mpoint-logo6.svg";
import { RiArrowRightUpFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiArrowDropLeftLine } from "react-icons/ri";
import OverViewChat from "./OverViewChat";
import { RiArrowRightDownFill } from "react-icons/ri";
import { formatAmount } from "../../../../util/formatNumberToMoney";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { GiTransportationRings } from "react-icons/gi";
import { CgSpaceBetweenV } from "react-icons/cg";

type IProps = {
  title?: string;
  profitUp?: boolean;
  profitDown?: boolean;
  profit?: number;
  totalAmount: number;
  lastWeekView?: string;
  viewMoreText?: string;
  isChart?: boolean;
};

const OverViewItems = ({
  title,
  profitUp,
  profitDown,
  profit,
  totalAmount,
  lastWeekView,
  viewMoreText,
  isChart,
}: IProps) => {
  const [showLastWeek, setShowLastWeek] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <Box
      sx={{
        width: showChat ? "670px" : "350px",
        transition: "width 1s ease-in-out",
      }}
    >
      <Box
        className="flex flex-row border border-b-slate-100 pl-[20px] pt-[25px] relative"
        sx={{
          minWidth: "350px",
          height: "180px",
          transition: "minWidth 2s ease",
          background: "#FFF",
          padding:
            showChat && !isHovered
              ? "20px 0px 20px 20px"
              : isHovered && !showChat
              ? "20px"
              : !isHovered && !showChat
              ? "20px"
              : null,
        }}
      >
        <Box
          sx={{
            width: showChat ? "350px" : "fit-content",
            display: "flex",
            flexDirection: "column",
            transtion: "minWidth 1.5s ease-in-out",
          }}
        >
          <Box>
            {title === "Business Account" && (
              <GiTransportationRings
                size={35}
                color={isHovered || showChat ? "#AD88C6" : "#C7C8CC"}
              />
            )}

            {title === "Business Savings" && (
              <CgSpaceBetweenV
                size={35}
                color={isHovered || showChat ? "#C65BCF" : "#C7C8CC"}
              />
            )}

            {title === "Tax Reserve" && (
              <MdOutlineStickyNote2
                size={35}
                color={isHovered || showChat ? "#FFB6D9" : "#C7C8CC"}
              />
            )}
          </Box>
          <Box
            onMouseEnter={() =>
              !showChat ? setIsHovered(true) : setIsHovered(false)
            }
            onMouseLeave={() => setIsHovered(false)}
            className="h-full"
          >
            <Box className="flex flex-row gap-3 items-center mt-5">
              <span className="text-[13px] font-medium">
                {title?.toUpperCase()}
              </span>
              <Box className="flex flex-row gap-[6px] items-center">
                {profitUp && (
                  <RiArrowRightUpFill
                    className="bg-[#aaee00] h-[15px] w-[25px] text-[18px] rounded-[9px]"
                    color="black"
                  />
                )}
                {profitDown && (
                  <RiArrowRightDownFill
                    className="bg-red-800 h-[15px] w-[25px] text-[18px] rounded-[9px]"
                    color="#FFF"
                  />
                )}

                {profit && (
                  <span
                    className="text-[10px] font-bold cursor-pointer"
                    onMouseEnter={() => setShowLastWeek(true)}
                    onMouseLeave={() => setShowLastWeek(false)}
                  >
                    12.3%
                  </span>
                )}
              </Box>
              {lastWeekView && (
                <>
                  {(showLastWeek || showChat) && (
                    <span
                      className={`${
                        showLastWeek || showChat ? "opacity-95" : "opacity-0"
                      } text-[#778899] text-[12px] font-medium transition-all duration-[400ms]`}
                    >
                      {lastWeekView}
                    </span>
                  )}
                </>
              )}
            </Box>
            <Box className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  position: "absolute",
                  top: isHovered ? "40%" : "57%",
                  opacity: isHovered ? 0 : 1,
                  transition: "top 0.6s ease-in-out, opacity 0.6s ease-in-out",
                }}
              >
                {formatAmount(totalAmount)}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: isHovered ? "10%" : "0",
                  transition: "bottom 0.8s ease",
                  opacity: isHovered ? 1 : 0,
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    background: "#7788992e",
                    color: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    "&.MuiButton-root": {
                      height: "fit-content",
                      padding: "5px 45px",
                      borderRadius: "0px",
                      textTransform: "capitalize",
                      "&:hover": {
                        background: "#B6BBC4",
                      },
                      "& svg": {
                        fontSize: "15px",
                      },
                    },
                  }}
                >
                  {viewMoreText}
                </Button>
                {isChart && (
                  <AiOutlineLineChart
                    className=" bg-blue-700 w-[30px] p-[7px] rounded-full  h-[30px] cursor-pointer hover:bg-blue-900"
                    color="#FFF"
                    onClick={() => setShowChat(true)}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        {isChart && (
          <Box
            sx={{
              width: showChat ? "400px" : "0",
              //   width: "fit-content",
              height: "100%",
              opacity: showChat ? 1 : 0,
              transition: "width 1s ease",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "100%",
                width: showChat ? "405px" : "0",
                alignItems: "center",
                opacity: showChat ? 1 : 0,
                transition: "width 1s ease",
                marginLeft: "-60px",
                position: "absolute",
                bottom: "10px",
              }}
            >
              <OverViewChat
                setColor={
                  title === "Business Account"
                    ? "#AD88C6"
                    : title === "Tax Reserve"
                    ? "#FFB6D9"
                    : title === "Business Savings"
                    ? "#C65BCF"
                    : "black"
                }
              />
              <Box
                onClick={() => setShowChat(false)}
                className="cursor-pointer mr-[-10px] w-[20px] h-[80%] 
                              flex justify-between items-center bg-slate-200"
              >
                <RiArrowDropLeftLine size={20} className="font-bold" />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box

      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
        sx={{
          borderBottom: isHovered
            ? "2.5px solid #C7C8CC"
            : showChat
            ? "2.5px solid #AD88C6"
            : "none",
          marginX: "20px",
          position: "relative",
          transition: "borderBottom 1.5s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export default OverViewItems;
