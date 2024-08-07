import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ForumDetail() {
  const Navigate = useNavigate();
  return (
    <div>
      <Container
        maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 2,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",
          padding: 1,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "0" }}>DETAIL FORUM</h3>
        </Box>
        <Card
          sx={{
            maxWidth: 700,
            margin: "0 auto",
            borderRadius: 2,
            p: 2,
            background: "white",
            marginTop: 2,
            maxWidth: "auto",
            boxShadow: 5,
          }}
        >
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              fontWeight="bolder"
              fontFamily="Montserrat"
            >
              FORUM LES ANAK BAHASA INGGRIS
            </Typography>
            <Typography
              textAlign="center"
              variant="body1"
              component="div"
              gutterBottom
              fontFamily="Montserrat"
            >
              <span style={{ color: "green", fontWeight: "bold" }}>5</span> dari 
              <span style={{ color: "red", fontWeight: "bold" }}> 60 </span>
               anggota
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                alt="Avatar Image"
                src="https://kampunginggrisbandung.co.id/wp-content/uploads/2021/06/kursus-bahasa-inggris.jpg"
                sx={{ width: 70, height: 70 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                gap: "215px", // Mengatur jarak antar box
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  height="50px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Dibuat
                </Typography>
                <Typography
                  variant="body1"
                  height="30px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Pembuat Forum
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  height="50px"
                  color="#333333"
                  marginBottom={1}
                >
                  : 16 / 8 / 2024
                  <Box ml="10px">
                    <Typography color="#A0A1A4">10.00</Typography>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  height="30px"
                  color="#333333"
                  marginBottom={1}
                >
                  : Muhammad Budi
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Keterangan
              </Typography>
              <Typography variant="body1" color="#333333">
                Forum untuk pendataan dan pendaftaran les anak RW 02
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
                mb: 2,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Deskripsi
              </Typography>
              <Typography variant="body1" color="#333333">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                felis donec et odio pellentesque diam volutpat commodo.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                justifyContent: "space-between", // Mengatur jarak antar box
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1" height="30px" color="#A0A1A4">
                  Anggota forum
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1" height="30px" color="#333333">
                  <span style={{ color: "green", fontWeight: "bold" }}>5</span>
                </Typography>
              </Box>
            </Box>
            <Card
              sx={{
                padding: "14px",
                boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "12px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Avatar Image"
                  src="https://via.placeholder.com/150"
                  sx={{ width: 58, height: 58 }}
                />
                <Box sx={{ marginLeft: 2, textAlign: "left" }}>
                  <Typography variant="h6">Khoirul Mustaan</Typography>
                  <Typography variant="body2" color="textSecondary">
                    3576014403910003
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                padding: "16px",
                boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "12px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Avatar Image"
                  src="https://via.placeholder.com/150"
                  sx={{ width: 58, height: 58 }}
                />
                <Box sx={{ marginLeft: 2, textAlign: "left" }}>
                  <Typography variant="h6">Yan Azhari</Typography>
                  <Typography variant="body2" color="textSecondary">
                    3576014403910003
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Button
              onClick={() => Navigate("/")}
              sx={{
                color: "#00a9ad",
                fontWeight: "bolder",
                width: "100%",
                height: "40px",
                border: "2px solid #00a9ad",
                "&:hover": {
                  border: "2px solid #00a9ad",
                  color: "#00a9ad",
                },
              }}
              variant="outlined"
            >
              LIHAT ANGGOTA LAINNYA
            </Button>
          </CardContent>
        </Card>
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
      </Container>
    </div>
  );
}

export default ForumDetail;