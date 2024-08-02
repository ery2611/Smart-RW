import {
  Box,
  Card,
  TextField,
  Typography,
  Stack,
  Button,
  Input,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const TambahOGS = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = () => {
    //
  };

  const handleCancel = (params) => {
    //
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Box sx={{}}>
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
              sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
            >
              COMMAND CENTER
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                One Gate System/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Form OGS
              </Typography>
            </Stack>
                  
          </Stack>
        </Box>

        {/* subBencana = ambil keterangan dari informasi bencana */}
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
            <Typography variant="h6">FORM OGS</Typography>
            {/* informasi cuaca */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI OBJEK
                </Typography>

                {/* cuaca dan suhu agar bisa bersebelahan */}
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Box sx={{ ml: 1, width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">NAMA</Typography>
                    <TextField
                      sx={{ width: "95%" }}
                      size="small"
                      variant="outlined"
                      placeholder="Masukan Nama"
                    ></TextField>
                  </Box>
                  <Box sx={{ mr: 1, width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">Tipe Objek</Typography>
                    <TextField
                      sx={{ width: "95%" }}
                      placeholder="Masukan Tipe Objek"
                      size="small"
                      variant="outlined"
                      select
                    ></TextField>
                  </Box>
                </Box>

                {/* status & aktivitas objek */}
                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Typography variant="body1">Status Objek</Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan status Objek"
                    variant="outlined"
                    size="small"
                  ></TextField>
                  <Typography variant="body1">Aktivitas Objek</Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Aktivitas Objek"
                    variant="outlined"
                    multiline
                    rows={3}
                  ></TextField>
                </Box>

                <Box marginTop="10px" />
              </Card>
            </Box>

            {/* keterangan objek */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                height: "100%",
                overflowY: "auto",
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  KETERANGAN OBJEK
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    ml: 1,
                    width: "95%",
                    textAlign: "left",
                  }}
                >
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Tanggal Masuk</Typography>
                      <TextField
                        sx={{ width: "95%" }}
                        size="small"
                        variant="outlined"
                        type="date"
                      ></TextField>
                    </Box>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Waktu Masuk</Typography>
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
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Tanggal Keluar</Typography>
                      <TextField
                        sx={{ width: "95%" }}
                        size="small"
                        variant="outlined"
                        type="date"
                      ></TextField>
                    </Box>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Waktu Keluar</Typography>
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
                    Tujuan Objek
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Tujuan Objek"
                    size="small"
                    variant="outlined"
                  ></TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Keterangan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan Keterangan"
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
                        border: '2px dashed #ccc',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: '1em',
                        position: 'relative',
                        height: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        cursor: 'pointer',
                    }}
                    component='label'
                  >
                    <Input
                      type='file'
                      accept="image/*,video/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <IconButton
                      sx={{color:'#00A9AD'}}
                    >
                      <FileUploadIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                      Upload foto/video
                    </Typography>
                    {file && (
        <Box
          component="img"
          sx={{
            position: 'absolute',
            width: '30%',
            height: '80%',
            objectFit: 'cover',
            borderRadius: '4px',
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
            {/* button submit dan batal */}
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
                  sx={{ height: 38, background: "#00A9AD", mr: 3 }}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: 38, color: "#00A9AD" }}
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

export default TambahOGS;
