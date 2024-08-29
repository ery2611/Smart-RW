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
  const [selectedOption, setSelectedOption] = useState("Pilih Minggu");
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

  const kegiatanData = [
    {
      title: "Lomba 17 Agustus",
      deskripsi: "Lomba tingkat SD, bertema Republik Indonesia",
      pelaku: "Terbuka untuk Umum",
      lokasi: "Kemang Pratama 2",
      gambar:
        "https://tse2.mm.bing.net/th?id=OIP.b2HRVfXJOKOwikj1per-0QHaE5&pid=Api&P=0&h=180", // Replace with the actual image path
    },
    {
      title: "Touring Sepeda",
      deskripsi: "Bagi yang menyukai bersepeda",
      pelaku: "Untuk yang ingin bersepeda",
      lokasi: "Lapangan Banteng",
      gambar:
        "https://tse1.mm.bing.net/th?id=OIP.Wn-_RqW73zgz6rG1E5aKvwHaFj&pid=Api&P=0&h=180", // Replace with the actual image path
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
            Semua Kegiatan
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
          <MenuItem onClick={() => handleClose("Minggu Ini")}>
            Minggu Ini
          </MenuItem>
          <MenuItem onClick={() => handleClose("Minggu Depan")}>
            Minggu Depan
          </MenuItem>
          <MenuItem onClick={() => handleClose("Minggu Lalu")}>
            Minggu Lalu
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
          {kegiatanData.map((item, index) => (
            <Card
              key={index}
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
                  {truncateText(item.title, 40)}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {truncateText(item.deskripsi, 40)}
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
                      {truncateText(item.pelaku, 20)}
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
                      {truncateText(item.lokasi, 20)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    onClick={() => Navigate("/DetailKegiatan")}
                    sx={{
                      backgroundColor: "#00A9AD",
                      borderRadius: "50%", // Membuat buttonnya bulat
                      width: "40px",
                      height: "40px",
                      minWidth: "0", // Prevents the button from stretching due to content
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: "auto",
                      "&:hover": {
                        backgroundColor: "#00A9AD",
                      },
                    }}
                  >
                    <ArrowForwardIcon />
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
