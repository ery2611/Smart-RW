import {
  Box,
  Button,
  Card,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";

const FormPemotonganRumput = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* halaman utama */}
        {/* card form panggilan */}
        <Typography marginTop="10px" fontSize={"16px"} textAlign={"center"}>
          FORM PENGADUAN PEMOTONGAN RUMPUT
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Card sx={{ width: "85%", borderRadius: "12px" }}>
            <Typography
              marginTop="10px"
              fontSize={"18px"}
              fontWeight="bold"
              textAlign={"center"}
            >
              INFORMASI PENGADUAN
            </Typography>
            <Box
              sx={{
                mt: 2,
                ml: 1,
                width: "95%",
                textAlign: "left",
              }}
            >
              <Stack direction={"column"}>
                <Typography sx={{ mt: 2 }} fontSize={"14px"}>
                  Nama
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  placeholder="Masukkan Nama"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Stack direction={"column"} sx={{ width: "50%" }}>
                  <Typography sx={{ mt: 2 }} fontSize={"14px"}>
                    Tanggal Pengaduan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukkan Tanggal"
                    size="small"
                    variant="outlined"
                    type="date"
                  />
                </Stack>
                <Stack direction={"column"} sx={{ width: "50%" }}>
                  <Typography sx={{ mt: 2 }} fontSize={"14px"}>
                    Tanggal Pengaduan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukkan Tanggal"
                    size="small"
                    variant="outlined"
                    type="date"
                  />
                </Stack>
              </Stack>
              <Stack direction={"column"}>
                <Typography sx={{ mt: 2 }} fontSize={"14px"}>
                  Lokasi Pengaduan
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  placeholder="Masukkan Lokasi"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Stack>
              <Stack direction={"column"}>
                <Typography sx={{ mt: 2 }} fontSize={"14px"}>
                  Catatan Pengaduan
                </Typography>
                <TextField
                  placeholder="Masukkan catatan pengaduan"
                  variant="outlined"
                  multiline
                  rows={4} // Mengatur tinggi area teks
                  sx={{ width: "100%" }} // Mengatur lebar penuh
                />
              </Stack>
              <Box
                sx={{
                  mt: 2,
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
              >
                <Input
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

              <Box marginTop="10px" />
            </Box>
          </Card>
        </Box>

        {/* button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "93%",
            mt: 3,
          }}
        >
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
              sx={{ height: 38, color: "#00A9AD", fontWeight: "bold" }}
            >
              BATAL
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPemotonganRumput;
