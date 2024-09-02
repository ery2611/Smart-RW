import React, { useState } from "react";
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
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useNavigate } from "react-router-dom";

const CustomTypography = styled(Typography)({
  color: "#000",
  textAlign: "left",
});

export default function WargaFormPengaduan() {
  const Navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFile(fileURL);
    }
  };
  return (
    <div>
      <Container
        maxWidth="xl" // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 2,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",
          padding: 1,
          pr: 2,
          pl: 2,
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "0" }}>FORM PENGADUAN KEAMANAN WARGA</h3>
        </Box>
        <Card
          sx={{
            maxWidth: 1050,
            margin: "0 auto",
            borderRadius: "12px",
            p: 2,
            background: "white",
            marginTop: 2,
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
              INFORMASI PENGADUAN
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
                Nama
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                placeholder="Masukan Nama"
                size="small"
                variant="outlined"
              ></TextField>
            </Box>

            {/* <Grid container spacing={2} textAlign="left">
              <Grid item xs={6}>
                <Typography sx={{ mb: 1 }}>Tanggal Terdeteksi</Typography>
                <TextField
                  sx={{ color: "#00A9AD" }}
                  label=""
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ mb: 1 }}>Waktu Terdeteksi</Typography>
                <TextField
                  sx={{ color: "#00A9AD" }}
                  label=""
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                marginTop: 2,
              }}
            >
              <Typography variant="body1" color="#333333" mb={1}>
                Lokasi Pengaduan
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  mb: 2,
                  "& .MuiInputBase-input": {
                    fontWeight: "bold", // Membuat teks input menjadi bold
                  },
                }}
                placeholder="Masukan Lokasi"
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
                Catatan Pengaduan
              </Typography>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Masukan catatan pengaduan"
                size="small"
                variant="outlined"
                multiline
                rows={3}
              ></TextField>
            </Box>
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: "4px",
                textAlign: "center",
                padding: "1em",
                position: "relative",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
              component="label"
              htmlFor="file-input"
            >
              <Input
                id="file-input"
                type="file"
                accept="image/*,video/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <IconButton sx={{ color: "#00A9AD" }}>
                <FileUploadIcon fontSize="large" />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                Upload foto/video
              </Typography>
              {file && (
                <Box
                  component="img"
                  sx={{
                    position: "absolute",
                    width: "30%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                  src={file}
                  alt="Uploaded media"
                />
              )}
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
            mr:2.2,
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
