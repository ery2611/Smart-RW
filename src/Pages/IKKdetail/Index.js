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
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Index() {
  const Navigate = useNavigate();

  return (
    <Container>
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
        >
          WARGA
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            Dashboard/ IKK/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Tagihan
          </Typography>
        </Stack>
      </Stack>
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#EFEFEF",
          justifyContent: "center",
          marginBottom: "10px",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "fluid",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              DETAIL
            </Typography>
          </Box>
          <Box
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
                padding: 2,
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
              <CardContent
                component={Paper}
                sx={{
                  width: 425,
                  height: 65,
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 3,
                  // marginBottom: 0,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 121,
                    height: 65,
                    marginBottom: -1,
                    marginLeft: -2,
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
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    Bank Mandiri
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => Navigate("/Ogs")}
                    sx={{
                      color: "#00A9AD",
                      fontWeight: "bolder",
                      border: "2px solid #00A9AD",
                      "&:hover": {
                        border: "2px solid #00A9AD",
                        color: "#00A9AD",
                      },
                    }}
                    variant="outlined"
                  >
                    GANTI
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
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
                        03 / 01 / 2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Stack direction="column" marginTop={3}>
                  <Typography
                    variant="body1"
                    color="#A0A1A4"
                    sx={{ fontSize: "16px" }}
                  >
                    Keterangan
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#333333"
                    sx={{ fontSize: "16px" }}
                  >
                    Iuran Air Bulanan
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
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
                        Rp, 400.000
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box borderBottom={1} marginBottom={1} paddingBottom={1}>
                    <Grid container spacing={1}>
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
                          Rp, 50.000
                        </Typography>
                      </Grid>
                    </Grid>
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
                        Rp, 450.000
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              display: "flex",
              marginTop: "15px",
              marginBottom: "15px",
              marginRight: 4,
            }}
          >
            <Button
              onClick={() => Navigate("/Ogs")}
              sx={{
                backgroundColor: "#00A9AD",
                fontWeight: "bolder",
                marginRight: 1,
              }}
              variant="contained"
            >
              KEMBALI
            </Button>
            <Button
              onClick={() => Navigate("/Ogs")}
              sx={{
                color: "#00A9AD",
                fontWeight: "bolder",
                border: "2px solid #00A9AD",
                "&:hover": {
                  border: "2px solid #00A9AD",
                  color: "#00A9AD",
                },
              }}
              variant="outlined"
            >
              KEMBALI
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default Index;
