import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PanggilanKeamanan() {
  const Navigate = useNavigate();
  return (
    <div>
      <Container
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 1,
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
            justifyContent: "flex-start",
            alignContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#A0A1A4",
              fontWeight: "bold",
            }}
          >
            Hari ini
          </p>
        </Box>
        <Card
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end", // Menyelaraskan item di awal (atas)
                marginRight: 2, // Memberi jarak ke avatar
                color: "#A1A5B7",
                position: "relative", // Menetapkan posisi relatif untuk mengatur margin
                height: "auto", // Memastikan tinggi yang konsisten
              }}
            >
              <Typography variant="body1" sx={{ marginTop: "-10px" }}>
                09.20
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <Avatar
                alt="Avatar Image"
                src="https://via.placeholder.com/150"
                sx={{ width: "50px", height: "50px" }}
              />
              <Box sx={{ marginLeft: 2, textAlign: "left" }}>
                <Typography variant="h6">Khoirul Mustaan</Typography>
                <Typography variant="body2" color="#A1A5B7">
                  Medis
                </Typography>
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #c5bdbd" }} />
            <Grid
              container
              spacing={2} // Jarak antar Grid items
              marginBottom={1}
              marginTop={1}
              pl={2}
            >
              <Grid
                container
                spacing={2}
                marginBottom={1}
                // borderTop="1px solid #c5bdbd"
              >
                <Grid item xs={4}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Nama Pemanggil
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        Yan Azhari
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Tanggal Panggilan
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        01 / 01 / 2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Waktu Panggilan
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        09.30
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
                Lokasi
              </Typography>
              <Typography variant="body1" color="#333333">
                Jalan Kemang Dahlia Raya Blok Z No. 12, Kemang Pratama, Bekasi
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
                Istri saya harus segera dibawa ke IGD tetapi tidak ada kendaraan
                yang bisa mengangkut
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Divider
          sx={{
            marginTop: 2,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#A0A1A4",
              fontWeight: "bold",
            }}
          >
            Kemarin
          </p>
        </Box>

        <Card
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end", // Menyelaraskan item di awal (atas)
                marginRight: 2, // Memberi jarak ke avatar
                color: "#A1A5B7",
                position: "relative", // Menetapkan posisi relatif untuk mengatur margin
                height: "auto", // Memastikan tinggi yang konsisten
              }}
            >
              <Typography variant="body1" sx={{ marginTop: "-10px" }}>
                09.20
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <Avatar
                alt="Avatar Image"
                src="https://via.placeholder.com/150"
                sx={{ width: "50px", height: "50px" }}
              />
              <Box sx={{ marginLeft: 2, textAlign: "left" }}>
                <Typography variant="h6">Khoirul Mustaan</Typography>
                <Typography variant="body2" color="#A1A5B7">
                  Medis
                </Typography>
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #c5bdbd" }} />
            <Grid
              container
              spacing={2} // Jarak antar Grid items
              marginBottom={1}
              marginTop={1}
              pl={2}
            >
              <Grid
                container
                spacing={2}
                marginBottom={1}
                // borderTop="1px solid #c5bdbd"
              >
                <Grid item xs={4}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Nama Pemanggil
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        Yan Azhari
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Tanggal Panggilan
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        01 / 01 / 2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1} direction="row">
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          color: "#A1A5B7",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      >
                        Waktu Panggilan
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                        09.30
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
                Lokasi
              </Typography>
              <Typography variant="body1" color="#333333">
                Jalan Kemang Dahlia Raya Blok Z No. 12, Kemang Pratama, Bekasi
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
                Istri saya harus segera dibawa ke IGD tetapi tidak ada kendaraan
                yang bisa mengangkut
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
          <Button
            onClick={() => Navigate("/")}
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
