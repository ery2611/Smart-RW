import {
  Container,
  Stack,
  Typography,
  IconButton,
  Box,
  Card,
  CardContent,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function OnGoing4() {
  const [image, setImage] = useState(null);
  const Navigate = useNavigate();
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
      <Container>
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
            onClick={() => Navigate("/KeamananMobile/Jadwal/DetailOngoing")}
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
    </div>
  );
}
