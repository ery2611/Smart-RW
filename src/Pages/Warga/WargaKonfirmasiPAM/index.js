import {
  Container,
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";

function CountdownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Fungsi untuk mengonversi detik ke format jam:menit:detik
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1 style={{ color: "#00a9ad" }}>{formatTime(timeLeft)}</h1>
      {timeLeft > 0 ? (
        <h2 style={{ fontSize: "20px", color: "#FF7B02" }}>
          Menunggu Pembayaran
        </h2>
      ) : (
        <h2 style={{ fontSize: "20px", color: "#EE1717" }}>Pembayaran Gagal</h2>
      )}
    </div>
  );
}

export default function KonfirmasiPAM() {
  return (
    <div>
      <Container sx={{ maxwidth: "md" }}>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "12px",
            mt: 2,
            boxShadow:4,
          }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            component="div"
            gutterBottom
            sx={{ fontSize: "20px", color: "#00A9AD", mb: 3,mt:1 }}
          >
            Status Pembayaran
          </Typography>
          <CountdownTimer initialTime={3600} />
          {/* Hitung mundur dari 10 detik */}
        </Card>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "12px",
            mt: 2,
            boxShadow:4,
          }}
        >
          <Typography
            textAlign="center"
            variant="body1"
            component="div"
            gutterBottom
            sx={{ fontSize: "16px", color: "#000",mt:1, fontWeight: 400 }}
          >
            Total Tagihan
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            component="div"
            gutterBottom
            sx={{ fontSize: "24px", color: "#000", fontWeight: 600 }}
          >
            RP 100.000
          </Typography>
        </Card>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "12px",
            mt: 2,
            boxShadow:4,
          }}
        >
          <CardContent>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1} marginTop={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Invoice
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
                    PAM1274832
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
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
                      color: "#000",
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
                    Jl Kemang Dahlia Raya Blok X no 1
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Biaya per kubik
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
                    Rp 200
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Metode pembayaran
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
                    Transfer bank
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Pembayaran bulan
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
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Pengeluaran Air
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
                    500 m³
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
