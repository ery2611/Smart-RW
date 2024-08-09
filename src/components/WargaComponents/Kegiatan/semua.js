import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import Mata from "@mui/icons-material/VisibilityOutlined";
import Lokasi from "@mui/icons-material/LocationOnOutlined";
import Jam from "@mui/icons-material/QueryBuilderOutlined";
import Kalender from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function Semua() {
  const cards = [
    {
      id: 1,
      title: "Kerja Bakti",
      description:
        "Bulan ini ada akan kerja bakti untuk perbaikan jalan Kemang Pratama 2",
      tanggal: "Sabtu, 17/08/2024",
      jam: "07:00 - 17:00",
      location: "Kemang Pratama 2",
      image: "url_to_image_1", // Ganti dengan URL gambar Anda
    },
    {
      id: 2,
      title: "Gotong Royong",
      description:
        "Minggu depan kita akan melaksanakan gotong royong membersihkan lingkungan.",
      tanggal: "Jumat, 16/08/2024",
      jam: "08:00 - 16:00",
      location: "Kemang Pratama 3",
      image: "url_to_image_2", // Ganti dengan URL gambar Anda
    },
    {
      id: 3,
      title: "Rapat Warga",
      description:
        "Rapat warga akan diadakan untuk membahas keamanan lingkungan.",
      tanggal: "Minggu, 18/08/2024",
      jam: "18:00 - 20:00",
      location: "Kemang Pratama 4",
      image: "url_to_image_3", // Ganti dengan URL gambar Anda
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

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
  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatHari = `${hari}, ${tanggal} / ${bulan} / ${tahun}`;

  return (
    <div
      style={{
        justifyContent: "center",
        display: "fluid",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
          textAlign: "end",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#000000", textAlign: "right" }}
          gutterBottom
        >
          {formatHari}
        </Typography>
      </Box>

      {/* inti card */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIos sx={{ color: "#00A9AD" }} />
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              justifyContent: "center",
              width: "100%",
              display: "fluid",
              marginBottom: "10px",
            }}
          >
            <Card
              sx={{
                width: "800px",
                display: "inline-flex",
                marginRight: "20px", // Jarak antar card
                flexDirection: "column",
                flexShrink: 0, // Menghindari penyusutan card
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                sx={{
                  backgroundColor: "#EFEFEF",
                }}
              />
            </Card>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-50px",
              }}
            >
              <Card
                sx={{
                  width: "500px",
                  display: "inline-flex",
                  marginRight: "20px", // Jarak antar card
                  flexDirection: "column",
                  flexShrink: 0, // Menghindari penyusutan card
                }}
              >
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
                    {" "}
                    {truncateText(cards[currentIndex].title, 50)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {truncateText(cards[currentIndex].description, 60)}
                  </Typography>
                  <Box
                    sx={{
                      display: "fluid",
                      justifyContent: "flex-start",
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Kalender sx={{ color: "#00A9AD" }} />
                        <Typography
                          variant="caption"
                          sx={{ marginLeft: "5px", marginTop: "5px" }}
                        >
                          {cards[currentIndex].tanggal}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginLeft: "20px",
                        }}
                      >
                        <Jam sx={{ color: "#00A9AD" }} />
                        <Typography
                          variant="caption"
                          sx={{ marginLeft: "5px", marginTop: "5px" }}
                        >
                          {cards[currentIndex].jam}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "6px",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <Lokasi sx={{ color: "#EE1717" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            marginLeft: "5px",
                            marginTop: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          {truncateText(cards[currentIndex].location, 30)}
                        </Typography>
                      </Box>
                      <Box>
                        <Button onClick={() => Navigate("/DetailKegiatan")}>
                          <Mata fontSize="large" sx={{ color: "#00A9AD" }} />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIos sx={{ color: "#00A9AD" }} />
        </IconButton>
      </Box>

      {/* Judul informasi */}
      <Box
        sx={{
          marginTop: "40px",
          display: "fluid",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#000000", textAlign: "center" }}
          gutterBottom
        >
          KEGIATAN MINGGU INI
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#A1A5B7", textAlign: "center" }}
          gutterBottom
        >
          Total: 6 Kegiatan
        </Typography>
      </Box>

      {/* card scroll */}
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            overflowX: "scroll", // Aktifkan scroll horizontal
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
            "scrollbar-width": "none" /* Firefox */,
          }}
        >
          {[1, 2, 2, 2, 2, 2].map((item) => (
            <Card
              key={item}
              sx={{
                width: "400px",
                display: "inline-flex",
                marginRight: "20px", // Jarak antar card
                flexDirection: "column",
                flexShrink: 0, // Menghindari penyusutan card
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/path-to-your-image.png" // Ganti dengan path gambar yang benar
                alt="Pengajian Banner"
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
                  {truncateText("Pengajian Aula Kemang Pratama", 30)}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {truncateText(
                    "Pengajian Aula bagi kaum perempuan Kemang Pratama 2",
                    40
                  )}
                </Typography>
                <Box
                  sx={{
                    display: "fluid",
                    justifyContent: "flex-start",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Kalender sx={{ color: "#00A9AD" }} />
                      <Typography
                        variant="caption"
                        sx={{ marginLeft: "5px", marginTop: "5px" }}
                      >
                        Selasa,02 / 01 / 2024
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: "20px",
                      }}
                    >
                      <Jam sx={{ color: "#00A9AD" }} />
                      <Typography
                        variant="caption"
                        sx={{ marginLeft: "5px", marginTop: "5px" }}
                      >
                        10.00-11.30
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "6px",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      <Lokasi sx={{ color: "#EE1717" }} />
                      <Typography
                        variant="caption"
                        sx={{
                          marginLeft: "5px",
                          marginTop: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        Kemang Pratama 2
                      </Typography>
                    </Box>
                    <Box>
                      <Button onClick={() => Navigate("/DetailKegiatan")}>
                        <Mata fontSize="large" sx={{ color: "#00A9AD" }} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Memindahkan kotak ke kanan
          padding: 2,
        }}
      >
        <Button
          onClick={() => Navigate("/Warga")}
          sx={{
            color: "#00a9ad",
            fontWeight: "bolder",
            border: "2px solid #00a9ad",
            "&:hover": {
              border: "2px solid #00a9ad",
              color: "#00a9ad",
            },
          }}
          variant="outlined"
        >
          KEMBALI
        </Button>
      </Box>
    </div>
  );
}

export default Semua;
