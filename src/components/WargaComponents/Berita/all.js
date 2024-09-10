import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Pagination,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Lokasi from "@mui/icons-material/LocationOn";

import Person from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarMonthRounded";
import { useNavigate } from "react-router-dom";

function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const beritaData = [
    {
      title: "Maling Laptop Tertangkap",
      deskripsi:
        "Maling yang mencuri laptop bapak Aan akhirnya sudah tertangkap oleh warga RW 36",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      tanggal: "Kamis, 23 November 2023",
      gambar:
        "https://i.ytimg.com/vi/PD_FUVrOb-w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH2CYAC0AWKAgwIABABGEIgYShlMA8=&rs=AOn4CLAaGihwnjRfmOQOlQ5YuexHnD-oqw", // Replace with the actual image path
    },
    {
      title: "Kebakaran",
      deskripsi:
        "Telah Terjadi Kebakaran di RT003, dan menyebabkan kerugian sebesar 5M",
      pelaku: "-",
      lokasi: "RT 003",
      tanggal: "Sabtu, 25 Desember 2023",
      gambar:
        "https://independensi.com/wp-content/uploads/2018/08/pemadam-kebakaran.jpg", // Replace with the actual image path
    },
    {
      title: "Bayi Hilang",
      deskripsi:
        "Telah terjadi seoranh bayi yang hilang pada hari senin dini hari",
      pelaku: "Untuk yang ingin Olahraga Pagi",
      lokasi: "Lapangan Kemang Pratama 2",
      tanggal: "Sabtu, 27 April 2024",
      gambar:
        "https://tse2.mm.bing.net/th?id=OIP.P7N31XHcVJVVZLktOGMumgHaE8&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Kebakaran",
      deskripsi:
        "Telah Terjadi Kebakaran di RT003, dan menyebabkan kerugian sebesar 5M",
      pelaku: "-",
      lokasi: "RT 003",
      tanggal: "Jumat, 7 Juni 2024",
      gambar:
        "https://independensi.com/wp-content/uploads/2018/08/pemadam-kebakaran.jpg", // Replace with the actual image path
    },
    {
      title: "Bayi Hilang",
      deskripsi:
        "Telah terjadi seoranh bayi yang hilang pada hari senin dini hari",
      pelaku: "Untuk yang ingin Olahraga Pagi",
      lokasi: "Lapangan Kemang Pratama 2",
      tanggal: "8 Juni 2024",
      gambar:
        "https://tse2.mm.bing.net/th?id=OIP.P7N31XHcVJVVZLktOGMumgHaE8&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Maling Laptop Tertangkap",
      deskripsi:
        "Maling yang mencuri laptop bapak Aan akhirnya sudah tertangkap oleh warga RW 36",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      tanggal: "Sabtu, 7 September 2024",
      gambar:
        "https://i.ytimg.com/vi/PD_FUVrOb-w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH2CYAC0AWKAgwIABABGEIgYShlMA8=&rs=AOn4CLAaGihwnjRfmOQOlQ5YuexHnD-oqw", // Replace with the actual image path
    },
    // Add 9 more data entries to reach 11 items
    // Ensure each entry has title, deskripsi, pelaku, lokasi, and gambar fields
  ];

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beritaData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(beritaData.length / itemsPerPage);
  const isLargerThanSm = useMediaQuery("(min-width:600px)");
  const isSm = useMediaQuery("(max-width:600px)"); // Check if the screen size is small

  return (
    <Box sx={{ marginTop: "20px", borderRadius: 2, pl: 2, pr: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          position: "relative",
          zIndex: 3,
          marginBottom: "73px",
        }}
      >
        {currentItems.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: isSm ? "90%" : "300px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "none",
              backgroundColor: isSm ? "#FFFFFF" : "transparent",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => navigate("/DetailBerita")}
          >
            <CardMedia
              component="img"
              sx={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
              }}
              image={item.gambar}
              alt={item.title}
            />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 2,
              }}
            >
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: isSm ? "#333333" : "#00A9AD",
                  textAlign: isSm ? "center" : "left",
                  mb: 1,
                }}
              >
                {truncateText(item.title, 20)}
              </Typography>
              {/* Description */}
              <Typography variant="body2" sx={{ color: "#282828", mb: 1 }}>
                {truncateText(item.deskripsi, 100)}
              </Typography>
              {/* Additional details only on small screens */}
              {isSm && (
                <>
                  {/* Date */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarTodayIcon sx={{ color: "#00A9AD", mr: 1 }} />
                    <Typography sx={{ color: "#282828" }}>
                      {item.tanggal}
                    </Typography>
                  </Box>
                  {/* Location */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon sx={{ color: "#00A9AD", mr: 1 }} />
                    <Typography sx={{ color: "#282828" }}>
                      {item.lokasi}
                    </Typography>
                  </Box>
                  {/* Arrow Button */}
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "#00A9AD",
                        color: "#FFFFFF",
                        borderRadius: "50%",
                        padding: 1,
                        "&:hover": { backgroundColor: "#00A9AD" },
                      }}
                      onClick={() => navigate("/DetailBerita")}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* Pagination */}
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 4, mt: -4, pb: 2 }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#00A9AD !important",
              color: "#FFFFFF !important",
            },
            "& .MuiPaginationItem-root": {
              color: "#A1A5B7",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Index;
