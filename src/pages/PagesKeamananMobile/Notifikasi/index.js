import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Bar from "../../../components/ComponentKeamananMobile/BottomBar";

function KeamananPos() {
  const data = [
    {
      waktu: "30 mins Ago",
      nama: "Laporan Tugas",
      status_kehadiran: "Belum Diterima",
      desk: "Pembersihan Taman Balai Warga RW 02 ...",
    },
    {
      waktu: "1 hour Ago",
      nama: "Laporan Tugas",
      status_kehadiran: "Laporan Diterima",
      desk: "Pembersihan Taman Balai Warga RW 02 ...",
    },
    {
      waktu: "13:00",
      nama: "Update Jadwal",
      status_kehadiran: "Update",
      desk: "Pembersihan Taman Balai Warga RW 02 ...",
    },
  ];

  const getPeringatanColor = (peringatan) => {
    switch (peringatan) {
      case "Laporan Diterima":
        return {
          color: "#5AF411",
          fontWeight: "bold",
        };
      case "Belum Diterima":
        return {
          color: "#EE1717",
          fontWeight: "bold",
        };
      case "Update":
        return {
          color: "#000",
          fontWeight: "bold",
        };
      default:
        return {};
    }
  };

  const belumDiterimaData = data.filter(
    (item) => item.status_kehadiran === "Belum Diterima"
  );

  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal} / ${bulan} / ${tahun}`;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "fluid",
          justifyContent: "flex-start",
          marginBottom: 1,
          width: "100%",
        }}
      >
        <Stack
          direction="column"
          textAlign="left"
          marginBottom={2}
          marginTop={1}
          ml={1}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: 0,
              color: "#00A9AD",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Hari ini
          </Typography>
          <Stack>
            <Typography sx={{ color: "#A0A1A4", fontSize: 10 }}>
              {formatTanggal}
            </Typography>
          </Stack>
        </Stack>
        {data.map((card, index) => (
          <Card
            component={Paper}
            key={index}
            sx={{
              maxWidth: { xs: "328px", sm: "none" },
              width: { xs: "100%", sm: "auto" },
              height: "82px",
              display: "flex",
              justifyContent: "center",
              marginBottom: 1,
              boxShadow: 5,
              borderRadius: "10px",
              "@media (min-width:600px)": {
                maxWidth: "none !important", // Ensure it overrides any conflicting styles
              },
            }}
          >
            <CardContent
              sx={{
                padding: 1,
                paddingTop: 0,
                height: "100%", // Agar CardContent mengisi penuh tinggi Card
                width: "100%", // Agar CardContent mengisi penuh lebar Card
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Untuk memusatkan konten secara vertikal
              }}
            >
              {/* Grid untuk Laporan dan 08.00 */}
              <Grid container sx={{ justifyContent: "flex-start" }}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      textAlign: "left",
                      color: "#00A9AD",
                    }}
                  >
                    {card.nama}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 12, color: "#AEAEAE" }}>
                    {card.waktu}
                  </Typography>
                </Grid>
              </Grid>

              {/* Stack untuk Pembersihan Taman */}
              <Stack sx={{ width: "100%", justifyContent: "flex-start" }}>
                <Typography
                  sx={{ fontSize: 12, fontWeight: "bold", textAlign: "left" }}
                >
                  {card.desk}
                </Typography>
              </Stack>

              {/* Grid untuk Auto dan Hadir */}
              <Grid container sx={{ justifyContent: "flex-start", mt: 1 }}>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {card.status_kehadiran === "Laporan Diterima" && (
                    <CheckCircleIcon
                      sx={{
                        color: "#2ECC71",
                        fontSize: "small",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  {card.status_kehadiran === "Update" && (
                    <AccessTimeIcon
                      sx={{
                        color: "#00A9AD",
                        fontSize: "small",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#AEAEAE",
                      textAlign: "left",
                      ...getPeringatanColor(card.status_kehadiran),
                    }}
                  >
                    {card.status_kehadiran === "Update" ? (
                      <>
                        <span style={{ textDecoration: "line-through" }}>
                          12:00
                        </span>
                        &nbsp; &gt;{" "}
                        <span style={{ color: "#00A9AD" }}>13:00</span>
                      </>
                    ) : (
                      card.status_kehadiran
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  {card.status_kehadiran === "Update" && (
                    <>
                      <Typography
                        sx={{
                          marginRight: 1,
                          fontSize: 12,
                          color: "#00A9AD",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        Detail
                        <KeyboardArrowRightIcon
                          sx={{
                            color: "#00A9AD",
                            ml: 1,
                          }}
                        />
                      </Typography>
                    </>
                  )}
                  {card.status_kehadiran !== "Update" && (
                    <KeyboardArrowRightIcon
                      sx={{
                        bgcolor: "#00A9AD",
                        color: "#CCEEEF",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

        <Stack
          direction="column"
          textAlign="left"
          marginBottom={2}
          marginTop={2}
          ml={1}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: 0,
              color: "#00A9AD",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Kemarin
          </Typography>
        </Stack>
        {belumDiterimaData.map((card, index) => (
          <Card
            component={Paper}
            key={index}
            sx={{
              maxWidth: { xs: "328px", sm: "none" },
              width: { xs: "100%", sm: "auto" },
              height: "82px",
              display: "flex",
              justifyContent: "center",
              marginBottom: 1,
              boxShadow: 5,
              borderRadius: "10px",
              "@media (min-width:600px)": {
                maxWidth: "none !important", // Ensure it overrides any conflicting styles
              },
            }}
          >
            <CardContent
              sx={{
                padding: 1,
                paddingTop: 0,
                height: "100%", // Agar CardContent mengisi penuh tinggi Card
                width: "100%", // Agar CardContent mengisi penuh lebar Card
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Untuk memusatkan konten secara vertikal
              }}
            >
              <Grid container sx={{ justifyContent: "flex-start" }}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      textAlign: "left",
                      color: "#00A9AD",
                    }}
                  >
                    {card.nama}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: 12, color: "#AEAEAE" }}>
                    {card.waktu}
                  </Typography>
                </Grid>
              </Grid>

              {/* Stack untuk Pembersihan Taman */}
              <Stack sx={{ width: "100%", justifyContent: "flex-start" }}>
                <Typography
                  sx={{ fontSize: 12, fontWeight: "bold", textAlign: "left" }}
                >
                  {card.desk}
                </Typography>
              </Stack>

              {/* Grid untuk Auto dan Hadir */}
              <Grid container sx={{ justifyContent: "flex-start", mt: 1 }}>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {card.status_kehadiran === "Laporan Diterima" && (
                    <CheckCircleIcon
                      sx={{
                        color: "#2ECC71",
                        fontSize: "small",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  {card.status_kehadiran === "Update" && (
                    <AccessTimeIcon
                      sx={{
                        color: "#FFC107",
                        fontSize: "small",
                        marginRight: "5px",
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#AEAEAE",
                      textAlign: "left",
                      ...getPeringatanColor(card.status_kehadiran),
                    }}
                  >
                    {card.status_kehadiran === "Update"
                      ? "12:00 > 13:00"
                      : card.status_kehadiran}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <KeyboardArrowRightIcon
                    sx={{
                      bgcolor: "#00A9AD",
                      color: "#CCEEEF",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
        <Box sx={{ marginTop: 6 }}>
          <Bar />
        </Box>
      </Box>
    </Container>
  );
}

export default KeamananPos;
