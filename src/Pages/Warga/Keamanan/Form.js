import { Box, Button, Card, IconButton, Input, Stack, TextField, Typography } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";

const FormKeamananWarga = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
          setFile(URL.createObjectURL(selectedFile));
        }
      };
    
    return(
        <Box>
        <Box sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",}}>


             {/* Text pojok kiri atas */}
        <Box height="70px">
          <Stack direction="column" textAlign="left">
            <Typography
              variant="h5"
              sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18, fontWeight:'600' }}
            >
              WARGA
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Keamanan/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Form Pengaduan Keamanan Warga
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* halam utama */}
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
            <Typography variant="h6">FORM PENGADUAN KEAMANAN WARGA</Typography>
            {/* INFORMASI PENGADUAN */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
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
                  <Typography mt={1} variant="body1" >
                    Nama
                  </Typography>
                  <TextField 
                    sx={{ width: "100%" }}
                    placeholder="Masukan Nama"
                    size="small"
                    variant="outlined"></TextField>
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Tanggal Pengaduan</Typography>
                      <TextField
                        sx={{ width: "95%" }}
                        size="small"
                        variant="outlined"
                        type="date"
                      ></TextField>
                    </Box>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Waktu Pengaduan</Typography>
                      <TextField
                        sx={{ width: "100%", color: "#00A9AD" }}
                        size="small"
                        variant="outlined"
                        type="time"
                      >
                        {" "}
                      </TextField>
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Judul Pengaduan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Judul"
                    size="small"
                    variant="outlined"
                  ></TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Judul Pengaduan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Alasan Pengaduan"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={3}
                  ></TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Media
                  </Typography>
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

            {/* Button */}
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
                  sx={{ height: 38, background: "#00A9AD", mr: 3, fontWeight:'bold' }}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: 38, color: "#00A9AD", fontWeight:'bold'}}
                >
                  BATAL
                </Button>
              </Box>
            </Box>

          </Box>
         </Box>
        </Box>
    </Box>
    )
}


export default FormKeamananWarga