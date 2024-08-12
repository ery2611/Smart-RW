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
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

function Detailpembayaranwarga() {
  const Normal = styled(Box)(({ theme }) => ({
    backgroundColor: "#DBF8DC",
    color: "#5AF411",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
  const Navigate = useNavigate();
  return (
    <div>
      <Container
        maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // mengatur lebar maksimum container
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
          <h3 style={{ marginBottom: "10px" }}>DETAIL TAGIHAN</h3>
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
              INFORMASI IURAN
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
              LUNAS
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
                    Juduk Iuran
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
                    Iuran Bulanan Air
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
                    Motede Pembayaran
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
                    03 / 01 /2024
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                      marginLeft: 1,
                    }}
                  >
                    00:00
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
                    Keterangan
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Iuran Air telah lunas
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} marginBottom={1}></Grid>
              <Grid container spacing={1} marginBottom={1}></Grid>
            </Box>
          </CardContent>
        </Card>

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
              INFORMASI TOTAL
            </Typography>

            <Typography variant="body1" sx={{ marginY: 0 }}>
              &nbsp;
            </Typography>

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
                    Rp,400.000
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
                    Rp,50.000
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ marginBottom: 2 }} />

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
                    Rp,450.000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}></Grid>
              <Grid container spacing={1} marginBottom={1}></Grid>
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

export default Detailpembayaranwarga;
