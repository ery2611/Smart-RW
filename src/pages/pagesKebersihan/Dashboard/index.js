import React from "react";
import Bar from "../../../components/KebersihanComponents/Navbar";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Jadwal from "../../../components/KebersihanComponents/Card/Jadwal";
import Laporan from "../../../components/KebersihanComponents/Card/LaporanAduan";
import Cuti from "../../../components/KebersihanComponents/Card/Cuti";

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
    <Container sx={{ paddingBottom: 4 }} style={{}}>
      <Bar />
      <Box
        display="fluid"
        sx={{
          justifyContent: "flex-start",
          overflowY: "auto",
          width: "100%",
          marginBottom: 2,
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
              KEBERSIHAN
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
          {/* KETERANGAN ABSEN */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {/* Card Sakit */}
            <Card
              style={{
                minWidth: 200,
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
                    color: "#CE1305",
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
                  SAKIT
                </Typography>
              </CardContent>
            </Card>
            <Card
              style={{
                minWidth: 200,
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
                    color: "#FFE152",
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
                  IZIN
                </Typography>
              </CardContent>
            </Card>
            <Card
              style={{
                minWidth: 200,
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
                    color: "#EE1717",
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
                  ALFA
                </Typography>
              </CardContent>
            </Card>
            <Card
              style={{
                minWidth: 200,
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
                    color: "#16E502",
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
                  CUTI
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            height: "45%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
          }}
        >
          {/* Card Jadwal */}
          <Box
            sx={{
              height: "100%",
              width: "30%",
              marginTop: "5px",
              marginLeft: "5px",
              marginBottom: "10px",
              marginRight: "30px",
            }}
          >
            <Jadwal />
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "30%",
              marginTop: "5px",
              marginLeft: "5px",
              marginBottom: "10px",
              marginRight: "30px",
            }}
          >
            <Laporan />
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "30%",
              marginTop: "5px",
              marginLeft: "5px",
              marginBottom: "10px",
              marginRight: "30px",
            }}
          >
            <Cuti />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default index;
