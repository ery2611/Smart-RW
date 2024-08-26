import React from "react";
import Bar from "../../../components/WargaComponents/Navbar";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Kegiatan from "../../../components/WargaComponents/Kegiatan/index";
import Pengumuman from "../../../components/WargaComponents/Pengumuman";
import Forum from "../../../components/WargaComponents/Forum";
import Header from "../../../components/WargaComponents/Header";
import Highlight from "../../../components/WargaComponents/DashboardBaru/CardAtas/index";

function index() {
  // Mendapatkan tanggal saat ini
  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "long" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal} ${bulan} ${tahun}`;

  return (
    <Box>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Highlight />
      </Box>
      <Container style={{ marginTop: "10px" }}>
        <Box
          display="fluid"
          sx={{
            justifyContent: "flex-start",
            overflowY: "auto",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "3%",
            }}
          >
            <Stack direction="column">
              <Typography
                variant="h5"
                sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
              >
                WARGA
              </Typography>
              <Stack
                direction="row"
                sx={{ marginBottom: 2, fontSize: 14, fontWeight: "bolder" }}
              >
                <Typography variant="h9" sx={{ color: "black" }}>
                  Dashboard
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            display="fluid"
            sx={{
              justifyContent: "flex-start",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                marginBottom: "5px",
              }}
            >
              <Typography variant="body1" sx={{ color: "#181C32" }}>
                {formatTanggal}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Card
                style={{
                  minWidth: 300,
                  maxHeight: 100,
                  justifyContent: "center",

                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 10,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
                  margin: "auto",
                  paddingBottom: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "48px",
                      color: "#4169E1",
                      fontWeight: "900",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      color: "#000",
                      fontWeight: "bolder",
                    }}
                  >
                    PENGUMUMAN
                  </Typography>
                </CardContent>
              </Card>
              <Card
                style={{
                  minWidth: 300,
                  maxHeight: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 10,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
                  margin: "auto",
                  paddingBottom: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "48px",
                      color: "#16FF00",
                      fontWeight: "900",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      color: "#000",
                      fontWeight: "bolder",
                    }}
                  >
                    PENGUMUMAN
                  </Typography>
                </CardContent>
              </Card>
              <Card
                style={{
                  minWidth: 300,
                  maxHeight: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 10,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
                  margin: "auto",
                  paddingBottom: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "48px",
                      color: "#FF0000",
                      fontWeight: "900",
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      color: "#000",
                      fontWeight: "bolder",
                    }}
                  >
                    PENGUMUMAN
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "50px",
            }}
          >
            <Kegiatan />
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              width: "100%",
            }}
          >
            <Pengumuman />
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              width: "100%",
            }}
          >
            <Forum />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default index;
