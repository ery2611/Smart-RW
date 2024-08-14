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
  Box,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";


const data = [
  // Your data array
  {
    id: 1,
    judul_bencana: "Iyan Azhari",
    tanggal: "07:30",
    jam: "08:00",
    peringatan: "DITERIMA",
  },
  {
    id: 2,
    judul_bencana: "Khoirul Mustan",
    tanggal: "08:30",
    jam: "09:00",
    peringatan: "BELUM DITERIMA",
  },
  {
    id: 3,
    judul_bencana: "Wasis Utomo",
    tanggal: "07:30",
    jam: "08:00",
    peringatan: "DITOLAK",
  },
  {
    id: 4,
    judul_bencana: "Ilham Yusuf",
    tanggal: "07:30",
    jam: "08:00",
    peringatan: "BELUM DITERIMA",
  },
  {
    id: 5,
    judul_bencana: "Hakam Gantenk",
    tanggal: "07:30",
    jam: "08:00",
    peringatan: "DITERIMA",
  },
  {
    id: 6,
    judul_bencana: "Rafif Wibu",
    tanggal: "07:30",
    jam: "08:00",
    peringatan: "DITOLAK",
  },
];

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "DITERIMA":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "BELUM DITERIMA":
      return {
        backgroundColor: "#FFF6CB",
        color: "#FFE152",
        fontWeight: "bold",
      };
    case "DITOLAK":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const truncateText = (text, maxLength) => {
  if (!text) {
    return "";
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const Laporanbulanan = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan pencarian berdasarkan selectedDate dan searchText
  };

  const handleAdd = () => {
    // Tambahkan fungsi untuk menambah data baru
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Get current data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
       <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h9" sx={{ color: "black", fontWeight: "bold",mb: 5, }}>
         DAFTAR LAPORAN BULANAN KEBERSIHAN
      </Typography>
    </Box>
      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        sx={{ marginBottom: 5,}}
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
                PETUGAS KEBERSIHAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JAM MULAI & SELESAI
              </TableCell>
              
              
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                STATUS LAPORAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                REVIEW
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row) => (
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
                    <span>{truncateText(row.judul_bencana, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Chip
                    label={truncateText(row.peringatan, 20)}
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
      <Stack direction="row" justifyContent="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#00A9AD', // Background color for selected page
              color: '#fff', // Text color for selected page
            
                    }
                }}
         
         
        />
      </Stack>
    </div>
  );
};

export default Laporanbulanan;