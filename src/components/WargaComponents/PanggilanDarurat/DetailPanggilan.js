import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

function Detaildatapanggilan() {
  const Navigate = useNavigate();
  return (
    <div style={{ paddingBottom: 4 }}>
      <Container
        maxWidth="md"
        sx={{
          maxWidth: "1200px",
          marginTop: 2,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",

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
          <h3 style={{ marginBottom: "10px" }}>DETAIL PANGGILAN DARURAT</h3>
        </Box>

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
              INFORMASI PANGGILAN
            </Typography>

            <Box>
              <Typography variant="body1" sx={{ marginY: 0 }}>
                &nbsp;
              </Typography>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Jenis Panggilan
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
                    Keamanan
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
                    Status Petugas
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Rafif
                  </Typography>
                </Grid>
                <Grid item xs={5} sx={{ mt: 3 }}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Rafif
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#5AF411",
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "Bold",
                    }}
                  >
                    TIBA DILOKASI
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#BCBCBE",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    MEMANGGIL
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        {/* Jarak antara Card */}
        <Typography variant="body1" sx={{ marginY: 0 }}>
          &nbsp;
        </Typography>

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
              DETAIL PANGGILAN
            </Typography>

            <Box>
              <Typography variant="body1" sx={{ marginY: 0 }}>
                &nbsp;
              </Typography>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Lokasi
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                      whiteSpace: "nowrap", // Menjaga teks tetap lurus ke samping
                    }}
                  >
                    Jalan Kemang Dahlia Raya Blok Z No. 12, Kemang Pratama,
                    Bekasi
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
                    Deskripsi
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Orang mencurigakan yang keliling depan rumah
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
                    Gambar
                  </Typography>

                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      height="70"
                      image=""
                      alt="Gambar disini"
                      sx={{
                        borderRadius: 1,
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#EFEFEF",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 2,
          }}
        >
          <Button
            onClick={() => Navigate("/Warga/Panggilan")}
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

export default Detaildatapanggilan;
