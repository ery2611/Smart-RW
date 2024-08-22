import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Calender from "../../../components/CommandComponents/Kalender/calender";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function KebersihanJadwalMobile() {
  const data = [
    {
      tugas: "Sapu Jalan",
      jam: "08:30",
      status_tugas: "DONE",
    },
    {
      tugas: "Sapu Halaman Masjid",
      jam: "12:00",
      status_tugas: "ONGOING",
    },
    {
      tugas: "Sapu Lapangan",
      jam: "13:00",
      status_tugas: "UPCOMING",
    },
  ];

  const getPeringatanColor = (peringatan) => {
    switch (peringatan) {
      case "DONE":
        return {
          color: "#5AF411",
          fontWeight: "bold",
        };
      case "UPCOMING":
        return {
          color: "#EE1717",
          fontWeight: "bold",
        };
      case "ONGOING":
        return {
          color: "#FFD302",
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
  const bulan = now.toLocaleString("id-ID", { month: "long" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal}  ${bulan}  ${tahun}`;
  const Navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      {/* Membatasi lebar pada perangkat besar */}
      <Box marginBottom={2}>
        <Calender />
      </Box>
      <Stack direction="column" justifyContent={"flex-start"}>
        <Typography sx={{ color: "#A0A1A4", fontSize: "10px" }}>
          Hari Ini
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2 }}>
          <Typography
            sx={{ color: "#00A9AD", fontSize: "14px", fontWeight: "bold" }}
          >
            {formatTanggal}
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {data.map((card, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Card
              onClick={() => Navigate("/KebersihanMobile/Jadwal/Detail")}
              component={Paper}
              sx={{
                maxWidth: "auto",
                maxHeight: "36px",
                display: "flex",
                alignItems: "center",
                padding: 1,
                boxShadow: 3,
              }}
            >
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
                <Stack direction={"row"} sx={{ marginLeft: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: "bold",
                      marginRight: "10px",
                      color: "#00A9AD",
                    }}
                  >
                    {card.jam}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      marginRight: "1px",
                    }}
                  >
                    {card.tugas}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack direction={"column"} sx={{ textAlign: "right" }}>
                    <Typography
                      sx={{
                        ...getPeringatanColor(card.status_tugas),
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {card.status_tugas}
                    </Typography>
                  </Stack>
                  <ChevronRightIcon sx={{ color: "#00A9AD" }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        display={"flex"}
        width="56px"
        height="56px"
        borderRadius="50%"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "#00A9AD",
          position: "fixed",
          bottom: "16px", // Jarak dari bawah layar
          right: "16px", // Jarak dari kanan layar
          zIndex: 1000,
        }}
      >
        <AddIcon />
      </Box>
    </Container>
  );
}

export default KebersihanJadwalMobile;
