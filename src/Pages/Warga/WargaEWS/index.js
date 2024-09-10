import {
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function EWS() {
  const theme = useTheme(); // Mengambil tema saat ini
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // Layar md atau lebih besar

  if (isMdUp) {
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
                width: 1240,
                height: 395,
                border: 0,
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8392355320707!2d106.97631207499087!3d-6.28485299370406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8d95bbe353%3A0xc8d70e9ca75b316c!2sPT.%20Brilyan%20Trimatra%20Utama%20Headquarter%20Office!5e0!3m2!1sid!2sid!4v1724659551208!5m2!1sid!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Grid container spacing={6} justifyContent="center">
            {/* Card 1 */}
            <Grid item>
              <Card sx={{ width: 346, height: 168 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 22, marginTop: -1 }}
                  >
                    TINGGI AIR
                  </Typography>
                  <Typography variant="body2" color="#000000">
                    <LocationOnIcon fontSize="20px" sx={{ color: "#FE4646" }} />{" "}
                    Zona 2, Kemang Pratama 5
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#00A9AD",
                        marginRight: 2,
                        width: 76,
                        height: 76,
                        fontSize:14,
                         borderRadius: 2 ,
                      }}
                    >
                      76x76
                    </Avatar>
  
                    {/* Teks di sebelah kanan Avatar */}
                    <div>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ fontSize: 16, textAlign: "start" }}
                      >
                        Device
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{
                          fontWeight: "bold",
                          fontSize: 24,
                          textAlign: "start",
                        }}
                      >
                        200 cm
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ fontSize: 14, textAlign: "start" }}
                      >
                        <span style={{ fontWeight: "bold" }}>P2C</span> &gt; 150
                        cm
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Card 2 */}
            <Grid item>
              <Card sx={{ width: 346, height: 168 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 22, marginTop: -1 }}
                  >
                    SIAGA
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: "2px",marginBottom:'2px' }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#00A9AD",
                        marginRight: 2,
                        width: 45,
                        height: 92,
                        fontSize:14,
                         borderRadius: 2 ,
                      }}
                    >
                      45x92
                    </Avatar>
  
                    {/* Teks di sebelah kanan Avatar */}
                    <div>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{
                          fontSize: 14,
                          textAlign: "start",
                          color: "#333333",
                        }}
                      >
                        Status Siaga
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{
                          fontWeight: "bold",
                          fontSize: 22,
                          textAlign: "start",
                          color: "#333333",
                        }}
                      >
                        WASPADA BANJIR
                      </Typography>
                    </div>
                  </Box>
                  <Typography
                    variant="body1"
                    color="#333333"
                    sx={{ fontSize: 14, textAlign: "start" }}
                  >
                    <span style={{ color: "aaaaaa" }}>Update Terakhir</span>{" "}
                    <span style={{ fontWeight: "bold" }}>2 jam lalu</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Card 3 */}
            <Grid item>
              <Card sx={{ width: 346, height: 168 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: 22, marginTop: -1 }}
                  >
                    POMPA AIR
                  </Typography>
                  <Typography variant="body2" color="#000000">
                    <LocationOnIcon fontSize="20px" sx={{ color: "#FE4646" }} />{" "}
                    Zona 2, Kemang Pratama 5
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#00A9AD",
                        marginRight: 2,
                        width: 76,
                        height: 76,
                        fontSize:14,
                         borderRadius: 2 ,
                      }}
                    >
                      76x76
                    </Avatar>
  
                    {/* Teks di sebelah kanan Avatar */}
                    <div>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ fontSize: 16, textAlign: "start" }}
                      >
                        Status Pompa Air
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{
                          fontWeight: "bold",
                          fontSize: 24,
                          textAlign: "start",
                          color: "#2ECC71",
                        }}
                      >
                        ON
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
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
}
