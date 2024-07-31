import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "./Components/NavbarRafif";
import { useState } from "react";

const SmartCity = () => {
  const [cardBencana, setCardBencana] = useState("");

  const bencana = [
    {
      value: "Banjir",
      label: "Banjir",
    },
    {
      value: "Kebakaran",
      label: "Kebakaran",
    },
    {
      value: "Tanah Longsor",
      label: "Tanah Longsor",
    },
  ];

  const handleChange = (e) => {
    setCardBencana(e.target.value);
  };

  return (
    <Box sx={{ background: "#EFEFEF" }}>
      <Box
        sx={{
          border: "2px solid black",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Text pojok kiri atas */}
        <Box sx={{ m: 2, display: "flex", height: "3%", width: "100%" }}>
          <Typography fontWeight="bold" color="#00A9AD">
            {" "}
            EARLY WARNING SYSTEM
          </Typography>
        </Box>

        {/* subBencana = ambil keterangan dari informasi bencana */}
        <Box sx={{ height: "100%", overflowY: "auto" }}>
          <Typography>FORM PERINGATAN DINI</Typography>
          {/* informasi cuaca */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Card sx={{ width: "65%" }}>
              <Typography marginTop="10px" variant="body1" fontWeight="bold">
                INFORMASI CUACA
              </Typography>

              {/* cuaca dan suhu agar bisa bersebelahan */}
              <Box sx={{ display: "flex", mt: 2 }}>
                <Box sx={{ ml: 1, width: "50%", textAlign: "left" }}>
                  <Typography variant="body1">Cuaca</Typography>
                  <TextField
                    sx={{ width: "95%" }}
                    label="pilih cuaca"
                    size="small"
                    variant="outlined"
                    select
                  ></TextField>
                </Box>
                <Box sx={{ mr: 1, width: "50%", textAlign: "left" }}>
                  <Typography variant="body1">Suhu</Typography>
                  <TextField
                    sx={{ width: "95%" }}
                    label="Masukan suhu"
                    size="small"
                    variant="outlined"
                  >
                    {" "}
                  </TextField>
                </Box>
              </Box>

              {/* keterangan cuaca */}
              <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                <Typography variant="body1">Keterangan cuaca</Typography>
                <TextField
                  sx={{ width: "100%" }}
                  label="Masukan keterangan cuaca"
                  variant="outlined"
                  multiline
                  rows={3}
                ></TextField>
              </Box>

              <Box marginTop="10px" />
            </Card>
          </Box>

          {/* informasi bencana */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Card sx={{ width: "65%" }}>
              <Typography marginTop="10px" variant="body1" fontWeight="bold">
                INFORMASI BENCANA
              </Typography>

              <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                <Typography sx={{ mt: 1 }} variant="body1">
                  Judul Bencana
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  label="Masukan judul bencana"
                  size="small"
                  variant="outlined"
                ></TextField>

                <Typography sx={{ mt: 1 }} variant="body1">
                  Jenis Bencana
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  label="Pilih Jenis Bencana"
                  size="small"
                  variant="outlined"
                  value={cardBencana}
                  onChange={handleChange}
                  select
                >
                  {bencana.map((opsi) => (
                    <MenuItem key={opsi.value} value={opsi.value}>
                      {opsi.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Typography sx={{ mt: 1 }} variant="body1">
                  Peringatan
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  label="Pilih Peringatan"
                  size="small"
                  variant="outlined"
                  select
                ></TextField>

                <Box sx={{ display: "flex", mt: 1 }}>
                  <Box sx={{ width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">Tanggal</Typography>
                    <TextField
                      sx={{ width: "95%" }}
                      size="small"
                      variant="outlined"
                      type="date"
                    ></TextField>
                  </Box>
                  <Box sx={{ width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">Waktu</Typography>
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
                  Lokasi Bencana
                </Typography>
                <TextField
                  sx={{ width: "100%" }}
                  label="Masukan Lokasi Bencana"
                  size="small"
                  variant="outlined"
                ></TextField>

                <Box marginTop="10px" />
              </Box>
            </Card>
          </Box>
          {/* informasi 'subBencana' */}
          {(cardBencana === "Kebakaran" && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Card sx={{ width: "65%" }}>
                <Typography marginTop="10px" variant="body1" fontWeight="bold">
                  INFORMASI KEBAKARAN
                </Typography>

                <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Panas Api</Typography>
                      <TextField
                        sx={{ width: "95%" }}
                        label="Masukan Panas Api"
                        size="small"
                        variant="outlined"
                      ></TextField>
                    </Box>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Status Api</Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        select
                        label="Masukan Status Api"
                        size="small"
                        variant="outlined"
                      ></TextField>
                    </Box>
                  </Box>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Status Sianga
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Status Siaga"
                    size="small"
                    variant="outlined"
                    select
                  ></TextField>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Parameter Penentuan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Parameter Penentuan"
                    size="small"
                    variant="outlined"
                  ></TextField>

                  <Box marginTop="10px" />
                </Box>
              </Card>
            </Box>
          )) ||
            (cardBencana === "Banjir" && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Card sx={{ width: "65%" }}>
                  <Typography
                    marginTop="10px"
                    variant="body1"
                    fontWeight="bold"
                  >
                    INFORMASI BANJIR
                  </Typography>

                  <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                    <Box sx={{ display: "flex", mt: 1 }}>
                      <Box sx={{ width: "50%", textAlign: "left" }}>
                        <Typography variant="body1">Tinggi Air</Typography>
                        <TextField
                          sx={{ width: "95%" }}
                          label="Masukan Tinggi Air"
                          size="small"
                          variant="outlined"
                        ></TextField>
                      </Box>
                      <Box sx={{ width: "50%", textAlign: "left" }}>
                        <Typography variant="body1">Curah Hujan</Typography>
                        <TextField
                          sx={{ width: "100%", color: "#00A9AD" }}
                          label="Masukan Curah Hujan"
                          size="small"
                          variant="outlined"
                        >
                          {" "}
                        </TextField>
                      </Box>
                    </Box>

                    <Typography sx={{ mt: 1 }} variant="body1">
                      Status Sianga
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Status Siaga"
                      size="small"
                      variant="outlined"
                      select
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Parameter Penentuan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Parameter Penentuan"
                      size="small"
                      variant="outlined"
                    ></TextField>

                    <Box marginTop="10px" />
                  </Box>
                </Card>
              </Box>
            )) ||
            (cardBencana === "Tanah Longsor" && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Card sx={{ width: "65%" }}>
                  <Typography
                    marginTop="10px"
                    variant="body1"
                    fontWeight="bold"
                  >
                    INFORMASI TANAH LONGSOR
                  </Typography>

                  <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Status Perbaikan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Status Perbaikan"
                      size="small"
                      variant="outlined"
                      select
                    ></TextField>

                    <Typography sx={{ mt: 1 }} variant="body1">
                      Status Sianga
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Status Siaga"
                      size="small"
                      variant="outlined"
                      select
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Parameter Penentuan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Parameter Penentuan"
                      size="small"
                      variant="outlined"
                    ></TextField>

                    <Box marginTop="10px" />
                  </Box>
                </Card>
              </Box>
            ))}
          {/* keterangan 'subBencana' */}
          {cardBencana && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Card sx={{ width: "65%" }}>
                <Typography marginTop="10px" variant="body1" fontWeight="bold">
                  KETERANGAN BENCANA{" "}
                </Typography>

                <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Deskripsi Kondisi
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Deskripsi kondisi"
                    size="small"
                    variant="outlined"
                    select
                  ></TextField>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Peringatan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Peringatan"
                    size="small"
                    variant="outlined"
                  ></TextField>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Tindakan yang perlu diambil
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Tindakan"
                    size="small"
                    variant="outlined"
                  ></TextField>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Penyebab {cardBencana}
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Penyebab"
                    size="small"
                    variant="outlined"
                  ></TextField>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Keterangan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Keterangan"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={3}
                  ></TextField>
                </Box>

                <Box marginTop="10px" />
              </Card>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SmartCity;
