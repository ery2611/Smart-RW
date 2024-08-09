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

function DetailTinggiMukaAir() {
  const Navigate = useNavigate();
  const Normal = styled(Box)(({ theme }) => ({
    backgroundColor: "#DBF8DC",
    color: "#5AF411",
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
          <h3 style={{ marginBottom: "10px" }}>DETAIL TINGGI MUKA AIR</h3>
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
              INFORMASI TINGGI MUKA AIR
            </Typography>
            <Normal
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "80px",
                height: "30px",
                fontWeight: "bolder",
              }}
            >
              NORMAL
            </Normal>
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
                    Lokasi
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
                    Sungai Kemang Pratama
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
                    Kategori
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
                    Pintu Air
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
                    Tanggal
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
                    23 / 12 / 2023
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
                    Waktu
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
                    05.00
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
                    Aliran
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
                    Aliran Barat
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
                    Cuaca
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
                    Terang
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
                    Tinggi Air
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
                    40 cm
                  </Typography>
                </Grid>
              </Grid>
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
            onClick={() => Navigate("/Warga/Ews")}
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

export default DetailTinggiMukaAir;
