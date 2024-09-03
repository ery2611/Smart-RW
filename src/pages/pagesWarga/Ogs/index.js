import React, { useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import Infomobild from "../../../components/WargaComponents/Ogs/info";
import CustomBarChart from "../../../components/WargaComponents/Ogs/chart";
import Header from "../../../components/WargaComponents/Header";

const TrafficPage = () => {
  const [chartData, setChartData] = useState([]);

  const masukData = [
    { time: "00:01 - 04:00", mobil: 20, motor: 20 },
    { time: "04:01 - 08:00", mobil: 10, motor: 20 },
    { time: "08:01 - 12:00", mobil: 40, motor: 30 },
    { time: "12:01 - 16:00", mobil: 50, motor: 40 },
    { time: "16:01 - 20:00", mobil: 10, motor: 25 },
    { time: "20:01 - 00:00", mobil: 10, motor: 40 },
  ];

  const keluarData = [
    { time: "00:01 - 04:00", mobil: 5, motor: 5 },
    { time: "04:01 - 08:00", mobil: 20, motor: 10 },
    { time: "08:01 - 12:00", mobil: 20, motor: 30 },
    { time: "12:01 - 16:00", mobil: 40, motor: 10 },
    { time: "16:01 - 20:00", mobil: 20, motor: 15 },
    { time: "20:01 - 00:00", mobil: 40, motor: 20 },
  ];

  const totalData = masukData.map((item, index) => ({
    time: item.time,
    mobil: item.mobil + keluarData[index].mobil,
    motor: item.motor + keluarData[index].motor,
  }));

  const calculateCounts = (data) => {
    const mobilCount = data.reduce((total, item) => total + item.mobil, 0);
    const motorCount = data.reduce((total, item) => total + item.motor, 0);
    return { mobilCount, motorCount };
  };
  const { mobilCount: masukMobilCount, motorCount: masukMotorCount } =
    calculateCounts(masukData);
  const { mobilCount: keluarMobilCount, motorCount: keluarMotorCount } =
    calculateCounts(keluarData);
  const { mobilCount: totalMobilCount, motorCount: totalMotorCount } =
    calculateCounts(totalData);

  return (
    <Box>
      <Header />
      <Container sx={{ mt: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomBarChart data={chartData} />
          </Grid>
          <Grid item xs={4}>
            <Infomobild
              title="Kendaraan Masuk"
              mobilCount={masukMobilCount}
              motorCount={masukMotorCount}
              onClick={() => setChartData(masukData)}
            />
          </Grid>
          <Grid item xs={4}>
            <Infomobild
              title="Kendaraan Keluar"
              mobilCount={keluarMobilCount}
              motorCount={keluarMotorCount}
              onClick={() => setChartData(keluarData)}
            />
          </Grid>
          <Grid item xs={4}>
            <Infomobild
              title="Total Kendaraan"
              mobilCount={totalMobilCount}
              motorCount={totalMotorCount}
              onClick={() => setChartData(totalData)}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrafficPage;
