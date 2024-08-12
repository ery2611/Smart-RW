import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  styled,
  Divider,
  Button,
  Paper,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function DetailTagihanLunas() {
  const Navigate = useNavigate();
  const BelumLunas = styled(Box)(({ theme }) => ({
    backgroundColor: "#FBE3E3",
    color: "#EE1717",
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
          <h3 style={{ marginBottom: "0" }}>DETAIL TAGIHAN</h3>
        </Box>

        {/* <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Card
            sx={{
              maxWidth: 800,
              margin: "0 auto",
              justifyContent: "center",
              borderRadius: 2,
              mb:1,
              pb:1
            }}
          >
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              INFORMASI IURAN
            </Typography>
            <Box
              sx={{
                width: 425,
                height: 65, // Tinggi yang sama dengan CardMedia
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 3,
                backgroundColor: "#f5f5f5",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 121,
                  height: "100%", // Tinggi penuh sesuai dengan kontainer Box
                  borderRadius: 3,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "#AEAEAE",
                }}
                image={
                  "https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/06/cara-dan-syarat-buka-rekening-mandiri-2024.webp?fit=1200%2C900&ssl=1"
                }
                alt="Bank Mandiri"
              />
              <Box sx={{ flex: "1 0 auto", paddingLeft: 2 }}>
                <Typography component="div" variant="h6">
                  Bank Mandiri
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box> */}

        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
            mt: 2,
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
              INFORMASI IURAN
            </Typography>
            <BelumLunas
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "130px",
                height: "30px",
                fontWeight: "bolder",
              }}
            >
              BELUM LUNAS
            </BelumLunas>
            <Box sx={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Jenis Iuran
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
                    Air
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
                    Judul Iuran
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
                    Iuran Air Bulanan
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
                    Metode Pembayaran
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
                    Bank Mandiri
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
                      height: "50px",
                    }}
                  >
                    Tenggat Waktu
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                      height: "50px",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    03 / 01 / 2024
                    <Box ml="10px">
                      <Typography color="#a1a5b7">00.00</Typography>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} marginBottom={1} marginTop={1} pl={2}>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            color: "#A1A5B7",
                            fontSize: "16px",
                            textAlign: "left",
                          }}
                        >
                          Keterangan
                        </Typography>
                      </Grid>
                      <Grid item xs={11}>
                        <Typography
                          sx={{
                            color: "#000",
                            fontSize: "16px",
                            textAlign: "left",
                          }}
                        >
                          Lorem ipsum dolor sit amet
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              INFORMASI TOTAL
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
                  Nominal Iuran
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
                  RP, 400.000
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
                  Pajak
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
                  RP, 50.000
                </Typography>
              </Grid>
            </Grid>
            <Box justifyContent="center" alignItems="center">
              <Divider
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              />
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography
                  sx={{
                    color: "#A1A5B7",
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  Total Iuran
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
                  RP, 450.000
                </Typography>
              </Grid>
            </Grid>
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
