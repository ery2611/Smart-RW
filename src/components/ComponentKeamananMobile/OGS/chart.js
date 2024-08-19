import React from "react";
import { Card, Box, Typography, Stack } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Mobil", value: 28, color: "#4285F4" },
  { name: "Motor", value: 69, color: "#FBBC04" },
];

const PieCard = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <Box sx={{ width: 80, height: 80 }}>
        <PieChart width={80} height={80}>
          <Pie
            data={data}
            innerRadius={30}
            outerRadius={40}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </Box>
      <Box
        sx={{
          ml: 2,
          justifyContent: "flex-start",
          display: "flex",
          marginLeft: "30px",
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "90px",
              mb: 1,
              justifyContent: "center",
              marginRight: "0px",
              marginLeft: "5px",
            }}
          >
            <Stack direction="column">
              <Typography
                fontSize="36px"
                sx={{ fontWeight: "bold", color: item.color }}
              >
                {item.value}
              </Typography>
              <Typography fontSize="12px" sx={{ ml: 1 }}>
                {item.name}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PieCard;
