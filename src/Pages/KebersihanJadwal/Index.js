//EWS
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
  Container,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InformasiJadwalToday from "../../Components/cardJadwalToday/Index";
import Calender from "../../Components/Calender/Index";

const data = [
  // Your data array
  {
    id: 1,
    nama_petugas: "Yan Azhari",
    jam_mulai: "08:30",
    jam_selesai: "09:30",
    shift: "PAGI",
  },
  {
    id: 2,
    nama_petugas: "Khoirul Mustaan",
    jam_mulai: "13:00",
    jam_selesai: "14:00",
    shift: "SIANG",
  },
  {
    id: 3,
    nama_petugas: "Deddy Sunarya",
    jam_mulai: "10:00",
    jam_selesai: "11:00",
    shift: "PAGI",
  },
  {
    id: 4,
    nama_petugas: "Syahri Ramadhan",
    jam_mulai: "14:00",
    jam_selesai: "15:00",
    shift: "SIANG",
  },
  {
    id: 5,
    nama_petugas: "Daffa Syarif",
    jam_mulai: "10:00",
    jam_selesai: "11:00",
    shift: "PAGI",
  },
  {
    id: 6,
    nama_petugas: "Farrel",
    jam_mulai: "05:00",
    jam_selesai: "05:00",
    shift: "PAGI",
  },
  {
    id: 7,
    nama_petugas: "Savero",
    jam_mulai: "05:00",
    jam_selesai: "05:00",
    shift: "PAGI",
  },
];

const getPeringatanColor = (shift) => {
  switch (shift) {
    case "PAGI":
      return {
        backgroundColor: "#AEF4F0",
        color: "#74D6D0",
        fontWeight: "bold",
      };
    case "SIANG":
      return {
        backgroundColor: "#D6FDFB",
        color: "#00F0FF",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const now = new Date();

// Format tanggal
const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
const tahun = now.getFullYear(); // Tahun

// Menyusun string tanggal
const formatTanggal = `${hari}, ${tanggal} / ${bulan} / ${tahun}`;

const truncateText = (text, maxLength) => {
  if (!text) {
    return "";
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + `<br>`;
};

const KebersihanJadwal = () => {
  const [searchDate, setSearchDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Jadwal
          </Typography>
        </Stack>
        <Container sx={{ marginBottom: 2 }}>
          <Box sx={{ marginLeft: "0%" }}>
            <Calender />
          </Box>
        </Container>
        <Container sx={{ marginBottom: 2 }}>
          <Box sx={{ marginLeft: "0%" }}>
            <Typography fontSize={16} textAlign={"center"} fontWeight={"bold"}>
              JADWAL PETUGAS KEBERSIHAN
            </Typography>
          </Box>
        </Container>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        sx={{ marginBottom: 2 }}
      >
        <Stack>
          <Typography variant="h9" sx={{ color: "black" }}>
            Jam Mulai
          </Typography>
          <TextField
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            size="small"
            type="time"
            sx={{ width: 179, height: 38 }}
          />
        </Stack>
        <Stack>
          <Typography variant="h9" sx={{ color: "black" }}>
            Jam Selesai
          </Typography>
          <TextField
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            size="small"
            type="time"
            sx={{ width: 179, height: 38 }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ color: "#A1A5B7", fontFamily: "montserrat" }}
        >
          <Typography> Showing</Typography>
          <Typography fontWeight="bold"> {currentData.length} Item</Typography>
          <Typography> from</Typography>
          <Typography fontWeight="bold"> {data.length} Result </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          size="small"
          style={{ marginLeft: "auto" }}
          sx={{
            backgroundColor: "#00A9AD",
            marginLeft: "auto",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
        >
          BUAT JADWAL
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
                NAMA &<br /> PETUGAS
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JAM <br />
                MULAI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JAM <br /> SELESAI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                SHIFT
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
                <TableCell>{row.nama_petugas}</TableCell>
                <TableCell>{truncateText(row.jam_mulai, 40)}</TableCell>
                <TableCell>{truncateText(row.jam_selesai, 200)}</TableCell>
                <TableCell>
                  <Chip
                    label={truncateText(row.shift, 40)}
                    sx={getPeringatanColor(row.shift)}
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
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#00A9AD", // Background color for selected page
              color: "#fff", // Text color for selected page
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default KebersihanJadwal;
