import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Grid,
  CardMedia,
  Paper,
  styled,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function RiwayatIkk() {
  const Navigate = useNavigate();
  const Lunas = styled(Box)(({ theme }) => ({
    backgroundColor: "#DBF8DC",
    color: "#5AF411",
    padding: "4px 4px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
  const BelumLunas = styled(Box)(({ theme }) => ({
    backgroundColor: "#FBE3E3",
    color: "#EE1717",

    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
  return (
    <div style={{ marginBottom: 3, paddingBottom: 5 }}>
      <Container
        maxWidth="lg " // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 2,
          marginBottom: 3,

          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",

          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignContent: "left",
          }}
        >
          <Typography
            sx={{
              marginBottom: "10px",
              color: "#A0A1A4",
              fontWeight: "",
              marginTop: "10px",
            }}
          >
            Hari Ini
          </Typography>
        </Box>
        <Card
          sx={{
            maxWidth: "1000",
            margin: "0 auto",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <BelumLunas
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "150px",
                height: "33px",
                fontWeight: "bolder",
              }}
            >
              BELUM LUNAS
            </BelumLunas>
            <Typography
              textAlign="left"
              variant="body1"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold", borderBottom: "1px solid #C5BDBD" }}
            >
              Kebersihan
            </Typography>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                      marginTop: "10px",
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
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    30 / 06 / 2024
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
                    Tanggal Pembayaran
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
                    -
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
                    Rp. 400.000
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
                    Nominal yang Dikeluarkan
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
                    -
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
                    Pembayaran
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
                    -
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
                    Penerima
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
                    Bendahara RW 36
                  </Typography>
                </Grid>
              </Grid>
              <Box display="fluid">
                <Typography
                  sx={{
                    color: "#A1A5B7",
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  Keterangan
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  -
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            borderTop: "1px solid #A0A1A4",
            marginTop: "50px",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignContent: "left",
            }}
          >
            <Typography
              sx={{
                marginBottom: "10px",
                color: "#A0A1A4",
                fontWeight: "",
                marginTop: "10px",
              }}
            >
              Kemarin{" "}
            </Typography>
          </Box>

          <Card
            sx={{
              maxWidth: "1000",
              margin: "0 auto",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Lunas
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignContent: "flex-start",
                  alignItems: "center",
                  width: "100px",
                  height: "30px",
                  fontWeight: "bolder",
                }}
              >
                LUNAS
              </Lunas>
              <Typography
                textAlign="left"
                variant="body1"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", borderBottom: "1px solid #C5BDBD" }}
              >
                Kebersihan
              </Typography>
              <Box x={{ mb: 0 }}>
                <Grid container spacing={1} marginBottom={1}>
                  <Grid item xs={5}>
                    <Typography
                      sx={{
                        color: "#A1A5B7",
                        fontSize: "16px",
                        textAlign: "left",
                        marginTop: "10px",
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
                      Tanggal Pembayaran
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
                      22 / 11 /2024
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
                      Rp. 400.000
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
                      Nominal yang Dikeluarkan
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
                      Rp. 400.000
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
                      Pembayaran
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
                      Bank Transfer - Mandiri
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
                      Penerima
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
                      Bendahara RW 36
                    </Typography>
                  </Grid>
                </Grid>
                <Box display="fluid">
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Keterangan
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Iuran Kebersihan Bulan November
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
          }}
        >
          <Button
            onClick={() => Navigate("/Warga/Ikk")}
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

export default RiwayatIkk;
