import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from "@mui/material";
import Lokasi from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Person from "@mui/icons-material/Person";
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
      gambar:
        "https://i.ytimg.com/vi/PD_FUVrOb-w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH2CYAC0AWKAgwIABABGEIgYShlMA8=&rs=AOn4CLAaGihwnjRfmOQOlQ5YuexHnD-oqw", // Replace with the actual image path
    },
    {
      title: "Kebakaran",
      deskripsi:
        "Telah Terjadi Kebakaran di RT003, dan menyebabkan kerugian sebesar 5M",
      pelaku: "-",
      lokasi: "RT 003",
      gambar:
        "https://independensi.com/wp-content/uploads/2018/08/pemadam-kebakaran.jpg", // Replace with the actual image path
    },
    {
      title: "Bayi Hilang",
      deskripsi:
        "Telah terjadi seoranh bayi yang hilang pada hari senin dini hari",
      pelaku: "Untuk yang ingin Olahraga Pagi",
      lokasi: "Lapangan Kemang Pratama 2",
      gambar:
        "https://tse2.mm.bing.net/th?id=OIP.P7N31XHcVJVVZLktOGMumgHaE8&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Kebakaran",
      deskripsi:
        "Telah Terjadi Kebakaran di RT003, dan menyebabkan kerugian sebesar 5M",
      pelaku: "-",
      lokasi: "RT 003",
      gambar:
        "https://independensi.com/wp-content/uploads/2018/08/pemadam-kebakaran.jpg", // Replace with the actual image path
    },
    {
      title: "Bayi Hilang",
      deskripsi:
        "Telah terjadi seoranh bayi yang hilang pada hari senin dini hari",
      pelaku: "Untuk yang ingin Olahraga Pagi",
      lokasi: "Lapangan Kemang Pratama 2",
      gambar:
        "https://tse2.mm.bing.net/th?id=OIP.P7N31XHcVJVVZLktOGMumgHaE8&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Maling Laptop Tertangkap",
      deskripsi:
        "Maling yang mencuri laptop bapak Aan akhirnya sudah tertangkap oleh warga RW 36",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
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

  return (
    <Box sx={{ marginTop: "20px", borderRadius: 2, pl: 2, pr: 2 }}>
      <Box>
        <Typography
          sx={{
            color: "#00A9AD",
            lineHeight: "60px",
            fontSize: "30px",
            fontWeight: "bolder",
            mt: 2,
            mb: 4,
          }}
        >
          Semua Berita
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers the cards horizontally

            flexWrap: "wrap", // Ensures cards wrap properly on different screen sizes
            gap: 2, // Adds spacing between cards
            mt: -3,
            position: "relative",
            zIndex: 3,
            marginBottom: "73px",
          }}
        >
          {currentItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                marginRight: "20px",
                boxShadow: "none",
                background: "transparent",
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
                  flexGrow: 1,
                  padding: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "#00A9AD" }}
                >
                  {truncateText(item.title, 20)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncateText(item.deskripsi, 100)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4, mt: -4 }}>
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
