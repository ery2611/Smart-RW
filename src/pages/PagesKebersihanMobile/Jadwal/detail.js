import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KebersihanDetail() {
  const Navigate = useNavigate();
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const handleCompleteTask = () => {
    setIsTaskCompleted(true);
  };

  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          backgroundColor: "#EFEFEF",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: 1,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#00A9AD",
              fontWeight: "bold",
              textAlign: "start",
              fontSize: 14,
            }}
          >
            Menjaga Pos Keamanan
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 1 }}>
            <LocationOnIcon sx={{ color: "#FE4646" }} />
            <Typography sx={{ ml: 0.5, fontSize: 12 }}>
              Jl. Kemang Dahlia raya
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthIcon sx={{ color: "#00A9AD" }} />
              <Typography sx={{ ml: 0.5, fontSize: 12 }}>
                22 Januari 2024
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", mr: 13.5 }}>
                <AccessTimeIcon sx={{ color: "#00A9AD" }} />
                <Typography sx={{ ml: 0.5, fontSize: 12 }}>09:30</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Mengatur elemen secara horizontal
              justifyContent: "space-between", // Menyebarkan elemen ke kiri dan kanan
              alignItems: "center", // Menyelaraskan item secara vertikal
              mt: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textAlign: "start",
                fontSize: 12,
              }}
            >
              Regu Kebersihan
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontSize: 12, textAlign: "end" }}
            >
              Regu 1 Kebersihan
            </Typography>
          </Box>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: 12, textAlign: "start", mb: 1 }}
          >
            Anggota Bertugas
          </Typography>
          {/* Rahmat's Info with Icon Buttons on the Right */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/path-to-rahmat-pic.jpg" />
              <Box
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "start",
                    lineHeight: 1.2, // Memastikan line height tidak terlalu besar
                  }}
                >
                  Rama
                </Typography>
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    textAlign: "start",
                    lineHeight: 1.2, // Menyelaraskan line height
                  }}
                >
                  Anggota Regu 1 Kebersihan
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            padding: 1,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#00A9AD",
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "start",
            }}
          >
            Instruksi
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "start", fontSize: 12 }}
          >
            Urutan atau alur pembersihan aula warga, kegiatan dimulai dari:
            <br />
            1. Halaman Aula
            <br />
            2. Ruang Depan
            <br />
            3. Ruang Belakang
            <br />
            4. Gudang
          </Typography>
        </Box>

        {!isTaskCompleted && (
          <Box
            sx={{
              padding: 1,
              paddingBottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#00A9AD",
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              Catatan Tambahan
            </Typography>
            <Typography
              sx={{
                color: "#aeaeae",
                fontStyle: "italic",
                textAlign: "start",
                fontSize: 12,
              }}
            >
              Tidak ada catatan
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
            position: "fixed",
            bottom: 0,
            right: 0,
          }}
        >
          <Button
            onClick={() => Navigate("/KebersihanMobile/Jadwal/Detail/Form")}
            variant="contained"
            sx={{
              width: 140,
              height: 38,
              color: "#F0F0F0",
              bgcolor: "#00A9AD",
              fontWeight: "bolder",
              textTransform: "capitalize",
              border: "2px solid #00a9ad",
              "&:hover": {
                color: "#F0F0F0",
                bgcolor: "#00A9AD",
              },
            }}
          >
            Buat Laporan
          </Button>
        </Box>
      </Container>
    </div>
  );
}
