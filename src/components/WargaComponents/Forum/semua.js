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
import { ArrowBackIos, ArrowForwardIos, People } from "@mui/icons-material";
import Jam from "@mui/icons-material/QueryBuilderOutlined";
import Kalender from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";
import Bar from "../../../components/WargaComponents/Navbar";
import Avatar from "@mui/icons-material/PersonOutlineOutlined";

const cards = [
  {
    id: 1,
    title: "Forum Les Anak Bahasa Inggris",
    description: "Forum untuk pendataan dan pendaftaran les anak RW 02",
    people: "Khairul Mustaan",
    image: "url_oooo", // Ganti dengan URL gambar Anda
  },
  {
    id: 2,
    title: "Forum Les Anak Bahasa Indonesia",
    description: "Forum untuk pendataan dan pendaftaran les anak RW 02",
    people: "Khairul Mustaan",
    image: "url_to_image_2", // Ganti dengan URL gambar Anda
  },
  {
    id: 3,
    title: "Forum Les Anak Bahasa Sunda",
    description: "Forum untuk pendataan dan pendaftaran les anak RW 02",
    people: "Khairul Mustaan",
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
      <Bar />
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
              Forum
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: 5,
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
      <Box
        sx={{
          justifyContent: "center",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handlePrev} sx={{ mb: 10 }}>
          <ArrowBackIos sx={{ color: "#00A9AD", fontSize: 40 }} />
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
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop: "30px",
                        marginLeft: "-60px",
                      }}
                    >
                      <Avatar />
                      <Typography>
                        {truncateText(cards[currentIndex].people, 30)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "6px",
                      }}
                    >
                      <Box sx={{ marginRight: "-40px", marginTop: "20px" }}>
                        <Button
                          onClick={() => Navigate("/Forum/Lihat")}
                          sx={{
                            backgroundColor: "#00A9AD",
                            color: "white",
                            boxShadow: 5,
                            marginRight: "",
                            width: "200px",
                            "&:hover": {
                              backgroundColor: "#00A9AD",
                              color: "white",
                            },
                          }}
                        >
                          Informasi Forum
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        <IconButton onClick={handleNext} sx={{ mb: 10 }}>
          <ArrowForwardIos sx={{ color: "#00A9AD", fontSize: 40 }} />
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
              FORUM MINGGU INI
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#A1A5B7", textAlign: "center" }}
              gutterBottom
            >
              Total Forum: 6 Forum
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
                    width: "380px",
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
                        textAlign: "start",
                      }}
                    >
                      {truncateText(
                        "Forum Les Anak Bahasa Inggris TK-SD-SMP",
                        30
                      )}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "start" }}
                    >
                      {truncateText(
                        "Forum untuk pendataan dan pendaftaran lhjbyghkbvtuyjghkbn,es anak RW 02",
                        30
                      )}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginTop: "10px",
                          marginLeft: "-10px",
                        }}
                      >
                        <Avatar />
                        <Typography>Khairul Mustaan</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "6px",
                        }}
                      >
                        <Box sx={{ marginRight: "0px" }}>
                          <Button
                            onClick={() => Navigate("/Forum/Lihat")}
                            sx={{
                              backgroundColor: "#00A9AD",
                              color: "white",
                              boxShadow: 5,
                              marginRight: "10px",
                              width: "150px",
                              "&:hover": {
                                backgroundColor: "#00A9AD",
                                color: "white",
                              },
                            }}
                          >
                            Informasi Forum
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
              onClick={() => Navigate("/Warga")}
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
