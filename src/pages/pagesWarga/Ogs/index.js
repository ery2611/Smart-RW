import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Box, useMediaQuery } from "@mui/material";
import Infomobild from "../../../components/WargaComponents/Ogs/info";
import CustomBarChart from "../../../components/WargaComponents/Ogs/chart";
import Header from "../../../components/WargaComponents/Header";
import BottomBar from "../../../components/WargaComponents/BottomBar";

const TrafficPage = () => {
  const [chartData, setChartData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("id-ID", options));
  }, []);

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
      <Container sx={{ mt: { md: "100px", sm: "" }, pb: { xs: 4, sm: 6 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                mb: 1,
              }}
            >
              <Typography sx={{ color: "#333333", fontSize: "18px" }}>
                {currentDate}
              </Typography>
            </Box>
            <CustomBarChart data={chartData} />
          </Grid>

          {/*  cards untuk "Kendaraan Masuk", "Kendaraan Keluar", and "Total Kendaraan" */}
          <Grid item xs={12} sm={4} sx={{ marginBottom: "10px" }}>
            <Infomobild
              title="Kendaraan Masuk"
              mobilCount={masukMobilCount}
              motorCount={masukMotorCount}
              onClick={() => setChartData(masukData)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Infomobild
              title="Kendaraan Keluar"
              mobilCount={keluarMobilCount}
              motorCount={keluarMotorCount}
              onClick={() => setChartData(keluarData)}
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mb: { xs: 3, sm: 6 } }}>
            <Infomobild
              title="Total Kendaraan"
              mobilCount={totalMobilCount}
              motorCount={totalMotorCount}
              onClick={() => setChartData(totalData)}
            />
          </Grid>
        </Grid>
      </Container>
      <BottomBar />
    </Box>
  );
};

export default TrafficPage;
