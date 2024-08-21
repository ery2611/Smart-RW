import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CleaningCard = () => {
  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  const data = [
    {
      tugas: "Pembersihan Aula",
      lokasi: "Zona Dahlia, Aula Warga",
      jam: "10:30",
    },
    {
      tugas: "Pembersihan Pos",
      lokasi: "Zona Anggrek, Pos Satpam",
      jam: "14:00",
    },
    {
      tugas: "Pemeriksaan dan Perawatan AC di Kantor Utama",
      lokasi: "Zona Melati, Kantor Utama Gedung Baru",
      jam: "09:00",
    },

    {
      tugas: "Pembersihan di Kantor Utama",
      lokasi: "Zona Melati, Kantor Utama Gedung Baru",
      jam: "10:00",
    },
  ];
  return (
    <Box>
      {data.map((item, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            padding: 1,
            borderRadius: 2, // 10px
            boxShadow: 5,
            marginBottom: 3,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              paddingBottom: "16px !important",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontSize="14px" fontWeight="bolder" component="div">
                {truncateText(item.tugas, 30)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.jam}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <LocationOnIcon sx={{ color: "#FE4646", mr: 1 }} />
              <Typography
                fontSize="12px"
                fontWeight="regular"
                color="text.secondary"
              >
                {truncateText(item.lokasi, 25)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize="10px"
                fontWeight="regular"
                sx={{ color: "#CE1305" }}
              >
                Laporan belum terbuat
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ color: "#00A9AD", mr: 0.5, fontSize: "12px" }}
                >
                  Lihat Laporan
                </Typography>
                <ArrowForwardIosIcon
                  fontSize="12px"
                  sx={{ color: "#00A9AD" }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CleaningCard;
