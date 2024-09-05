import {
  Avatar,
  Box,
  Card,
  Container,
  Stack,
  Typography,
  Grid,
  CardContent,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Icon from "@mui/icons-material/CheckCircle"; // Ganti dengan ikon yang Anda inginkan
import FloodIcon from "@mui/icons-material/Flood";
import FireIcon from "@mui/icons-material/LocalFireDepartment";
import { GrUserPolice } from "react-icons/gr";
import { FaAmbulance } from "react-icons/fa";

const cardData = [
  {
    color: "#02974F",
    text: "Bencana",
    icon: <FloodIcon sx={{ fontSize: 80 }} />,
  },
  {
    color: "#D92A2A",
    text: "Kesehatan",
    icon: <FaAmbulance size="80px" />,
  },
  {
    color: "#DB9205",
    text: "Kebakaran",
    icon: <FireIcon sx={{ fontSize: 80 }} />,
  },
  {
    color: "#4C68CC",
    text: "Keamanan",
    icon: <GrUserPolice size="80px" />,
  },
];

export default function WargaPanggilanDarurat() {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
          }}
        >
          <LocationOnIcon sx={{ fontSize: 40 }} />
          <Card
            sx={{
              p: "2px",
            }}
          >
            <Typography fontSize={24} sx={{ mr: 2, ml: 2 }}>
              Jl Kemang Dahlia 2 blok X no 1
            </Typography>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
            padding: 1,
            maxWidth: 800, // Sesuaikan dengan kebutuhan Anda
            ml: "auto",
            mr: "auto",
          }}
        >
          {/* Gambar di sebelah kiri */}
          <Box
            component="img"
            src="https://via.placeholder.com/448x304" // Ganti dengan URL gambar yang Anda inginkan
            alt="Contoh Gambar"
            sx={{
              width: 448,
              height: 304,
              borderRadius: 2,
            }}
          />

          {/* Teks di sebelah kanan */}
          <Stack
            spacing={1}
            sx={{
              marginLeft: 2,
              textAlign: "start", // Teks akan berada di tengah secara horizontal
              flex: 1, // Mengambil sisa ruang yang tersedia
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#000000", fontWeight: "bold", fontSize: 28 }}
            >
              Emergency Button
            </Typography>
            <Typography variant="body1" sx={{ color: "#000000", fontSize: 20 }}>
              Tekan Emergency Button dibawah dan petugas akan segera datang
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              sx={{
                width: 250,
                height: 170,
                backgroundColor: card.color,
                color: "#ffffff", // Warna teks dan ikon putih
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "70px",
                boxShadow: 3,
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "transparent",
                    borderRadius: 0,
                    width: 80,
                    height: 80,
                  }}
                >
                  {card.icon}
                </Avatar>
                <Typography variant="h6" sx={{ marginTop: 1 }}>
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </div>
  );
}
