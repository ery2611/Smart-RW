import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  styled,
  Grid,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatusCard = () => {
  const Navigate = useNavigate();

  const [status, setStatus] = useState("BELUM DITERIMA");
  const [isActionTaken, setIsActionTaken] = useState(false);
  const [jobStatus, setJobStatus] = useState("SELESAI");

  const handleAccept = () => {
    setStatus("DITERIMA");
    setJobStatus("SELESAI");
    setIsActionTaken(true);
  };

  const handleReject = () => {
    setStatus("DITOLAK");
    setIsActionTaken(true);
    setJobStatus("IN PROGRESS");
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "DITERIMA":
        return {
          color: "#5AF411",
          backgroundColor: "#DBF8DC",
          height: "30px",
          width: "87px",
          fontWeight: "bold",
        };
      case "DITOLAK":
        return {
          color: "#EE1717",
          backgroundColor: "#FBE3E3",
          height: "30px",
          width: "81px",
          fontWeight: "bold",
        };
      case "BELUM DITERIMA":
      default:
        return {
          color: "#FFE152",
          backgroundColor: "#FFF6CB",
          height: "30px",
          width: "150px",
          fontWeight: "bold",
        };
    }
  };

  const getJobStatusColor = () => {
    if (jobStatus === "SELESAI") {
      return "#5AF411"; // Green for selesai
    } else if (jobStatus === "IN PROGRESS") {
      return "#FFE152"; // Yellow for dalam proses
    }
    return "#5AF411"; // Default color
  };

  const BelumDiterima = styled(Box)(({ theme }) => ({
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
    ...getStatusStyles(status),
  }));

  return (
    <div>
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{
            marginBottom: 0,
            color: "#00A9AD",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          WARGA
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            Dashboard/ Laporan/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Detail Laporan
          </Typography>
        </Stack>
      </Stack>
      <Container
        maxWidth="md"
        sx={{
          maxWidth: "1200px",
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
          <h3 style={{ marginBottom: "0" }}>DETAIL LAPORAN HARIAN</h3>
        </Box>
        <Card sx={{ maxWidth: 800, margin: "20px auto", borderRadius: 3 }}>
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
              fontFamily="Montserrat"
            >
              INFORMASI LAPORAN HARIAN
            </Typography>
            <BelumDiterima
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {status}
            </BelumDiterima>
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
                    Petugas Kebersihan
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
                    Khoirul Mustaan
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
                    Jam Mulai
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
                    08.30
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
                    Jam Selesai
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
                    09.00
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
                    Shift
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
                    <span style={{ color: "#74D6D0", fontWeight: "bold" }}>
                      PAGI
                    </span>
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
                    Tanggal Pengumpulan
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
                    08 / 01 / 2024
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
                    Waktu Pengumpulan
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
                    11.00
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
                    Status Pekerjaan
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <b>: </b>
                    </span>
                    <span
                      style={{ fontWeight: "bold", color: getJobStatusColor() }}
                    >
                      {jobStatus}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Lokasi Penugasan
              </Typography>
              <Typography variant="body1" color="#333333">
                Masjid Baitul Jihad Kemang Pratama
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Tugas
              </Typography>
              <Typography variant="body1" color="#333333">
                Membersihkan dan memotong rumput pada area Masjid Baitul Jihad
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
              }}
            >
              <Typography variant="body1" color="#A0A1A4">
                Keterangan Tugas
              </Typography>
              <Typography variant="body1" color="#333333">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 800, margin: "20px auto", borderRadius: 3 }}>
          <CardContent>
            {isActionTaken ? (
              <Box>
                <Typography
                  textAlign="left"
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                  fontFamily="Montserrat"
                >
                  {status === "DITERIMA" ? "Diterima" : "Ditolak"}
                </Typography>
                <Typography
                  textAlign="left"
                  variant="body1"
                  component="div"
                  marginBottom={3}
                  fontFamily="Montserrat"
                >
                  {status === "DITERIMA"
                    ? "Laporan harian petugas kebersihan atas nama Khoirul Mustaan sudah diterima dan diteruskan ke petugas"
                    : "Laporan harian petugas kebersihan atas nama Khoirul Mustaan sudah ditolak."}
                </Typography>
              </Box>
            ) : (
              <div>
                <Box>
                  <Typography
                    textAlign="left"
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                    fontFamily="Montserrat"
                  >
                    Belum Diterima
                  </Typography>
                  <Typography
                    textAlign="left"
                    variant="body1"
                    component="div"
                    marginBottom={3}
                    fontFamily="Montserrat"
                  >
                    Apakah anda ingin menerima laporan harian dari petugas
                    Khoirul Mustaan?
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleAccept}
                    sx={{
                      marginRight: 2,
                    }}
                  >
                    Terima
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleReject}
                  >
                    Tolak
                  </Button>
                </Box>
              </div>
            )}
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
            onClick={() => Navigate("/")}
            sx={{
              color: "#00a9ad",
              fontWeight: "bolder",
              border: "2px solid #00a9ad",
              mr: 2,
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
};

export default StatusCard;
