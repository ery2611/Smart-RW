import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Lokasi from "@mui/icons-material/LocationOn"; // Replace with actual icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button
import Person from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

function Index() {
  // const dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Aktif");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if (option) {
      setSelectedOption(option);
    }
  };

  // akhir const dropdown
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

  const forumData = [
    {
      title: "Forum Les Anak Bahasa Inggris",
      deskripsi: "Forum untuk pendataan dan pendaftaran les anak RW 02",
      gambar:
        "https://www.karebasulsel.id/wp-content/uploads/2022/11/les-bahasa-inggris-terdekat-1.jpg",
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
  return (
    <Box
      sx={{
        marginTop: "20px",

        borderRadius: 2,
        pl: 4,
        pr: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          position: "relative",
        }}
      >
        <Box sx={{ display: "inline-block", position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "480px",
              height: "300px",
              background: "linear-gradient(to bottom, #CCEEEF, #EFEFEF)",

              zIndex: 1, // Ensure the box is behind the text
            }}
          />
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
            Semua Forum
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            backgroundColor: "#fff",
            borderColor: "#00A9AD",
            color: "#00A9AD",
            "&:hover": {
              backgroundColor: "#fff",
              borderColor: "#00A9AD",
              color: "#00A9AD",
            },
          }}
        >
          {selectedOption}
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
          <MenuItem onClick={() => handleClose("Aktif")}>Aktif</MenuItem>
          <MenuItem onClick={() => handleClose("Tidak Aktif")}>
            Tidak Aktif
          </MenuItem>
        </Menu>
      </Box>
      {/* BOX CARD  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: -3,
          position: "relative",
          zIndex: 3,
          marginBottom: "73px",
        }}
      >
        {/* Dots pattern */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 30px)", // Adjust the number of columns and size
            gridGap: "30px", // Spasi antar dots
            position: "absolute",
            right: "-30px", // Membuat posisinya di kanan card
            bottom: "-40px", // Membuat posisinya di bawah card
            zIndex: 1, // Membuat posisinya di belakang card
          }}
        >
          {Array.from({ length: 35 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "#CCEEEF",
                fontWeight: "bold",
                right: 0,
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
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

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
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
                    onClick={() => Navigate("/Forum/Lihat")}
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
      <Box
        sx={{
          width: "86%",
          justifyContent: "end",
          display: "flex",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => Navigate("/Warga")}
          sx={{
            borderColor: "#00A9AD",
            color: "#00A9AD",
            fontWeight: "bold",

            "&:hover": {
              backgroundColor: "#E0F7F8", // Warna latar belakang saat hover
              borderColor: "#00A9AD",
            },
            marginBottom: "50px",
          }}
        >
          KEMBALI
        </Button>
      </Box>
    </Box>
  );
}

export default Index;
