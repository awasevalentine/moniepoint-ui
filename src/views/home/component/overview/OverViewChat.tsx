import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890];
const xLabels = ["Jan 17", "Jan 25", "Feb 1", "Feb 7", "Feb 15"];


const OverViewChat = ({setColor}: {setColor: string}) => {
  return (
      <LineChart
        width={400}
        height={180}
        series={[
          {
            data: uData,
            label: "uv",
            area: true,
            showMark: false,
            color: setColor,
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[]}
        leftAxis={null}
        slotProps={{ legend: { hidden: true } }}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
            marginLeft: '-110px'
          },
          marginRight: "-40px",
        }}
      />
  );
};

export default OverViewChat;
