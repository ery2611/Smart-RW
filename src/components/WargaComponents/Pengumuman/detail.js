import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function DetailPengumuman() {
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
          <h3 style={{ marginBottom: "0" }}>PENGUMUMAN</h3>
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
              RENOVASI MASJID
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
                  Pembuatan Pengumuman
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Jenis Pengumuman
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
                  Tanggal Mulai
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#A0A1A4"
                  marginBottom={1}
                >
                  Tanggal Selesai
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
                  : Perbaikan
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
                  : 21 / 03 / 2024
                </Typography>
                <Typography
                  variant="body1"
                  height="40px"
                  color="#333333"
                  marginBottom={1}
                >
                  : 01 / 04 / 2024
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
                Bulan ini ada akan ada renovasi untuk Toilet pria yang rusak di
                masjid Baitul Jihad Kemang Pratama. Kami mengundang seluruh
                warga RW 02 untuk berpartisipasi dalam renovasi atap toilet pria
                yang sempat rusak serta beberapa perabotan yang rusak seperti WC
                dan wastafel; renovasi akan dimulai pada tanggal 21 Maret 2024
                besok sampai dengan tanggal 1 April 2024. Agenda renovasi masjid
                meliputi: <br /> <br />
                1. Gotong royong membersihkan area toilet pria yang kotor akibat
                sampah berserakan jatuh dari atas atap
                <br />
                2. Memperbaiki atap yang berlubang
                <br />
                3. Memperbaiki WC toilet pria
                <br />
                4. Memperbaiki wastafel toilet pria
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

export default DetailPengumuman;