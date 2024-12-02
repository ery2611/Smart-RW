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
import LocationOnIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarMonthRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { useNavigate } from "react-router-dom";

function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
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
      tanggal: "Kamis, 23 November 2023",
      jam: "10:03 - Selesai",
    },
    {
      title: "Pelebaran Selokan",
      deskripsi: "Bulan ini akan ada renovasi untuk Selokan Jalanan Utama",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",

      gambar:
        "https://t-2.tstatic.net/jogja/foto/bank/images/Proses-Perbaikan-Selokan-Mataram-Dikeringkan.jpg", // Replace with the actual image path
      tanggal: "Sabtu, 7 September 2024",
      jam: "09:36 - Selesai",
    },
    {
      title: "Pemilihan Ketua RW",
      deskripsi: "Bulan ini akan dilaksanakan Pemilihan Ketua RW024",
      pelaku: "Warga RW024",
      lokasi: "Balai RW",
      gambar: " https://sekilasinfo.net/wp-content/uploads/2020/03/pemilu.jpg",
      tanggal: "Sabtu, 7 September 2024",
      jam: "09:36 - Selesai",
    },
    {
      title: "Bazaar",
      deskripsi:
        "Minggu depan akan diadakan bazaar di lapangan utama Kemang Pratama",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Lapangan Utama Kemang",
      gambar:
        "https://cdn-2.tstatic.net/bangka/foto/bank/images/20220108_food-bazar-pgk-01.jpg",
      tanggal: "Sabtu, 7 September 2024",
      jam: "09:36 - Selesai",
    },
    {
      title: "Pengcoran Jalan",
      deskripsi:
        "Minggu depan akan dilaksanakan pengecoran di jalan utama Kemang Pratama",
      pelaku: "-",
      lokasi: "Jalan Utama Kemang",
      gambar:
        "https://www.rumahaspal.com/wp-content/uploads/2022/05/jasa-borong-cor-jalan.jpg",
      tanggal: "Sabtu, 7 September 2024",
      jam: "09:36 - Selesai",
    },
  ];

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pengumumanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pengumumanData.length / itemsPerPage);
  const isSm = useMediaQuery("(max-width:600px)");
  const isLargerThanSm = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ marginTop: "20px", borderRadius: 2, pl: 2, pr: 2 }}>
      <Box>
        {isLargerThanSm && (
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
        )}

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
                width: isSm ? "90%" : "300px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                backgroundColor: isSm ? "#FFFFFF" : "transparent",
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={() => navigate("/DetailPengumuman")}
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
                <Typography variant="body2" sx={{ color: "#282828", mb: 2 }}>
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
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocationOnIcon sx={{ color: "#00A9AD", mr: 1 }} />
                      <Typography sx={{ color: "#282828" }}>
                        {item.lokasi}
                      </Typography>
                    </Box>

                    {/* Time and Arrow Button */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* Time */}
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <WatchLaterOutlinedIcon
                          sx={{ color: "#00A9AD", mr: 1 }}
                        />
                        <Typography sx={{ color: "#282828" }}>
                          {item.jam}
                        </Typography>
                      </Box>

                      {/* Arrow Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#00A9AD",
                          color: "#FFFFFF",
                          borderRadius: "50%",
                          padding: 1,
                          "&:hover": { backgroundColor: "#00A9AD" },
                        }}
                        onClick={() => navigate("/DetailPengumuman")}
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
