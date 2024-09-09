import React from "react";
import { Card, CardContent } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const CustomBarChart = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <BarChart
          xAxis={[
            {
              dataKey: "time",
              scaleType: "band",
              ticks: [
                "00:01 - 04:00",
                "04:01 - 08:00",
                "08:01 - 12:00",
                "12:01 - 16:00",
                "16:01 - 20:00",
                "20:01 - 00:00",
              ],
            },
          ]}
          yAxis={[
            {
              ticks: [0, 20, 40, 60, 80, 100],
            },
          ]}
          series={[
            {
              dataKey: "mobil",
              label: "Mobil",
              color: "#E200CB",
              labelPosition: "top",
            },
            {
              dataKey: "motor",
              label: "Motor",
              color: "#3B2ECC",
              labelPosition: "top",
            },
          ]}
          height={300}
          dataset={data}
          margin={{ top: 50, right: 30, left: 40, bottom: 30 }}
        />
      </CardContent>
    </Card>
  );
};

export default CustomBarChart;
