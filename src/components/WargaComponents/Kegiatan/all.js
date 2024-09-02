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

  const kegiatanData = [
    {
      title: "Lomba 17 Agustus",
      deskripsi: "Lomba tingkat SD, bertema Republik Indonesia",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      gambar:
        "https://1.bp.blogspot.com/-Hmq-wmMVKhY/YO6IsaXzxuI/AAAAAAAAN9E/cMERi4z8mcESg96CcjOGFgXoOyqt6iFogCLcBGAsYHQ/s700/Lomba-17-Agustus.jpg",
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://1.bp.blogspot.com/-Hmq-wmMVKhY/YO6IsaXzxuI/AAAAAAAAN9E/cMERi4z8mcESg96CcjOGFgXoOyqt6iFogCLcBGAsYHQ/s700/Lomba-17-Agustus.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://4.bp.blogspot.com/-xQ9qgwa9fAk/VyTLEzbAXlI/AAAAAAAAP58/oNfkpNkT3WYCKJGQjBAiP5GmoU3I45MAwCLcB/s1600/itdbi%2Badu%2Bsprint.jpg",
    },
    ,
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Imunisasi Balita",
      deskripsi: "Kegiatan Imunisasi untuk Anak dibawah Usia Lima Tahun",
      pelaku: "Warga",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://www.ruangbunda.com/wp-content/uploads/2023/04/bayi_30_jadwal-imunisasi-bayi-800x450.png",
    },
    // Add 9 more data entries to reach 11 items
    // Ensure each entry has title, deskripsi, pelaku, lokasi, and gambar fields
  ];

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kegiatanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(kegiatanData.length / itemsPerPage);

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
          Semua Kegiatan
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
