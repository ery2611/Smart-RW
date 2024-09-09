import {
  Container,
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../../components/WargaComponents/Header";

export default function DetailPaymentIKK() {
  const [timeLeft, setTimeLeft] = useState(10); // Set 1 hour in seconds
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Function to format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  if (timeLeft === 0) {
    // Menampilkan konten saat timer habis
    return (
      <Box>
        <Header />
        <Container sx={{ maxWidth: "md", mt: "90px" }}>
          <Card
            sx={{
              maxWidth: 800,
              margin: "0 auto",
              borderRadius: 2,
              mt: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Box>
                <Typography
                  textAlign="center"
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#00A9AD", mb: 3 }}
                >
                  Status Pembayaran
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#28a745", mb: 3 }}
                >
                  Pembayaran berhasil
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Invoice ID
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      IKK123093731
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Atas Nama
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Heru
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Alamat
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Jl Kemang Dahlia Raya Blok X no 1
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Biaya per bulan
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Rp 300 000
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Denda
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      -
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Bayar per-
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      1 Bulan
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Metode pembayaran
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Transfer bank
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Pembayaran bulan
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Januari 2024
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ mt: 3 }}>
                    <Typography
                      color="#A1A5B7"
                      fontSize="16px"
                      textAlign="left"
                    >
                      Total
                    </Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ mt: 3 }}>
                    <Typography color="#000" fontSize="16px" textAlign="left">
                      Rp 300 000
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => Navigate("/Warga/RiwayatIkk")}
                    sx={{
                      height: 36,
                      width: 600,
                      color: "#00A9AD",
                      fontWeight: "bold",
                      boxShadow: 2,
                      border: "1.5px solid #00a9ad",
                      mr: 2,
                      borderRadius: "12px",
                      "&:hover": {
                        border: "1.5px solid #00a9ad",
                        color: "#00a9ad",
                        borderRadius: "12px",
                      },
                    }}
                  >
                    Kembali
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <div>
      <Header />
      <Container sx={{ maxWidth: "md", mt: "90px" }}>
        {/* Konten saat timer masih berjalan */}
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
            mt: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Box>
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#00A9AD", mb: 3 }}
              >
                Status Pembayaran
              </Typography>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{ fontWeight: "bold", color: "#00A9AD", mb: 3 }}
              >
                {formatTime(timeLeft)}
              </Typography>
              <Typography
                textAlign="center"
                variant="h6"
                sx={{ fontWeight: "bold", color: "#FF7A00" }}
              >
                Menunggu Pembayaran
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
            mt: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Box>
              <Typography
                textAlign="center"
                variant="h7"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#00000", mb: 2 }}
              >
                Total Tagihan
              </Typography>

              <Typography
                textAlign="center"
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#00000", mt: 2 }}
              >
                Rp 300 000
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
            mt: 2,
          }}
        >
          <CardContent>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Invoice ID
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    IKK12345677
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Atas Nama
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Heru
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Alamat
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    JL.KEMANG DHALIA 2
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Biaya Perbulan
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    RP 200.000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Denda
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    -
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Bayar per-
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    1 Bulan
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Metode Pembayaran
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Transfer Bank
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Pembayaran Bulan
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Januari 2024
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Memindahkan kotak ke kanan
              }}
            ></Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
