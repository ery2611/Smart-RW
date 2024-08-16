import {
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function KeamananPos() {
  const data = [
    {
      pos: "Pos Lapangan",
      jam: "08:00-10:00",
      nama: "Gunawan",
      status_kehadiran: "Hadir",
    },
    {
      pos: "Pos Brotherhood",
      jam: "08:00-10:00",
      nama: "Idris",
      status_kehadiran: "Tidak Hadir",
    },
    {
      pos: "Pos Balai RW",
      jam: "08:00-10:00",
      nama: "Dede",
      status_kehadiran: "Hadir",
    },
    {
      pos: "Pos Bunderan 1",
      jam: "08:00-10:00",
      nama: "Ery",
      status_kehadiran: "Tidak Hadir",
    },
    {
      pos: "Pos Anggrek ",
      jam: "08:00-10:00",
      nama: "Iduan",
      status_kehadiran: "Hadir",
    },
  ];

  const getPeringatanColor = (peringatan) => {
    switch (peringatan) {
      case "Hadir":
        return {
          color: "#5AF411",
          fontWeight: "bold",
        };
      case "Tidak Hadir":
        return {
          color: "#EE1717",
          fontWeight: "bold",
        };
      default:
        return {};
    }
  };

  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal} / ${bulan} / ${tahun}`;

  return (
    <Container maxWidth="sm">
      {/* Membatasi lebar pada perangkat besar */}
      <Stack direction="column" justifyContent={"flex-start"}>
        <Typography
          variant="h5"
          sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 14 }}
        >
          Kondisi Pos Hari Ini
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2 }}>
          <Typography sx={{ color: "#A0A1A4", fontSize: 10 }}>
            {formatTanggal}
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {data.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              component={Paper}
              sx={{
                maxWidth: "328px",
                maxHeight: "58px",
                display: "flex",
                alignItems: "center",
                padding: 1,
                boxShadow: 3,
              }}
            >
              <HomeRoundedIcon
                sx={{
                  width: "32.25px",
                  height: "32.25px",
                  color: "#00A9AD",
                  marginRight: 2,
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%", // Agar mengisi penuh Card
                  padding: 0,
                  marginTop: "auto",
                }}
              >
                <Stack direction={"column"} sx={{ marginLeft: 1 }}>
                  <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                    {card.pos}
                  </Typography>
                  <Typography sx={{ fontSize: 10, color: "#AEAEAE" }}>
                    <i>{card.jam}</i>
                  </Typography>
                </Stack>
                <Stack direction={"column"} sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 12, color: "#AEAEAE" }}>
                    {card.nama}
                  </Typography>
                  <Typography
                    sx={{
                      ...getPeringatanColor(card.status_kehadiran),
                      fontSize: 10,
                    }}
                  >
                    {card.status_kehadiran}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default KeamananPos;
