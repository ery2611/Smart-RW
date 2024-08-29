import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EventCard = () => {
  const Navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "70%", // Lebarkan card
        margin: "auto",
        borderRadius: "16px",

        pt: 1,
        mt: "100px",
        mb: "20px",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        fontWeight="bold"
        sx={{ mt: 2, mb: 2 }}
      >
        LOMBA 17 AGUSTUS
      </Typography>

      <CardMedia
        component="img"
        height="310"
        image="https://media.suara.com/pictures/653x366/2023/07/20/44578-ilustrasi-17-agustus-freepik.jpg"
        alt="Lomba 17 Agustus"
      />

      <CardContent>
        <Grid container spacing={2}>
          {/* Keterangan */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#A0A1A4",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Keterangan
              </Typography>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Kami mengundang warga sekalian untuk mengikuti lomba 17 Agustus,
                khususnya untuk anak-anak. Dimana akan ada beberapa lomba
                menarik yang diadakan pada 17 Agustus nanti serta hadiah yang
                menarik.
              </Typography>
            </Box>
          </Grid>

          {/* Lomba Details */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Lomba meliputi:
                <ul>
                  <li>Lomba makan kerupuk</li>
                  <li>Lomba menggambar bertema kemerdekaan</li>
                  <li>Lomba balap karung</li>
                  <li>dan masih banyak lagi..</li>
                </ul>
              </Typography>
            </Box>
          </Grid>

          {/* Lokasi */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#A0A1A4",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Lokasi
              </Typography>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Lapangan bola dekat Masjid Batul Jihad
              </Typography>
            </Box>
          </Grid>

          {/* Contact Person */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#A0A1A4",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Contact Person
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: "#333333 ",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    Pak Budi
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A0A1A4",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    087898342226
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: "#333333 ",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    Pak Daffa
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A0A1A4",
                      fontSize: "16px",
                      fontWeight: "regular",
                    }}
                  >
                    087898342226
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Closing Remarks */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Terimakasih atas kerjasamanya
              </Typography>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Hormat kami,
              </Typography>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Ketua RW 36
              </Typography>
            </Box>
          </Grid>

          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              display: "flex",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => Navigate("/Warga")}
              sx={{
                borderColor: "#00A9AD",
                color: "#00A9AD",
                fontWeight: "bold",

                "&:hover": {
                  backgroundColor: "#E0F7F8", // Warna latar belakang saat hover
                  borderColor: "#00A9AD",
                },
                marginBottom: "20px",
              }}
            >
              KEMBALI
            </Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventCard;
