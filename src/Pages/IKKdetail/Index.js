import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function IndexKegiatan() {
  //   const Kembali = styled(Box)(({ theme }) => ({
  //     color: "#00A9AD",
  //     padding: "4px 8px",
  //     borderRadius: "4px",
  //     display: "inline-block",
  //     border: "2px solid #00A9AD",
  //     marginBottom: theme.spacing(2),
  //   }));
  const Navigate = useNavigate();
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
          <h3 style={{ marginBottom: "0" }}>KEGIATAN</h3>
        </Box>
        <Card
          sx={{
            maxWidth: 700,
            margin: "0 auto",
            borderRadius: 2,
            p: 2,
            background: "white",
            marginTop: 2,
            maxWidth: "auto",
            boxShadow: 5,
          }}
        >
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              fontWeight="bolder"
              fontFamily="Montserrat"
            >
              LOMBA 17 AGUSTUS
            </Typography>
            {/* <StatusBadge>DITERIMA</StatusBadge> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                gap: "215px", // Mengatur jarak antar box
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Pembuatan Kegiatan
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Lokasi
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Waktu Mulai
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Waktu Selesai
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body1"
                  height="40px"
                  color="#333333"
                  marginBottom={1}
                >
                  : 16 / 8 / 2024
                  <Box ml="10px">
                    <Typography>10.00</Typography>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#333333"
                  marginBottom={1}
                >
                  : Masjid Baitul Jihad, Kemang Pratama RW 02
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#333333"
                  marginBottom={1}
                >
                  : 17 / 8 / 2024
                  <Box ml="10px">
                    <Typography>08.00</Typography>
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#333333"
                  marginBottom={1}
                >
                  : 17 / 8 / 2024
                  <Box ml="10px">
                    <Typography>17.00</Typography>
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Keterangan
              </Typography>
              <Typography variant="body1" color="#333333">
                Kami mengundang warga sekalian untuk mengikuti lomba 17 Agustus,
                khususnya untuk anak-anak. Dimana akan ada beberapa lomba
                menarik yang diadakan pada 17 Agustus nanti serta hadiah yang
                menarik. <br /> <br />
                Lomba meliputi: <br />
                1. Lomba makan kerupuk <br />
                2. Lomba menggambar bertema kemerdekaa <br />
                3. Lomba balap karung <br />
                dan masih banyak lagi..
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Agenda Kegiatan
              </Typography>
              <Typography variant="body1" color="#333333">
                Agenda kegiatan meliputi:
                <ul>
                  <li>07:00 - 08:00 : Pembukaan</li>
                  <li>09:00 - 12:00 : Lomba</li>
                  <li>12:00 - 13:00 : Ishoma</li>
                  <li>13:00 - 15:00 : Final Lomba</li>
                  <li>15:00 - 15:30 : Istirahat</li>
                  <li>
                    15:30 - 16:30 : Pemberian piala dan pengumuman pemenang
                  </li>
                  <li>16:30 - 17:00 : Penutupan</li>
                </ul>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Contact Person
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                  gap: "215px", // Mengatur jarak antar box
                  textAlign: "left",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "space-around",
                    display: "flex",
                    gap: "215px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body1" color="#333333">
                      Pak Budi
                    </Typography>
                    <Typography variant="body1" color="#A0A1A4">
                      0878893422226
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body1" color="#333333">
                      Pak Daffa
                    </Typography>
                    <Typography variant="body1" color="#A0A1A4">
                      0878893422226
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                variant="body1"
                fontWeight={700}
                marginTop={1}
                color="#333333"
              >
                Terimakasih atas kerjasamanya
              </Typography>
              <Typography variant="body1" fontWeight={700} color="#333333">
                Hormat Kami
              </Typography>
              <Typography variant="body1" fontWeight={700} color="#333333">
                Ketua RW 02
              </Typography>
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
            onClick={() => Navigate("/Warga")}
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

export default IndexKegiatan;
