import {
  Container,
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";

// function CountdownTimer({ initialTime }) {
//   const [timeLeft, setTimeLeft] = useState(initialTime);

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft]);

//   // Fungsi untuk mengonversi detik ke format jam:menit:detik
//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;
//     return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//       2,
//       "0"
//     )}:${String(seconds).padStart(2, "0")}`;
//   };

//   return (
//     <div>
//       <h1 style={{ color: "#00a9ad" }}>{formatTime(timeLeft)}</h1>
//       {timeLeft > 0 ? (
//         <h2 style={{ fontSize: "20px", color: "#FF7B02" }}>
//           Menunggu Pembayaran
//         </h2>
//       ) : (
//         <h2 style={{ fontSize: "20px", color: "#EE1717" }}>Pembayaran Gagal</h2>
//       )}
//     </div>
//   );
// }

export default function KonfirmasiPAM() {
  const [timeLeft, setTimeLeft] = useState(64); // Set 1 hour in seconds

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
      <Container sx={{ maxWidth: "md" }}>
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
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Invoice ID
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    PAM1274832
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Atas Nama
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Heru
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Alamat
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Jl Kemang Dahlia Raya Blok X no 1
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Biaya per kubik
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Rp 200
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Metode pembayaran
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Transfer bank
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Pembayaran bulan
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Januari 2024
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Pengeluaran Air
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    500 m³
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ mt: 3 }}>
                  <Typography color="#A1A5B7" fontSize="16px" textAlign="left">
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ mt: 3 }}>
                  <Typography color="#000" fontSize="16px" textAlign="left">
                    Rp 100 000
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
    );
  }

  return (
    <div>
      <Container sx={{ maxwidth: "md" }}>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "12px",
            mt: 2,
            boxShadow: 4,
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
            borderRadius: "12px",
            mt: 2,
            boxShadow: 4,
          }}
        >
          <Typography
            textAlign="center"
            variant="body1"
            component="div"
            gutterBottom
            sx={{ fontSize: "16px", color: "#000", mt: 1, fontWeight: 400 }}
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
            boxShadow: 4,
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
