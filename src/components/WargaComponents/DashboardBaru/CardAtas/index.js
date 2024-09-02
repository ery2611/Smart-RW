import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Kalender from "@mui/icons-material/CalendarToday"; // Replace with actual icon
import Jam from "@mui/icons-material/AccessTime"; // Replace with actual icon
import Lokasi from "@mui/icons-material/LocationOn"; // Replace with actual icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Person from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Semua() {
  const Navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Sample data array
  const data = [
    {
      title: "Kerja Bakti Warga RW 02 & 03",
      description:
        "Kerja bakti untuk hari Minggu, untuk warga RW 02 dan RW 03. Dari Gerbang hingga ",
      participants: "Warga Kemang Pratama 2 & Publik",
      location: "Kemang Pratama 2",
      image:
        "https://1.bp.blogspot.com/-k_cNB25TtGE/YTn3EOVAR_I/AAAAAAAAMSw/URNNHLYEz9wx9Nvr17gfwkRYa6yALUNOACLcBGAsYHQ/s2048/DSC_0934.jpg",
    },
    {
      title: "Pertemuan Rutin Warga RT 05",
      description:
        "Pertemuan rutin setiap bulan untuk membahas keamanan lingkungan dan acara bulanan lainnya.",
      participants: "Warga RT 05 & RW 02",
      location: "Balai Warga RT 05",
      image:
        "https://bulak.surabaya.go.id/upload/kegiatan/10121f4d2b1f7cbab5a4f2dc2601c06d.jpeg", // Replace with the actual image URL
    },
    {
      title: "Lomba Kebersihan Lingkungan",
      description:
        "Acara lomba kebersihan antar RT dalam rangka memperingati Hari Kemerdekaan.",
      participants: "Seluruh Warga RW 03",
      location: "Lapangan RW 03",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.O_Wp5r8Gz9iip0qonGgNPAHaEK&pid=Api&P=0&h=180", // Replace with the actual image URL
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentData = data[currentIndex];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "50px",
        position: "relative",
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "30%",
          left: 10,
          zIndex: 10,

          color: "white",
        }}
      >
        <ArrowForwardIosIcon
          sx={{ transform: "rotate(180deg)", fontSize: "3.5rem" }}
        />
      </IconButton>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            justifyContent: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          {/* Gambar */}
          <Card
            sx={{
              width: "100%",
              display: "inline-flex",
              marginRight: "20px", // Jarak antar card
              flexDirection: "column",
              flexShrink: 0, // Menghindari penyusutan card
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image={currentData.image}
              alt={""}
              sx={{
                backgroundColor: "#EFEFEF",
                width: "100%", // Make the image span the full width of the card
                objectFit: "cover", // Ensure the image covers the area
              }}
            />
            {/* White shadow overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0, // White shadow starts from the bottom
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
          </Card>

          {/* Card deskripsi */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-100px", // Lowered further down
              position: "relative",
              zIndex: 2,
            }}
          >
            <Card
              sx={{
                width: "50%",
                display: "inline-flex",
                marginRight: "20px", // Jarak antar card
                flexDirection: "column",
                flexShrink: 0, // Menghindari penyusutan card
                padding: "16px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "rgba(355, 355, 355, 0.9)", // Slightly transparent card effect
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
                  {truncateText(currentData.title, 70)}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {truncateText(currentData.description, 60)}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <Person sx={{ color: "#00A9AD", marginRight: "5px" }} />
                      {truncateText(currentData.participants, 35)}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#EE1717",
                        fontWeight: "bold",
                      }}
                    >
                      <Lokasi sx={{ marginRight: "5px" }} />
                      {truncateText(currentData.location, 20)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => Navigate("/DetailKegiatan")}
                    sx={{
                      backgroundColor: "#00A9AD",
                      textTransform: "none",
                      ml: "auto",
                    }}
                  >
                    Selengkapnya
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "30%",
          right: 10,
          zIndex: 10,

          color: "white",
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "3.5rem" }} />
      </IconButton>
    </Box>
  );
}

export default Semua;
