import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@mui/material";

import StatusCard from "../../../components/ComponentKeamananMobile/OGS/chart";
import VehicleList from "../../../components/ComponentKeamananMobile/OGS/listkendaraan";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "@mui/icons-material/FilterAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = React.useState("Kendaraan Masuk");
  const [searchDate, setSearchDate] = useState("");
  const [value, setValue] = useState(""); // State untuk nilai yang dipilih

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const data = [
    { id: 1, kendaraan: "Mobil", plat: "B 1234 SE", status: "Warga" },
    { id: 2, kendaraan: "Motor", plat: "B 1234 SE", status: "Tamu" },
    { id: 3, kendaraan: "Mobil", plat: "B 1234 SE", status: "Warga" },
  ];

  return (
    <Box>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          paddingBottom: 2,
        }}
      >
        {/* BOX ATAS SAMPE BAWAH */}
        <Box
          sx={{
            display: "fluid",
            justifyContent: "flex-start",
            marginBottom: 1,
          }}
        >
          {/* BOX ATAS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Filter di Pojok Kiri */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Filter
                sx={{ color: "#00A9AD", height: "26px", width: "26px" }}
              />
            </Box>

            {/* Dropdown di Tengah */}

            <Box
              sx={{
                flex: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                size="small"
                select
                value={value} // Kontrol nilai
                onChange={handleChange}
                label="Kendaraan Masuk"
                sx={{
                  width: "150px",
                  height: "30px",
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF", // Warna latar belakang putih
                  },
                  "& .MuiInputLabel-root": {
                    color: "#AEAEAE", // Warna label abu-abu
                    fontSize: "0.75rem", // Ukuran font label
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px", // Jika ingin sudut membulat
                  },
                  "& .MuiSelect-icon": {
                    color: "#00A9AD", // Warna panah dropdown
                  },
                }}
                InputLabelProps={{
                  shrink: value !== "", // Hilangkan label jika ada nilai yang dipilih
                }}
              >
                <MenuItem value="" disabled>
                  Pilih Kendaraan
                </MenuItem>
                <MenuItem value="masuk">Kendaraan Masuk</MenuItem>
                <MenuItem value="keluar">Kendaraan Keluar</MenuItem>
              </TextField>
            </Box>

            {/* Tanggal di Pojok Kanan */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                size="small"
                type="date"
                sx={{
                  width: 120,
                  height: "30px",
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF", // Warna latar belakang putih
                  },
                  "& .MuiInputLabel-root": {
                    color: "#AEAEAE", // Warna label abu-abu
                    fontSize: "0.75rem", // Ukuran font label
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px", // Jika ingin sudut membulat
                  },
                  "& .MuiSelect-icon": {
                    color: "#00A9AD", // Warna panah dropdown
                  },
                }}
                InputLabelProps={{
                  shrink: value !== "", // Hilangkan label jika ada nilai yang dipilih
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              justifyContent: "flex-start",
              display: "flex",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            <Box>
              <StatusCard />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Filter di Pojok Kiri */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Filter
                sx={{ color: "#00A9AD", height: "26px", width: "26px" }}
              />
            </Box>

            {/* Dropdown di Tengah */}

            <Box
              sx={{
                flex: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                size="small"
                select
                value={value} // Kontrol nilai
                onChange={handleChange}
                label="Semua Kendaraan"
                sx={{
                  width: "150px",
                  height: "30px",
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF", // Warna latar belakang putih
                  },
                  "& .MuiInputLabel-root": {
                    color: "#AEAEAE", // Warna label abu-abu
                    fontSize: "0.75rem", // Ukuran font label
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px", // Jika ingin sudut membulat
                  },
                  "& .MuiSelect-icon": {
                    color: "#00A9AD", // Warna panah dropdown
                  },
                }}
                InputLabelProps={{
                  shrink: value !== "", // Hilangkan label jika ada nilai yang dipilih
                }}
              >
                <MenuItem value="" disabled>
                  Pilih Kendaraan
                </MenuItem>
                <MenuItem value="semua">Semua Kendaraan</MenuItem>
                <MenuItem value="mobil">Mobil</MenuItem>
                <MenuItem value="motor">Motor</MenuItem>
              </TextField>
            </Box>

            {/* Tanggal di Pojok Kanan */}
            <Box
              sx={{
                display: "flex",
                width: 120,
                height: "30px",
                border: "1px solid #E0E0E0", // Warna border
                backgroundColor: "#FFFFFF", // Warna latar belakang
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Cari"
                size="small"
                fullWidth // Atur lebar penuh
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#00A9AD" }} />{" "}
                      {/* Warna icon */}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF", // Warna latar belakang putih
                    padding: 0, // Hapus padding default
                  },
                  "& .MuiOutlinedInput-root": {
                    padding: 0, // Hapus padding untuk border dan input
                    "& fieldset": {
                      border: "none", // Hilangkan border pada input
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1rem", // Ukuran font
                    color: "#AEAEAE", // Warna teks placeholder
                  },
                  height: "30px",
                  "& .MuiInputBase-root": {
                    backgroundColor: "#FFFFFF", // Warna latar belakang putih
                  },
                  "& .MuiInputLabel-root": {
                    color: "#AEAEAE", // Warna label abu-abu
                    fontSize: "0.75rem", // Ukuran font label
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px", // Jika ingin sudut membulat
                  },
                  "& .MuiSelect-icon": {
                    color: "#00A9AD", // Warna panah dropdown
                  },
                }}
              />
            </Box>
          </Box>

          <TableContainer sx={{ marginTop: 4, backgroundColor: "transparent" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#A0A1A4",
                      borderBottom: "1px dotted #a6a6a6",
                    }}
                  >
                    NO
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#A0A1A4",
                      borderBottom: "1px dotted #a6a6a6",
                    }}
                  >
                    KENDARAAN
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#A0A1A4",
                      borderBottom: "1px dotted #a6a6a6",
                    }}
                  >
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell
                      align="left"
                      sx={{ borderBottom: "1px dotted #a6a6a6" }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ borderBottom: "1px dotted #a6a6a6" }}
                    >
                      <Typography variant="body1">{row.kendaraan}</Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#AEAEAE",
                        }}
                      >
                        {row.plat}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ borderBottom: "1px dotted #a6a6a6" }}
                    >
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
