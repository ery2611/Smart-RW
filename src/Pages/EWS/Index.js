import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const data = [
  {
    id: 1,
    judul_bencana: "Banjir Bandang",
    jenis_bencana: "Banjir",
    tanggal: "06/01/2024",
    jam: "08:00",
    parameter: "Prakiraan cuaca",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "WASPADA",
  },
  {
    id: 2,
    judul_bencana: "Kebakaran Rumah",
    jenis_bencana: "Kebarakan",
    tanggal: "06/01/2024",
    jam: "08:00",
    parameter: "Sumber Api",
    lokasi: "Kemang Dahlia Raya Blok Z No.12",
    peringatan: "SIAGA",
  },
  {
    id: 3,
    judul_bencana: "Tanah Longsor",
    jenis_bencana: "Tanah Longsor",
    tanggal: "06/01/2024",
    jam: "08:00",
    parameter: "Curah Hujan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AWAS",
  },
  {
    id: 4,
    judul_bencana: "Banjir Bandang",
    jenis_bencana: "Banjir",
    tanggal: "06/01/2024",
    jam: "08:00",
    parameter: "Prakiraan cuaca",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "WASPADA",
  },
  {
    id: 5,
    judul_bencana: "Banjir Bandang",
    jenis_bencana: "Banjir",
    tanggal: "06/01/2024",
    jam: "08:00",
    parameter: "Prakiraan cuaca",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "WASPADA",
  },
];

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "WASPADA":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "SIAGA":
      return {
        backgroundColor: "#FFF6CB",
        color: "#FFE152",
        fontWeight: "bold",
      };
    case "AWAS":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const EWS = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Lakukan pencarian atau filter data berdasarkan tanggal jika perlu
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan pencarian berdasarkan selectedDate dan searchText
  };

  const handleAdd = () => {
    // Tambahkan fungsi untuk menambah data baru
  };

  return (
    <div>
      <Typography variant="h5" sx={{ marginBottom: 2, color: "#00A9AD" }}>
        EARLY WARNING SYSTEM
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="dd/MM/yyyy"
            label="Tanggal"
          />
        </LocalizationProvider>
        <TextField
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Cari"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          CARI
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          startIcon={<AddIcon />}
          style={{ marginLeft: 435 }}
        >
          TAMBAH
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                NO
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                BENCANA
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TANGGAL & WAKTU
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                PARAMETER PEMANTAUAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                LOKASI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                PERINGATAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                AKSI
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  marginBottom: 2,
                  display: "table-row",
                  borderBottom: "none",
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.judul_bencana}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {row.jenis_bencana}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{row.parameter}</TableCell>
                <TableCell>{row.lokasi}</TableCell>
                <TableCell>
                  <Chip
                    label={row.peringatan}
                    sx={getPeringatanColor(row.peringatan)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example">
                    <VisibilityOutlinedIcon sx={{ color: "#00A9AD" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EWS;
