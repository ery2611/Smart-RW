import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function EWS() {
  return (
    <div style={{backgroundColor:'#cdcdcd',height:'100vh'}}>
      <Container>
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            style={{
              marginTop: 12,
              width: 359,
              height: 270,
              border: 0,
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8392355320707!2d106.97631207499087!3d-6.28485299370406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8d95bbe353%3A0xc8d70e9ca75b316c!2sPT.%20Brilyan%20Trimatra%20Utama%20Headquarter%20Office!5e0!3m2!1sid!2sid!4v1724659551208!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
          }}
        >
          <LocationOnIcon sx={{ fontSize: 24 }} />
          <Card
            sx={{
              p: "2px",
              width: "286px",
            }}
          >
            <Typography fontSize={14} sx={{ mr: 2, ml: 2, textAlign: "start" }}>
              Hulu Katalompa
            </Typography>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }}
        >
          <Card sx={{ width: "340px", p: 2 }}>
            <Grid container justifyContent="space-between" spacing={2}>
              {/* Grid pertama */}
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 12,
                    fontWeight: "bold",
                    mb:0.5,
                  }}
                >
                  Tinggi Air
                </Typography>
                <Box
                  component="img"
                  sx={{ width: 36, height: 36, objectFit: "cover" }}
                  alt="Gambar 1"
                  src="https://via.placeholder.com/36"
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  103 M
                </Typography>
              </Grid>

              {/* Grid kedua */}
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 12,
                    fontWeight: "bold",
                    mb:0.5,
                  }}
                >
                  Pompa Air
                </Typography>
                <Box
                  component="img"
                  sx={{ width: 36, height: 36, objectFit: "cover" }}
                  alt="Gambar 1"
                  src="https://via.placeholder.com/36"
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  On
                </Typography>
              </Grid>

              {/* Grid ketiga */}
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 12,
                    fontWeight: "bold",
                    mb:0.5,
                  }}
                >
                  Status
                </Typography>
                <Box
                  component="img"
                  sx={{ width: 36, height: 36, objectFit: "cover" }}
                  alt="Gambar 1"
                  src="https://via.placeholder.com/36"
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00a9ad",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Siaga <span style={{fontSize:16,}}>4</span>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default EWS;
