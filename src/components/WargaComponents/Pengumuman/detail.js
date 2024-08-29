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
  const navigate = useNavigate();
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
        KERJA BAKTI
      </Typography>

      <CardMedia
        component="img"
        height="310"
        image="https://1.bp.blogspot.com/-k_cNB25TtGE/YTn3EOVAR_I/AAAAAAAAMSw/URNNHLYEz9wx9Nvr17gfwkRYa6yALUNOACLcBGAsYHQ/s2048/DSC_0934.jpg"
        alt="Kerja Bakti"
      />

      <CardContent>
        <Grid container spacing={1}>
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
                Bulan ini akan ada melakukan kerja bakti setiap hari Minggu di
                RW 36, dimana untuk memperbaiki jalanan yang rusak serta
                membersihkan area RW 36 yang kotor akibat hujan deras minggu
                lalu.
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
                Berikut langkah-langkah kegiatan yang akan dilakukan:
                <ul
                  style={{
                    paddingLeft: "20px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <li>Memperbaiki jalanan yang rusak</li>
                  <li>Membersihkan area perumahan</li>
                  <li>Membersihkan selokan</li>
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
                Area Kemang Pratama 02 & 03
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

          {/* Button */}
          <Box
            sx={{
              width: "100%",
              justifyContent: "end",
              display: "flex",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/Warga")}
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
