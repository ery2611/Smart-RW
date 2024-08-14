import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  Grid,
  styled,
  IconButton,
  Input,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function FormJadwalPetugas() {
  const Navigate = useNavigate();
  return (
    <div style={{ paddingBottom: 4 }}>
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
          <h3 style={{ marginBottom: "0" }}>FORM JADWAL PETUGAS KEBERSIHAN</h3>
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
              INFORMASI PETUGAS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Typography variant="body1" color="#333333" mb={1}>
                Petugas Kebersihan
              </Typography>
              <FormControl sx={{ width: "100%", mb: 2 }} size="small">
                <Select
                  displayEmpty
                  variant="outlined"
                  defaultValue=""
                  renderValue={(selected) => {
                    if (selected === "") {
                      return (
                        <Typography sx={{ color: "#A1A5B7" }}>
                          Pilih Petugas Kebersihan
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                >
                  {"" && (
                    <MenuItem value="" disabled>
                      <em>Pilih Petugas Kebersihan</em>
                    </MenuItem>
                  )}
                  <MenuItem value="Khoirul Mustaan">Khoirul Mustaan</MenuItem>
                  <MenuItem value="Yan Azhari">Yan Azhari</MenuItem>
                  <MenuItem value="Farrel Testnama">Farrel Testnama</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>

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
              INFORMASI TUGAS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <Typography variant="body1" mb={1}>
                  Tanggal Pengaduan
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  variant="outlined"
                  type="date"
                ></TextField>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 1 }}>
              <Box sx={{ width: "50%", textAlign: "left" }}>
                <Typography variant="body1" mb={1}>
                  Jam Mulai
                </Typography>
                <TextField
                  sx={{ width: "95%" }}
                  size="small"
                  variant="outlined"
                  type="time"
                ></TextField>
              </Box>
              <Box sx={{ width: "50%", textAlign: "left" }}>
                <Typography variant="body1" mb={1}>
                  Jam Selesai
                </Typography>
                <TextField
                  sx={{ width: "100%", color: "#00A9AD" }}
                  size="small"
                  variant="outlined"
                  type="time"
                ></TextField>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 1,
              }}
            >
              <Typography variant="body1" color="#333333" mb={1}>
                Shift
              </Typography>
              <FormControl sx={{ width: "100%", mb: 1 }} size="small">
                <Select
                  displayEmpty
                  variant="outlined"
                  defaultValue=""
                  renderValue={(selected) => {
                    if (selected === "") {
                      return (
                        <Typography sx={{ color: "#A1A5B7" }}>
                          Pilih Shift
                        </Typography>
                      );
                    }
                    return selected;
                  }}
                >
                  {"" && (
                    <MenuItem value="" disabled>
                      <em>Pilih Shift</em>
                    </MenuItem>
                  )}
                  <MenuItem value="PAGI">PAGI</MenuItem>
                  <MenuItem value="SIANG">SIANG</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="body1" color="#333333" mb={1}>
                Tugas
              </Typography>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Masukan tugas"
                size="small"
                variant="outlined"
              ></TextField>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="body1" color="#333333" mb={1}>
                Keterangan Tugas
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                placeholder="Masukan alasan pengaduan"
                size="small"
                variant="outlined"
                multiline
                rows={3}
              ></TextField>
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
          {/* <Button
            onClick={() => Navigate("/")}
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
          </Button> */}
          <Box sx={{ width: "65%", textAlign: "end" }}>
            <Button
              variant="contained"
              sx={{
                height: 38,
                background: "#00A9AD",
                mr: 3,
                fontWeight: "bold",
              }}
            >
              SUBMIT
            </Button>
            <Button
              variant="outlined"
              onClick={() => Navigate("/JadwalKebersihan")}
              sx={{
                height: 38,
                color: "#00A9AD",
                fontWeight: "bolder",
                border: "2px solid #00a9ad",
                "&:hover": {
                  border: "2px solid #00a9ad",
                  color: "#00a9ad",
                },
              }}
            >
              BATAL
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
