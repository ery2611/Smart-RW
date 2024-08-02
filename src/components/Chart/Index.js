// PieChartComponent.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Typography, Stack } from "@mui/material";
import "chart.js/auto";
import { useLocation } from "react-router-dom";

const PieChartComponent = ({ data }) => {
  // Prepare the data for the chart
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ["#FFCD56", "#FF9F40", "#4BC0C0", "#36A2EB"],
        hoverBackgroundColor: ["#FFCD56", "#FF9F40", "#4BC0C0", "#36A2EB"],
      },
    ],
  };


  const { pathname } = useLocation();

  // Menentukan teks Typography berdasarkan URL
  const typographyText = pathname === '/Panggilan' 
    ? 'DATA PANGGILAN DARURAT' 
    : pathname === '/Ogs'
    ? 'DATA ONE GATE SYSTEM'
    : 'Default Text';
  return (
    <Box sx={{
      marginTop:'20px'
    }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1, textAlign:"center" }}>
      {typographyText}
      </Typography>
      <Typography variant="body2" sx={{ color: "#6c757d", marginBottom: 3, textAlign:"center" }}>
        Senin, 6 Januari 2024
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          width: 300, // Adjust width to make the chart smaller
          margin: "auto",
        }}
      >
        <Pie data={chartData} width={250} height={250} />
      </Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ marginTop: 2 }}
      >
        {chartData.labels.map((label, index) => (
          <Stack direction="column" alignItems="center" key={index}>
            <Box
              sx={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
                borderRadius: "50%",
                marginBottom: 1,
              }}
            />
            <Typography sx={{ color: "#6c757d" }}>{label}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {chartData.datasets[0].data[index]}%
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default PieChartComponent;