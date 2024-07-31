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
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Datepicker from "../../components/Datepicker/Index";
import { useNavigate } from "react-router-dom";



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
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan pencarian berdasarkan selectedDate dan searchText
  };

  const handleAdd = () => {
    // Tambahkan fungsi untuk menambah data baru
  };

  const Navigate = useNavigate();
  return (
    <div>
      <Stack direction="column">
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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Early Warning System
          </Typography>
        </Stack>
        <Typography variant="h9" sx={{ color: "black" }}>
          Tanggal
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Datepicker />

        <TextField
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Cari"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{ width: 180, height: 38 }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ backgroundColor: "#00A9AD", height: 38 }}
        >
          CARI
        </Button>
        <Button
          variant="contained"
          onClick={() => Navigate("/Ews/Tambah")}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#00A9AD",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
          style={{ marginLeft: "auto" }}
        >
          TAMBAH
        </Button>
      </Stack>
      <TableContainer component={Paper} sx={{marginTop:3}}>
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