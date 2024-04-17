import { Box, Button } from "@mui/material";
import logo4 from "../../../assets/logos/mpoint-logo4.svg";
import { GrView } from "react-icons/gr";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Analytic = () => {
  return (
    <Box className="flex flex-row justify-between items-end mt-[5rem] mb-[3rem]">
      <Box className="flex flex-col gap-1">
        <span className="text-1xl text-stone-300 antialiased">
          Total Balance
        </span>
        <Box className="flex flex-row gap-6 items-center">
          <span className="text-white text-[2.3rem] antialiased font-semibold tracking-widest ">
            {"$36,254"}
          </span>
          <Box className="flex flex-row gap-2 items-end text-[14px]">
            <img src={logo4} alt="Arrow Up" width={30} height={30} />
            <span className="text-stone-300">{"$328.32 Today, Feb 15"}</span>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-row gap-4 items-center">
        <Box className="flex gap-2 items-center cursor-pointer">
          <AiFillEye color="#C7C8CC" />
          <span className="text-[#C7C8CC] text-[12px]">View Analytics </span>
        </Box>
        <Box className="w-[1.2px] h-[26px] bg-[#2c2b2b]"></Box>
        <Button
          startIcon={<FiArrowUpRight />}
          sx={{
            background: "#5e2ff4",
            color: "#FFF",
            fontSize: "12px",
            "&.MuiButton-root": {
              height: "fit-content",
              padding: "3px 10px",
              borderRadius: "0px",
              textTransform: "capitalize",

              "& svg": {
                fontSize: "15px",
              },
            },

            "&:hover": {
              background: "#5e2ff4",
            },
          }}
        >
          Send Money
        </Button>
        <Button
          startIcon={<FaPlus />}
          sx={{
            background: "#2c2b2b",
            color: "#FFF",
            fontSize: "12px",
            "&.MuiButton-root": {
              height: "fit-content",
              padding: "3px 10px",
              borderRadius: "0px",
              textTransform: "capitalize",

              "& svg": {
                fontSize: "15px",
              },
            },
          }}
        >
          Add Money
        </Button>
        <Button
        //   startIcon={
          className="p-[7px] bg-[#2c2b2b] cursor-pointer rounded-full"
          sx={{
            background: "#2c2b2b",
            color: "#FFF",
            fontSize: "12px",
            "&.MuiButton-root": {
              height: "fit-content",
              padding: "7px",
              borderRadius: "100%",
              minWidth: 'unset',
              "& svg": {
                fontSize: "15px",
              },
            },
          }}
        >
            <HiOutlineDotsHorizontal color="#FFF" />
        </Button>
      </Box>
    </Box>
  );
};

export default Analytic;
