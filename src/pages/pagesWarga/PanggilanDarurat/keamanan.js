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
  Chip,
  Pagination,
  Checkbox,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Bar from "../../../components/WargaComponents/Navbar";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    judul_bencana: "Yuni",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: 2,
    judul_bencana: "Firdaus",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Kemang Dahlia Raya Blok Z No.12",
    peringatan: "TIDAK AKTIF",
  },
  {
    id: 3,
    judul_bencana: "Yusuf",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: 4,
    judul_bencana: "Wasis Utomo",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "TIDAK AKTIF",
  },
  {
    id: 5,
    judul_bencana: "Bintang",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: 6,
    judul_bencana: "Hakam",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "TIDAK AKTIF",
  },
];

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "AKTIF":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "TIDAK AKTIF":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const Pilihpetugas = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const itemsPerPage = 5;
  const Navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan pencarian berdasarkan searchText
  };

  const handleAdd = () => {
    // Tambahkan fungsi untuk menambah data baru
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleCheckboxChange = (id) => {
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // Get current data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Bar />
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Pilih Petugas
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        sx={{ marginBottom: 5, ml: 5 }}
      >
        <TextField
          value={searchText}
          onChange={handleSearchChange}
          size={"small"}
          placeholder="Cari"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{ width: 250, height: 22 }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ backgroundColor: "#00A9AD", height: 38, mt: "20px !important" }}
        >
          CARI
        </Button>

        <Stack
          direction="row"
          justifyContent="end"
          spacing={2}
          sx={{ width: "100%" }}
        >
          {selectedCheckboxes.length > 0 && (
            <Typography sx={{ fontSize: 18 }}>
              {selectedCheckboxes.length} petugas
            </Typography>
          )}
          {selectedCheckboxes.length > 0 && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => Navigate("/Warga/Panggilan/Keamanan/Form")}
              sx={{
                backgroundColor: "#00A9AD",
                height: 38,
                display: "flex",
                alignItems: "center",
                mr: "25px !important",
                ml: "auto",
              }}
            >
              PANGGIL
            </Button>
          )}
        </Stack>
      </Stack>
      <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
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
                LOKASI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                STATUS
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCheckboxes.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.judul_bencana}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {row.jenis_bencana}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>{row.lokasi}</TableCell>
                <TableCell>
                  <Chip
                    label={row.peringatan}
                    sx={getPeringatanColor(row.peringatan)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example"></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#00A9AD",
              color: "#fff",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default Pilihpetugas;
