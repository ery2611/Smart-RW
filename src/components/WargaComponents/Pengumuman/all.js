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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Lokasi from "@mui/icons-material/LocationOn"; // Replace with actual icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button
import Person from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const Navigate = useNavigate();
  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const pengumumanData = [
    {
      title: "Kerja Bakti",
      deskripsi:
        "Bulan ini ada akan kerja bakti untuk perbaikan jalan Kemang Pratama 2",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      gambar:
        "https://tse1.mm.bing.net/th?id=OIP.rafmDrP9vNezAvoR7F6dAwHaE7&pid=Api&P=0&h=180",
    },
    {
      title: "Pelebaran Selokan",
      deskripsi: "Bulan ini akan ada renovasi untuk Selokan Jalanan Utama",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",

      gambar:
        "https://t-2.tstatic.net/jogja/foto/bank/images/Proses-Perbaikan-Selokan-Mataram-Dikeringkan.jpg", // Replace with the actual image path
    },
    {
      title: "Pemilihan Ketua RW",
      deskripsi: "Bulan ini akan dilaksanakan Pemilihan Ketua RW024",
      pelaku: "Warga RW024",
      lokasi: "Balai RW",
      gambar: " https://sekilasinfo.net/wp-content/uploads/2020/03/pemilu.jpg",
    },
    {
      title: "Bazaar",
      deskripsi:
        "Minggu depan akan diadakan bazaar di lapangan utama Kemang Pratama",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Lapangan Utama Kemang",
      gambar:
        "https://cdn-2.tstatic.net/bangka/foto/bank/images/20220108_food-bazar-pgk-01.jpg",
    },
    {
      title: "Pengcoran Jalan",
      deskripsi:
        "Minggu depan akan dilaksanakan pengecoran di jalan utama Kemang Pratama",
      pelaku: "-",
      lokasi: "Jalan Utama Kemang",
      gambar:
        "https://www.rumahaspal.com/wp-content/uploads/2022/05/jasa-borong-cor-jalan.jpg",
    },
  ];

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pengumumanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pengumumanData.length / itemsPerPage);
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
          Semua Pengumuman
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
              onClick={() => Navigate("/DetailPengumuman")}
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
