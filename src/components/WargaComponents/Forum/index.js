import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import Lokasi from "@mui/icons-material/LocationOnOutlined";
import Jam from "@mui/icons-material/QueryBuilderOutlined";
import Kalender from "@mui/icons-material/CalendarMonthOutlined";
import Avatar from "@mui/icons-material/PersonOutlineOutlined";
import { useNavigate } from "react-router-dom";

function Index() {
  const Navigate = useNavigate();

  const forumData = [
    {
      title: "Forum Les Anak Bahasa Inggris",
      deskripsi: "Forum untuk pendataan dan pendaftaran les anak RW 02",
      gambar:
        "https://tse4.mm.bing.net/th?id=OIP.mz2m_TmTFmxfJEDbIHHQbwHaFU&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      gambar:
        "https://tse1.mm.bing.net/th?id=OIP.Wn-_RqW73zgz6rG1E5aKvwHaFj&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Pengelolaan Sampah",
      deskripsi: "Forum untuk pendataan dan pendaftaran les anak RW 02",
      gambar:
        "https://tse4.mm.bing.net/th?id=OIP.PuWdejBsHn6GhP9QJ-lTugHaEK&pid=Api&P=0&h=180", // Replace with the actual image path
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
  return (
    <Box
      sx={{
        marginTop: "20px",

        borderRadius: 2,
        pl: 4,
        pr: 4,
        pb: 2,
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            sx={{
              position: "relative",
              color: "#00A9AD",
              pl: 5, //  text is inside the box
              lineHeight: "60px",
              zIndex: 6, // text is on top of the box
              fontSize: "30px",
              fontWeight: "bolder",
              mt: 2,
            }}
          >
            Forum
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => Navigate("/Warga/Forum")}
            sx={{
              backgroundColor: "#00A9AD",
              color: "white",
              boxShadow: 5,
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#00A9AD",
                color: "white",
              },
            }}
          >
            Semua Forum
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          zIndex: 3,
          marginBottom: "100px",
        }}
      >
        {forumData.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "320px",
              display: "inline-flex",
              marginRight: "20px", // Jarak antar card
              flexDirection: "column",
              flexShrink: 0, // Menghindari penyusutan card
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.gambar}
              alt={item.title}
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
                {truncateText(item.title, 30)}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {truncateText(item.deskripsi, 35)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => Navigate("/DetailPengumuman")}
                  sx={{
                    backgroundColor: "#00A9AD",
                    padding: "8px 16px", // Menyesuaikan padding sesuai dengan konten tombol
                    display: "inline-flex", // Menjaga tombol agar sesuai dengan konten
                    alignItems: "center",
                    fontWeight: "bold",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#00A9AD",
                    },
                  }}
                >
                  Lihat Forum
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Index;
