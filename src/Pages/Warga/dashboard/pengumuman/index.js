import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import Lokasi from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Jam from "@mui/icons-material/QueryBuilderOutlined";
import Kalender from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Turut berduka",
    description: "Turut berduka atas meninggalnya rasa kemanusiaan 2",
    tanggal: "Sabtu, 17/08/2024",
    jam: "07:00 - 17:00",
    location: "Kemang Pratama 2",
    image: "url_to_image_1", // Ganti dengan URL gambar Anda
  },
  {
    id: 2,
    title: "Kegiatan Cek Kesehatan Rutin",
    description:
      "Minggu depan kita akan melaksanakan tes kesehatan rutin di puskesmas Kemang Pratama 3.",
    tanggal: "Jumat, 16/08/2024",
    jam: "08:00 - 16:00",
    location: "Kemang Pratama 3",
    image: "url_to_image_2", // Ganti dengan URL gambar Anda
  },
  {
    id: 3,
    title: "Pemilihan Ketua RW",
    description:
      "2 hari lagi akan diadakan pemilihan RW di balai RW Jl. Kemang Pratama 4.",
    tanggal: "Minggu, 18/08/2024",
    jam: "18:00 - 20:00",
    location: "Kemang Pratama 4",
    image: "url_to_image_3", // Ganti dengan URL gambar Anda
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

const Pengumuman = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Navigate = useNavigate();
  const now = new Date();

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
  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatHari = `${hari}`;
  const formatTanggal = `${formatHari}, ${tanggal} / ${bulan} / ${tahun}`;
  return (
    <Box>
      <Box
        sx={{
          height: "3%",
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
          >
            WARGA
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Pengumuman
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          mt:5,
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
          {formatTanggal}
        </Typography>
      </Box>

      {/* card hari dan tanggal */}
      <Box sx={{ justifyContent: "center", width: "100%", display: "flex", alignItems:'center' }}>
        <IconButton onClick={handlePrev} sx={{mb:10}}>
          <ArrowBackIos sx={{ color: "#00A9AD", fontSize:40 }} />
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
            {/* card image trand */}
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
              {/* card informasi milik card trending */}
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

        <IconButton onClick={handleNext} sx={{mb:10}} >
          <ArrowForwardIos sx={{ color: "#00A9AD", fontSize:40 }} />
        </IconButton>
      </Box>

      {/* card scroll yang akan digunakan */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Box width="100%" textAlign="center">
          <Stack direction="column" position="relative">
            <Typography variant="h6" fontWeight="bolder" gutterBottom>
              SELURUH PENGUMUMAN PADA HARI INI
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#A1A5B7", textAlign: "center" }}
              gutterBottom
            >
              Total: 6 Pengumuman
            </Typography>
            {/* jumlah pengumuman ambil dari data */}
          </Stack>

          <Container sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                overflowX: "scroll", // Aktifkan scroll horizontal
                whiteSpace: "nowrap",
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
                "scrollbar-width": "none" /* Firefox */,
              }}
            >
              {/* diambil dari data nantinya agar jumlah nya dapat disesuaikan */}
              {[1, 2, 2, 2, 2, 2].map((item) => (
                <Card
                  key={item}
                  sx={{
                    mt: 2,
                    ml: 3,
                    width: "300px",
                    display: "inline-flex",
                    flexDirection: "column",
                    flexShrink: 0, // Menghindari penyusutan card,
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
                      {truncateText("Renovasi Masjid", 30)}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {truncateText(
                          "Bulan ini ada akan ada renovasi untuk Toilet pria ",
                          30
                        )}
                      </Typography>
                    </Box>

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
                            Kemang Pratama 2
                          </Typography>
                        </Box>
                        <Box>
                          <Button onClick={() => Navigate("/DetailPengumuman")}>
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
        </Box>
      </Box>

      {/* Button */}
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "90%",
            mt: 3,
          }}
        >
          <Box sx={{ width: "100%", textAlign: "end", mb: 5 }}>
            <Button
              variant="outlined"
              sx={{ height: 38, color: "#00A9AD", fontWeight: "bold" }}
            >
              KEMBALI
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pengumuman;
