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
import { useNavigate } from "react-router-dom";
import Bar from "../../../components/WargaComponents/Navbar";

const FormPanggilan = () => {
  const [file, setFile] = useState(null);
  const Navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Box>
      <Bar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Text pojok kiri atas */}
        <Box height="70px">
          <Stack direction="column" textAlign="left">
            <Typography
              variant="h5"
              sx={{
                marginBottom: 0,
                color: "#00A9AD",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              WARGA
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Panggilan Darurat/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Pilih Petugas/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Form Panggilan Darurat
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* halaman utama */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              textAlign: "center",
              background: "#EFEFEF",
              width: "80%",
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6">FORM PANGGILAN DARURAT</Typography>

            {/* Card informasi panggilan */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI PANGGILAN
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                      gap: "210px", // Mengatur jarak antar box
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ color: "#A0A1A4", mt: 1 }}
                      >
                        Jenis Panggilan
                      </Typography>

                      <Box
                        sx={{
                          display: "fluid",
                          justifyContent: "flex-start",
                          mt: 1,
                        }}
                      >
                        <Typography variant="body1" sx={{ color: "#A0A1A4" }}>
                          Petugas Yang Dipilih
                        </Typography>
                        <Typography variant="body1">
                          Richard Testnama
                        </Typography>
                        {/* diambil dari nama petugas */}
                        <Typography variant="body1" sx={{ color: "#A0A1A4" }}>
                          Petugas Keamanan
                        </Typography>
                        {/* diambil dari jenis petugas */}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="body1" color="#333333">
                        : Keamanan
                      </Typography>
                      {/* nantinya akan diambil dari jenis petugas */}

                      <Box
                        sx={{
                          display: "fluid",
                          justifyContent: "flex-start",
                          mt: 1,
                        }}
                      >
                        <Typography variant="body1" sx={{ mt: 4 }}>
                          Richard Testnama
                        </Typography>
                        {/* diambil dari nama petugas */}
                        <Typography variant="body1" sx={{ color: "#A0A1A4" }}>
                          Petugas Keamanan
                        </Typography>
                        {/* diambil dari jenis petugas */}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box height={50} />
              </Card>
            </Box>

            {/* card form panggilan */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  FORM PENGADUAN
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    ml: 1,
                    width: "95%",
                    textAlign: "left",
                  }}
                >
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Pilih Lokasi
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Pilih Lokasi"
                    size="small"
                    variant="outlined"
                    select
                  ></TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Deskripsi
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Deskripsi"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={3}
                  ></TextField>

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
                  onClick={() => Navigate("/Warga/Panggilan/Keamanan")}
                  sx={{ height: 38, color: "#00A9AD", fontWeight: "bold" }}
                >
                  BATAL
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPanggilan;
