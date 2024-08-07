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

function Form() {
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
          <h3 style={{ marginBottom: "0" }}>FORM PENGADUAN KEBERSIHAN WARGA</h3>
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
                sx={{ width: "100%", mb: 2 }}
                placeholder="Masukan Nama"
                size="small"
                variant="outlined"
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", mt: 1 }}>
              <Box sx={{ width: "50%", textAlign: "left" }}>
                <Typography variant="body1" mb={1}>
                  Tanggal Pengaduan
                </Typography>
                <TextField
                  sx={{ width: "95%" }}
                  size="small"
                  variant="outlined"
                  type="date"
                ></TextField>
              </Box>
              <Box sx={{ width: "50%", textAlign: "left" }}>
                <Typography variant="body1" mb={1}>
                  Waktu Pengaduan
                </Typography>
                <TextField
                  sx={{ width: "100%", color: "#00A9AD" }}
                  size="small"
                  variant="outlined"
                  type="time"
                ></TextField>
              </Box>
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
                Judul Pengaduan
              </Typography>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Masukan judul"
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
                Alasan Pengaduan
              </Typography>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Masukan alasan pengaduan"
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

export default Form;
