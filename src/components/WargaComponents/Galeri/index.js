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
        "https://images.tokopedia.net/img/KRMmCm/2022/7/25/9adf137e-e021-4182-aacc-ae10cf92c2d3.jpg",
    },
    {
      title: "Bazaar",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://www.bantennews.co.id/wp-content/uploads/2023/02/Screenshot_2023-02-06-22-40-11-57.jpg",
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
    {
      title: "Pos Satpam",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://1.bp.blogspot.com/-xQnRXFYHW7U/YToQ8Fp_nqI/AAAAAAAAMVs/FPwR0AYqj9YB_sS2sLhHW9_RpbHpVyfBgCLcBGAsYHQ/w428-h640/DSC_5316.JPG",
    },
    {
      title: "Imunisasi Balita",
      deskripsi: "Kegiatan Imunisasi untuk Anak dibawah Usia Lima Tahun",
      pelaku: "Warga",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://bugangin.kendalkab.go.id/upload/tinymce/WhatsApp_Image_2023-03-09_at_11.48_.42_(1)_.jpeg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Ceramah Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://lensaexpose.com/wp-content/uploads/2022/04/IMG-20220414-WA0013-800x445.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    {
      title: "Senam Pagi",
      deskripsi: "Bagi yang ingin melakukan senam kebugaran jasmani",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar: "https://i.ytimg.com/vi/QToHGCrDaxA/maxresdefault.jpg",
    },
    // Add more data entries to reach the desired length
  ];

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kegiatanData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(kegiatanData.length / itemsPerPage);

  return (
    <Box sx={{ marginTop: "20px", borderRadius: 2, pl: 2, pr: 2, mt: "80px" }}>
      <Box>
        <Typography
          sx={{
            color: "#000000",
            lineHeight: "60px",
            fontSize: "20px",
            fontWeight: "bolder",
            textAlign: "center",
            mt: 4,
            mb: 4,
          }}
        >
          GALERI RW 36 KEMANG PRATAMA
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: -3,
            position: "relative",
            zIndex: 3,
            marginBottom: "73px",
            maxWidth: "100%",
            mx: "auto",
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
                boxShadow: "none",
                background: "transparent",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: "300px",
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
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#00A9AD",
                    fontSize: "18px",
                  }}
                >
                  {truncateText(item.title, 20)}
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
