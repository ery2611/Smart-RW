import {
  Container,
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../../components/WargaComponents/Header";

export default function Detailpembayaranikk() {
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (event) => {
    setMetodePembayaran(event.target.value); // Update state dengan nilai yang dipilih
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <Container sx={{ maxwidth: "md", mt: "90px" }}>
        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: 2,
            mt: 2,
          }}
        >
          <CardContent>
            <Typography
              textAlign="center"
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#00A9AD", mb: 5 }}
            >
              Pembayaran IKK
            </Typography>
            <Box x={{ mb: 0 }}>
              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Atas Nama
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Heru
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Alamat
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    JL.KEMANG DHALIA 2
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Biaya Perbulan
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    RP 200.000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Denda
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    -
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Biaya Per
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    sx={{
                      maxWidth: 300,
                      height: 30,
                      borderColor: "#00a9ad",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "&:hover fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 14px", // Menyesuaikan padding agar pas dengan tinggi 30px
                          lineHeight: "30px", // Menyesuaikan line-height agar teks berada di tengah
                        },
                      },
                    }}
                  >
                    <Select
                      displayEmpty
                      value={metodePembayaran}
                      onChange={handleChange} // Fungsi yang menangani perubahan
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#000",
                      }}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <span style={{ color: "#00a9ad" }}>1 Bulan</span>
                          );
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Qris">2 Bulan</MenuItem>
                      <MenuItem value="BCA">3 Bulan</MenuItem>
                      <MenuItem value="Mandiri">1 Tahun</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Motede Pembayaran
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    sx={{
                      maxWidth: 300,
                      height: 30,
                      borderColor: "#00a9ad",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "&:hover fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00a9ad",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 14px", // Menyesuaikan padding agar pas dengan tinggi 30px
                          lineHeight: "30px", // Menyesuaikan line-height agar teks berada di tengah
                        },
                      },
                    }}
                  >
                    <Select
                      displayEmpty
                      value={metodePembayaran}
                      onChange={handleChange} // Fungsi yang menangani perubahan
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#000",
                      }}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <span style={{ color: "#00a9ad" }}>
                              Transfer Bank
                            </span>
                          );
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Qris">Qris</MenuItem>
                      <MenuItem value="BCA">BCA</MenuItem>
                      <MenuItem value="Mandiri">Mandiri</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Pembayaran Bulan
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Januari 2024
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginBottom={1}>
                <Grid item xs={4} sx={{ mt: 3, mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#A1A5B7",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ mt: 3, mb: 3 }}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    RP 100.000
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Memindahkan kotak ke kanan
              }}
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Button
                  variant="outlined"
                  onClick={() => Navigate("/Warga/Ikk")}
                  sx={{
                    height: 36,
                    width: 300,
                    color: "#00A9AD",
                    fontWeight: "bold",
                    boxShadow: 2,
                    border: "1.5px solid #00a9ad",
                    mr: 2,
                    borderRadius: "12px",
                    "&:hover": {
                      border: "1.5px solid #00a9ad",
                      color: "#00a9ad",
                      borderRadius: "12px",
                    },
                  }}
                >
                  Kembali
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  sx={{
                    height: 36,
                    width: 300,
                    bgcolor: "#00A9AD",
                    fontWeight: "bold",
                    boxShadow: 2,
                    ml: 2,
                    borderRadius: "12px",
                    "&:hover": {
                      bgcolor: "#00a9ad",
                      color: "#fff",
                      borderRadius: "12px",
                    },
                  }}
                >
                  Bayar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Dialog Konfirmasi Pembayaran */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ textAlign: "center", color: "#00A9AD", fontWeight: "bold" }}
        >
          KONFIRMASI
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ textAlign: "center", fontSize: "16px" }}>
            Apakah anda yakin ingin membayar?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              width: 150,
              color: "#00A9AD",
              fontWeight: "bold",
              border: "1.5px solid #00a9ad",
              borderRadius: "12px",
              "&:hover": {
                border: "1.5px solid #00a9ad",
                color: "#00a9ad",
              },
            }}
          >
            Kembali
          </Button>
          <Button
            onClick={() => Navigate("/Warga/LunasIkk")}
            variant="contained"
            sx={{
              width: 150,
              bgcolor: "#00A9AD",
              fontWeight: "bold",
              borderRadius: "12px",
              "&:hover": {
                bgcolor: "#00a9ad",
                color: "#fff",
              },
            }}
          >
            Bayar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
