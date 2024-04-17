import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material";
import { RxAvatar } from "react-icons/rx";
import { RiSettingsLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Logo1 from "../../assets/logos/mpoint-logo1 (1).svg";
import Logo2 from "../../assets/logos/mpoint-logo2.svg";
import Logo3 from "../../assets/logos/mpoint-logo3.svg";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="w-full flex flex-row justify-between items-center">
      <Box className="flex flex-row gap-5 items-center">
        <img src={Logo1} alt="Brand logo" width={30} height={30} />
        <img src={Logo2} alt="Framer logo" width={30} height={30} />
      </Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: "black",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <CustomButtonNavAction label="Dashbord" />
        <CustomButtonNavAction label="Payments" />
        <CustomButtonNavAction label="Transaction" />
        <CustomButtonNavAction label="Cards" />
        <CustomButtonNavAction label="Invoice" />
        <CustomButtonNavAction label="Insights" />
      </BottomNavigation>

      <Box className="flex flex-row gap-5 items-center">
        <FiSearch color="white" className="cursor-pointer  hover:scale-110" />
        <IoMdNotificationsOutline
          color="white"
          className="cursor-pointer hover:scale-110"
        />
        <RiSettingsLine
          color="white"
          className="cursor-pointer  hover:scale-110"
        />
        <img
          src={Logo3}
          alt="Brand logo"
          width={30}
          height={30}
          className="cursor-pointer  hover:scale-110"
        />
      </Box>
    </Box>
  );
}

interface CustomButtonNavActionProps {
  label: string;
}

const CustomButtonNavAction = styled(
  BottomNavigationAction
)<CustomButtonNavActionProps>(() => ({
  color: "#C7C8CC",
  maxWidth: "fit-content",
  minWidth: "fit-content",
  height: "fit-content",
  padding: "5px 12px",
  borderRadius: "2px",
  fontFamily: "Inter",
  "&.Mui-selected": {
    background: "#5e2ff4 !important",
    color: "white",
    height: "fit-content",
    padding: "5px 12px",
    borderRadius: "2px",
  },

  "&.MuiBottomNavigationAction-label": {
    fontFamily: "Inter",
  },
}));
