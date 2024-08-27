import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import Person from "@mui/icons-material/Person";
import Jam from "@mui/icons-material/QueryBuilderOutlined";
import Kalender from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate } from "react-router-dom";
import Lokasi from "@mui/icons-material/LocationOn"; // Replace with actual icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button

function Index() {
  const Navigate = useNavigate();

  const PengumumanData = [
    {
      title: "Kerja Bakti",
      deskripsi:
        "Bulan ini ada akan kerja bakti untuk perbaikan jalan Kemang Pratama 2",
      gambar:
        "https://tse1.mm.bing.net/th?id=OIP.rafmDrP9vNezAvoR7F6dAwHaE7&pid=Api&P=0&h=180",
    },
    {
      title: "Pelebaran Selokan",
      deskripsi: "Bulan ini ada akan ada renovasi untuk Selokan Jalanan Utama",
      gambar:
        "https://t-2.tstatic.net/jogja/foto/bank/images/Proses-Perbaikan-Selokan-Mataram-Dikeringkan.jpg", // Replace with the actual image path
    },
  ];

  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  return (
    <Box
      sx={{
        display: "fluid",
        justifyContent: "flex-start",
        marginTop: "10px",
        pl: 4,
        pr: 4,
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            sx={{
              position: "relative",
              color: "#00A9AD",
              pl: 5, //  text is inside the box
              lineHeight: "60px",
              zIndex: 6, // text is on top of the box
              fontSize: "30px",
              fontWeight: "bolder",
              mt: 2,
            }}
          >
            Pengumuman Minggu Ini
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => Navigate("/Warga/Pengumuman")}
            sx={{
              backgroundColor: "#00A9AD",
              color: "white",
              boxShadow: 5,
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#00A9AD",
                color: "white",
              },
            }}
          >
            Semua Pengumuman
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          zIndex: 3,
          marginBottom: "100px",
        }}
      >
        {PengumumanData.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "320px",
              display: "inline-flex",
              marginRight: "20px", // Jarak antar card
              flexDirection: "column",
              flexShrink: 0, // Menghindari penyusutan card
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.gambar}
              alt={item.title}
              sx={{
                backgroundColor: "#EFEFEF",
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#00A9AD",
                  fontWeight: "bolder",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {truncateText(item.title, 30)}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {truncateText(item.deskripsi, 40)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => Navigate("/DetailPengumuman")}
                  sx={{
                    backgroundColor: "#00A9AD",
                    padding: "8px 16px", // Menyesuaikan padding sesuai dengan konten tombol
                    display: "inline-flex", // Menjaga tombol agar sesuai dengan konten
                    alignItems: "center",
                    fontWeight: "bold",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#00A9AD",
                    },
                  }}
                >
                  Selebihnya
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Index;
