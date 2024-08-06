import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Chip,
  Container,
  Card,
  CardContent,
  styled,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  // const Navigate = useNavigate();
  const Navigate = useNavigate();
  const StatusBadge = styled(Box)(({ theme }) => ({
    backgroundColor: "#D4FFDB",

    color: "#5AF411",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));

  const Kembali = styled(Box)(({ theme }) => ({
    color: "#00A9AD",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    border: "1px solid #00A9AD",
    marginBottom: theme.spacing(2),
  }));

  return (
    <Container
      maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
      sx={{
        maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
        marginTop: 2,
        marginBottom:2,
        borderRadius:'10px',
        bgcolor: "#EFEFEF",
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h3 style={{ marginBottom: "0" }}>DETAIL</h3>
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
            INFORMASI PELAPOR
          </Typography>
          {/* <StatusBadge>DITERIMA</StatusBadge> */}
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
              <Typography variant="body1" color="#A0A1A4">
                Nama Objek
              </Typography>
              <Typography variant="body1" color="#A0A1A4">
                Tipe Objek
              </Typography>
              <Typography variant="body1" color="#A0A1A4">
                Aktivitas Objek
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" color="#333333">
                : Khoirul Mustaank
              </Typography>
              <Typography variant="body1" color="#333333">
                : Tamu
              </Typography>
              <Typography variant="body1" color="#333333">
                : Berkunjung ke rumah bapak Budi
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

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
            INFORMASI ADUAN KEAMANAN
          </Typography>
          <StatusBadge
            sx={{
              justifyContent: "center",
              display: "flex",
              alignContent: "flex-start",
              alignItems: "center",
              width: "100px",
              fontWeight:'bold'
            }}
          >
            DITERIMA
          </StatusBadge>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
              gap: "180px", // Mengatur jarak antar box
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" color="#A0A1A4" marginBottom={1}>
                Judul
              </Typography>
              <Typography variant="body1" color="#A0A1A4" marginBottom={1}>
                Jenis
              </Typography>
              <Typography variant="body1" color="#A0A1A4" marginBottom={1}>
                Tanggal Pengaduan
              </Typography>
              <Typography variant="body1" color="#A0A1A4" marginBottom={1}>
                Waktu Pengaduan
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" color="#333333" marginBottom={1}>
                : Orang meresahkan lewat depan Rumah
              </Typography>
              <Typography variant="body1" color="#333333" marginBottom={1}>
                : Keamanan
              </Typography>
              <Typography variant="body1" color="#333333" marginBottom={1}>
                : 06 / 01 / 2024
              </Typography>
              <Typography variant="body1" color="#333333" marginBottom={1}>
                : 08.00
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              marginTop: 2,
            }}
          >
            <Typography variant="body1" color="#A0A1A4">
              Lokasi Kejadian
            </Typography>
            <Typography variant="body1" color="#333333">
              Jalan Kemang Dahlia Blok Z no. 12, RT 02/ RW 02
            </Typography>
            <Typography variant="body1" color="#A0A1A4" marginTop={2}>
              Media
            </Typography>
            <CardMedia>
              <img
                src="https://images2.alphacoders.com/925/thumb-1920-925917.png"
                alt="Media Laporan"
                style={{
                  maxWidth: "400px",
                  width: "100%",
                }}
              ></img>
            </CardMedia>
          </Box>
        </CardContent>
      </Card>
      {/* <img
              src="https://images2.alphacoders.com/925/thumb-1920-925917.png"
              alt="Media"
              style={{
                maxWidth: "300px",
                width: "100%",
              }}
            /> */}

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
            INFORMASI ADUAN KEAMANAN
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              marginTop: 2,
            }}
          >
            <Typography variant="body1" color="#A0A1A4">
              Alasan Pengaduan
            </Typography>
            <Typography variant="body1" color="#333333">
              Ada orang tidak jelas yang setiap hari keliling keliling depan
              rumah saya, entah apa tujuan orang tersebut tetapi terlihat
              mencurigakan
            </Typography>
            <Typography variant="body1" color="#A0A1A4" marginTop={3}>
              Keterangan
            </Typography>
            <Typography variant="body1" color="#333333">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Memindahkan kotak ke kanan
          padding: 2,
        }}
      >
        <Button onClick={() => Navigate("/Keamanan")} sx={{color:'#00A9AD', fontWeight:'bolder',  border: '2px solid #00A9AD',
                '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD',
                
                },

            }} variant="outlined"  >KEMBALI</Button>
      
      </Box>
    </Container>
  );
};

export default Detail;