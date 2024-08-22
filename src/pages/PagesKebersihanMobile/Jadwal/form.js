import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import {
  ArrowBack,
  Phone,
  Email,
  AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Detail2() {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [image, setImage] = useState(null);

  const [note, setNote] = useState("");

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          backgroundColor: "#EFEFEF",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: 1,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#00A9AD",
              fontWeight: "bold",
              textAlign: "start",
              fontSize: 14,
            }}
          >
            Menjaga Pos Keamanan
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 1 }}>
            <LocationOnIcon sx={{ color: "#FE4646" }} />
            <Typography sx={{ ml: 0.5, fontSize: 12 }}>
              Jl. Kemang Dahlia raya
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthIcon sx={{ color: "#00A9AD" }} />
              <Typography sx={{ ml: 0.5, fontSize: 12 }}>
                22 Januari 2024
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", mr: 13.5 }}>
                <AccessTimeIcon sx={{ color: "#00A9AD" }} />
                <Typography sx={{ ml: 0.5, fontSize: 12 }}>09:30</Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "#00A9AD",
              fontWeight: "bold",
              textAlign: "start",
              fontSize: 12,
            }}
          >
            Regu Kebersihan
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Mengatur elemen secara horizontal
              justifyContent: "space-between", // Menyebarkan elemen ke kiri dan kanan
              alignItems: "center", // Menyelaraskan item secara vertikal
              mb: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: 12, textAlign: "start" }}
            >
              Anggota Kebersihan
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontSize: 12, textAlign: "end" }}
            >
              Regu 1 Kebersihan
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/path-to-rahmat-pic.jpg" />
              <Box
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "start",
                    lineHeight: 1.2, // Memastikan line height tidak terlalu besar
                  }}
                >
                  Rama
                </Typography>
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    textAlign: "start",
                    lineHeight: 1.2, // Menyelaraskan line height
                  }}
                >
                  Anggota Regu 1 Kebersihan
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            variant="subtitle1"
            sx={{ fontSize: 12, textAlign: "start", mt: 1, mb: 1 }}
          >
            Komandan Regu 1 Kebersihan
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src="/path-to-rahmat-pic.jpg" />
              <Box
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "start",
                    lineHeight: 1.2, // Memastikan line height tidak terlalu besar
                  }}
                >
                  Rahmat
                </Typography>
                <Typography
                  sx={{
                    color: "#333333",
                    fontSize: 12,
                    textAlign: "start",
                    lineHeight: 1.2, // Menyelaraskan line height
                  }}
                >
                  Komandan Regu
                </Typography>
              </Box>
            </Box>
            <Stack direction="row" spacing={0.1}>
              <IconButton>
                <Phone
                  sx={{
                    bgcolor: "#00A9AD",
                    color: "#FBFAFA",
                    borderRadius: "50%",
                    fontSize: 24,
                    p: "3px",
                  }}
                />
              </IconButton>
              <IconButton>
                <Email
                  sx={{
                    bgcolor: "#00A9AD",
                    color: "#FBFAFA",
                    borderRadius: "50%",
                    fontSize: 24,
                    p: "3px",
                  }}
                />
              </IconButton>
            </Stack>
          </Box>
        </Box>
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
            Media
          </Typography>
        </Stack>
        <Card
          sx={{
            width: 120,
            height: 120,
            bgcolor: "#DADADA",
            boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#DADADA",
            },
          }}
          onClick={() => document.getElementById("icon-button-file").click()}
        >
          <CardContent sx={{ textAlign: "center", padding: 0 }}>
            {image ? (
              <Box
                component="img"
                src={image}
                alt="Uploaded"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={handleImageUpload}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 42,
                      height: 42,
                      "&:hover": {
                        backgroundColor: "#AEAEAE",
                      },
                    }}
                  >
                    <AddIcon
                      sx={{
                        fontSize: 42,
                        bgcolor: "#AEAEAE",
                        color: "#DADADA",
                        borderRadius: "50%",
                        width: "42px",
                        height: "42px",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: 1, color: "#AEAEAE" }}
                  >
                    Tambahkan Foto
                  </Typography>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
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
            Catatan Laporan
          </Typography>
        </Stack>
        <Card
          sx={{
            width: "328px",
            backgroundColor: "#FEFEFE",
            borderRadius: "8px",
            boxShadow: 5,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={note}
              onChange={handleChange}
              variant="standard"
              placeholder="Tambahkan catatan disini"
              sx={{
                "& .MuiInputBase-root": {
                  border: "none", // Menghilangkan border
                  boxShadow: "none", // Menghilangkan shadow
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "none", // Menghilangkan underline sebelum difokuskan
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none", // Menghilangkan underline saat hover
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none", // Menghilangkan underline setelah difokuskan
                },
                "& .MuiInputBase-input": {
                  padding: "8px 0", // Menyesuaikan padding input
                  border: "none", // Menghilangkan border pada input
                  outline: "none", // Menghilangkan outline saat difokuskan
                },
              }}
            />
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Memindahkan kotak ke kanan
            padding: 2,
          }}
        >
          <Button
            onClick={() => Navigate("/KebersihanMobile/Jadwal")}
            variant="text"
            sx={{
              width: 140,
              height: 38,
              color: "#00A9AD",
              mr: 3,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Kembali
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              width: 140,
              height: 38,
              color: "#F0F0F0",
              bgcolor: "#00A9AD",
              fontWeight: "bolder",
              textTransform: "capitalize",
              border: "2px solid #00a9ad",
              "&:hover": {
                color: "#F0F0F0",
                bgcolor: "#00A9AD",
              },
            }}
          >
            Kirim Laporan
          </Button>
        </Box>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textAlign: "center", color: "#00A9AD" }}
        >
          Kirim Laporan
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ textAlign: "center" }}
          >
            Apakah anda yakin ingin mengirimkan laporan?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
          <Button onClick={handleClose} sx={{ color: "#00A9AD" }}>
            Batal
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ bgcolor: "#00A9AD", color: "#fff" }}
          >
            Kirim Laporan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
