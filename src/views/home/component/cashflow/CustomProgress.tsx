import { MdArrowDropDown } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { formatAmount } from "../../../../util/formatNumberToMoney";

const BorderLinearProgress = styled(LinearProgress)<{ bgcolor: string }>(
  ({ theme, bgcolor }) => ({
    height: 5,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: bgcolor,
      // backgroundImage: `linear-gradient(45deg, transparent 25%, #1a90ff 25%, #1a90ff 50%, transparent 50%, transparent 75%, #1a90ff 75%, #1a90ff)`
    },
    "& .MuiLinearProgress-bar": {
      borderRadius: 0,
      background: bgcolor,
    },
    background: bgcolor,
  })
);

type Props = {
  name: string;
  color: string;
  amount: number;
  percentage: number;
};

const CustomProgress = ({ name, color, amount, percentage }: Props) => {
  return (
    <Box className="flex flex-col gap-2">
      <Box className="flex justify-between items-center">
        <Box className="flex items-center gap-3">
          <Box
            className="rounded-full flex justify-center items-center h-[20px] w-[20px]"
            style={{ backgroundColor: color }} // Set the background color
          >
            <MdArrowDropDown color="#FFF" size={20} />
          </Box>
          <span className="text-[16px] font-normal">{name}</span>
          <span className="bg-[#f3f5f9] text-[12px] py-[0px] px-2">
            %{percentage}
          </span>
        </Box>
        <span className="text-[16px] font-normal">{formatAmount(amount)}</span>
      </Box>
      <BorderLinearProgress
        variant="determinate"
        bgcolor={color} // Pass the color prop
        value={percentage}
        sx={{
          "& .MuiLinearProgress-root span": {
            borderRadius: "0px !important",
          },
        }}
      />
    </Box>
  );
};

export default CustomProgress;
