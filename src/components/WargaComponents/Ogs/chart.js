import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const CustomBarChart = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <BarChart
          xAxis={[
            {
              dataKey: "time",
              scaleType: "band", // Menentukan tipe skala sebagai 'band' untuk waktu
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
              ticks: [0, 20, 40, 60, 80, 100], // Menentukan frekuensi kendaraan sebagai ticks
            },
          ]}
          series={[
            {
              dataKey: "mobil",
              label: "Mobil",
              color: "#E200CB",
            },
            {
              dataKey: "motor",
              label: "Motor",
              color: "#3B2ECC",
            },
          ]}
          height={300} // Menentukan tinggi grafik
          dataset={data} // Dataset berisi data kendaraan masuk dan keluar
          margin={{ top: 10, right: 30, left: 40, bottom: 30 }} // Menyesuaikan margin
        />
      </CardContent>
    </Card>
  );
};

export default CustomBarChart;
