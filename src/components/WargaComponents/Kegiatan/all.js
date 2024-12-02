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
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const kegiatanData = [
    {
      title: "Lomba 17 Agustus",
      deskripsi: "Lomba tingkat SD, bertema Republik Indonesia",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      gambar:
        "https://1.bp.blogspot.com/-Hmq-wmMVKhY/YO6IsaXzxuI/AAAAAAAAN9E/cMERi4z8mcESg96CcjOGFgXoOyqt6iFogCLcBGAsYHQ/s700/Lomba-17-Agustus.jpg",
      tanggal: "Senin, 27 Februari 2024",
      jam: "09:00 - selesai",
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://1.bp.blogspot.com/-Hmq-wmMVKhY/YO6IsaXzxuI/AAAAAAAAN9E/cMERi4z8mcESg96CcjOGFgXoOyqt6iFogCLcBGAsYHQ/s700/Lomba-17-Agustus.jpg",
      tanggal: "Kamis, 23 November 2023",
      jam: "22:03 - selesai",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
      tanggal: "Kamis, 23 November 2023",
      jam: "22:03 - selesai",
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://4.bp.blogspot.com/-xQ9qgwa9fAk/VyTLEzbAXlI/AAAAAAAAP58/oNfkpNkT3WYCKJGQjBAiP5GmoU3I45MAwCLcB/s1600/itdbi%2Badu%2Bsprint.jpg",
      tanggal: "Kamis, 23 November 2023",
      jam: "22:03 - selesai",
    },
    ,
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
      tanggal: "Kamis, 23 November 2023",
      jam: "22:03 - selesai",
    },
    {
      title: "Imunisasi Balita",
      deskripsi: "Kegiatan Imunisasi untuk Anak dibawah Usia Lima Tahun",
      pelaku: "Warga",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://www.ruangbunda.com/wp-content/uploads/2023/04/bayi_30_jadwal-imunisasi-bayi-800x450.png",
      tanggal: "Kamis, 23 November 2023",
      jam: "22:03 - selesai",
    },
    // Add 9 more data entries to reach 11 items
    // Ensure each entry has title, deskripsi, pelaku, lokasi, and gambar fields
  ];

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kegiatanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(kegiatanData.length / itemsPerPage);
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
            Semua Kegiatan
          </Typography>
        )}
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
              onClick={() => navigate("/DetailKegiatan")}
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
                        onClick={() => navigate("/DetailKegiatan")}
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
