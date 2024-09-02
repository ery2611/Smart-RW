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
        KEBAKARAN
      </Typography>

      <CardMedia
        component="img"
        height="310"
        image="https://independensi.com/wp-content/uploads/2018/08/pemadam-kebakaran.jpg"
        alt="KEBAKARAN"
      />

      <CardContent>
        <Grid container spacing={2}>
          {/* Berita Dibuat */}
          <Grid item xs={12}>
            <Box>
              <Typography
                sx={{
                  color: "#A0A1A4",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Berita Dibuat
              </Typography>
              <Typography
                sx={{
                  color: "#333333 ",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                27 April 2024
              </Typography>
            </Box>
          </Grid>
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
                Si Jago Merah yang membakar 3 Rumah di RT003, Luas area yang
                terbakar sekitar 100 meter persegi. Kerugian ditaksir sekitar Rp
                5M. Petugas Damkar harus memadamkan api dengan waktu yang cukup
                lama. Petugas memulai pada pukul 02.00 dini hari dan api baru
                padam di sekitar jam 10.00 pagi, Selasa waktu setempat
              </Typography>
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
