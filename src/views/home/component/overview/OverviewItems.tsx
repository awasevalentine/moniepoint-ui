import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import logo6 from "../../../../assets/logos/mpoint-logo6.svg";
import { RiArrowRightUpFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiArrowDropLeftLine } from "react-icons/ri";

const OverViewItems = () => {
  const [showLastWeek, setShowLastWeek] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <Box className="flex flex-row pl-[20px] pt-[25px] bg-white relative"
    sx={{
        width: showChat ? "100%" : "350px",
        height: '180px',
        transition: showChat ? "width 1.5s ease" : "width 1.5s ease-in-out",

    }}
    >
      <Box
        sx={{
          width: showLastWeek || isHovered && !showChat ? "350px" : "230px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <img src={logo6} alt="Business Account Logo" width={35} height={35} />
        </Box>
        <Box
          onMouseEnter={() =>
            !showChat ? setIsHovered(true) : setIsHovered(false)
          }
          onMouseLeave={() => setIsHovered(false)}
          className="h-full"
        >
          <Box className="flex flex-row gap-3 items-center mt-5">
            <span className="text-[16px] font-medium">Business Account</span>
            <Box className="flex flex-row gap-[6px] items-center">
              <RiArrowRightUpFill
                className="bg-[#aaee00] h-[15px] w-[25px] text-[18px] rounded-[9px]"
                color="black"
              />
              <span
                className="text-[10px] font-bold cursor-pointer"
                onMouseEnter={() => setShowLastWeek(true)}
                onMouseLeave={() => setShowLastWeek(false)}
              >
                12.3%
              </span>
            </Box>
            {showLastWeek && !showChat && (
              <span
                className={`${
                  showLastWeek ? "opacity-95" : "opacity-0"
                } text-[#778899] text-[14px] transition-all duration-[400ms]`}
              >
                Vs. Last Week
              </span>
            )}
          </Box>
          <Box className="flex flex-col">
            <Typography
            //   className={`text-[26px] font-medium tracking-widest leading-10`}
              sx={{
                fontSize: '26px',
                fontWeight: 500,
                letterSpacing: '1px',
                position: 'absolute',
                top: isHovered ? "40%" : "57%",
                opacity: isHovered ? 0 : 1,
                transition: 'top 0.6s ease-in-out, opacity 0.6s ease-in-out'
              }}
            >
              $33,842
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
                    padding: "8px 45px",
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
                View Account Details
              </Button>
              <AiOutlineLineChart
                className=" bg-blue-700 w-[35px]  h-[35px] cursor-pointer hover:bg-blue-900"
                color="#FFF"
                onClick={() => setShowChat(true)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* {showChat && ( */}
        <Box
          sx={{
            width: showChat ? "400px" : "0",
            // opacity: showChat ? 1 : 0,
            height: "100%",
            transition: showChat ? "width 1.5s ease" : "width 1.5s ease-in-out",
            background: "red",
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
        <Box 
        sx={{
            display:'flex',
            height: '100%',
            alignItems: 'center',
            opacity: showChat ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out'
        }}
        >
          <Box
            onClick={() => setShowChat(false)}
            className="ml-[10px] cursor-pointer  mr-[-10px] w-[20px] h-[80%] 
            flex justify-between items-center bg-slate-200"
          >
            <RiArrowDropLeftLine size={20} className="font-bold" />
          </Box>
        </Box>
        </Box>

      {/* {showChat && (
        <Box className="flex h-full items-center">
          <Box
            onClick={() => setShowChat(false)}
            className="ml-[10px] cursor-pointer  mr-[-10px] w-[20px] h-[80%] 
            flex justify-between items-center bg-slate-200"
          >
            <RiArrowDropLeftLine size={20} className="font-bold" />
          </Box>
        </Box>
      )} */}
    </Box>
  );
};

export default OverViewItems;
