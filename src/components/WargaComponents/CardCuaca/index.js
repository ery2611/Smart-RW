import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Box,
  Grid,
} from "@mui/material";

const weatherInfo = [
  {
    cuaca: "Cerah",
    suhu: "36°",
    lokasi: "Bekasi, Jawa Barat",
    informasi: "Cuaca cerah terik dan panas",
  },
];

const InformasiCuacaHariIni = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const getFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const getFormattedTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleTimeString("id-ID", options);
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Box>
          {weatherInfo.map((info, index) => (
            <Box key={index} sx={{ mb: 0 }}>
              <Chip
                label={info.cuaca}
                sx={{
                  backgroundColor: "#C8FFFF",
                  color: "#32FFFF",
                }}
              />
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    Hari
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{ color: "#000", fontSize: "14px", textAlign: "left" }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    {getFormattedDate(currentDate).split(",")[0]}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    Tanggal
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{ color: "#000", fontSize: "14px", textAlign: "left" }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    {getFormattedDate(currentDate)
                      .split(",")
                      .slice(1)
                      .join(",")}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    Waktu
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{ color: "#000", fontSize: "14px", textAlign: "left" }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    {getFormattedTime(currentDate).replace(/\./g, " : ")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    Suhu
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{ color: "#000", fontSize: "14px", textAlign: "left" }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    {info.suhu}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginTop={2}>
                <Stack direction="column" alignItems="left">
                  <span>Lokasi</span>
                  <span style={{ color: "#A1A5B7" }}>{info.lokasi}</span>
                </Stack>
              </Grid>
              <Grid container spacing={1} marginTop={2}>
                <Stack direction="column" alignItems="left">
                  <span>Informasi Cuaca</span>
                  <span style={{ color: "#A1A5B7" }}>{info.informasi}</span>
                </Stack>
              </Grid>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InformasiCuacaHariIni;