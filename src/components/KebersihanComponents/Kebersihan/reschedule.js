import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function DetailJadwal() {
  const Navigate = useNavigate();
  const Pagi = styled(Box)(({ theme }) => ({
    backgroundColor: "#AEF4F0",
    color: "#74D6D0",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
  const Siang = styled(Box)(({ theme }) => ({
    backgroundColor: "#D6FDFB",
    color: "#00F0FF",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
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
          <h3 style={{ marginBottom: "20px" }}>
            RE-SCHEDULE JADWAL PETUGAS KEBERSIHAN
          </h3>
        </Box>
        {/* CARD PERTAMA */}
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              JADWAL PETUGAS KEBERSIHAN
            </Typography>
            <Pagi
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "55px",
                height: "30px",
                fontWeight: "bolder",
              }}
            >
              PAGI
            </Pagi>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    NAMA
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    Khoirul Mustaan
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Jam Mulai
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    09.00
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Jam Selesai
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    09:30
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Tugas
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    Membersihkan area masjid
                  </Typography>
                </Grid>
              </Grid>
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
                Keterangan Tugas
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

        {/* CARD KEDUA */}
        <Card
          sx={{
            maxWidth: 800,
            margin: "30px auto",
            borderRadius: 2,
            marginBottom: "10px",
          }}
        >
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              JADWAL PETUGAS KEBERSIHAN
            </Typography>
            <Siang
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "55px",
                height: "30px",
                fontWeight: "bolder",
              }}
            >
              SIANG
            </Siang>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    NAMA
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    Khoirul Mustaan
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Tanggal Re-Schedule
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    23 / 11 / 2024
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Jam Re-Schedule
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    13:00
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Tugas
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    Membersihkan area masjid
                  </Typography>
                </Grid>
              </Grid>
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
                Keterangan Tugas
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
            marginTop: "0px",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
          }}
        >
          <Button
            onClick={() => Navigate("/JadwalKebersihan")}
            sx={{
              color: "#FFFFFF",
              fontWeight: "bolder",
              backgroundColor: "#FFE152",
              mr: 2,
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#FFE152",
              },
            }}
          >
            RE-SCHEDULE
          </Button>
          <Button
            onClick={() => Navigate("/JadwalKebersihan")}
            sx={{
              color: "#00a9ad",
              fontWeight: "bolder",
              border: "2px solid #00a9ad",
              mr: 2,
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
