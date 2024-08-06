// OGS.js
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
import AddIcon from "@mui/icons-material/Add";
import Datepicker from "../../../components/CommandComponents/Datepicker/Index";
import { useNavigate } from "react-router";
import PieChartComponent from "../../../components/CommandComponents/Chart/Index"; // Update import path
import Bar from '../../../components/CommandComponents/Navbar'

const data = [
  // data array
  {
    id: 1,
    nama_objek: "Yan Azhari",
    jenis_objek: "Warga",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Sedang jogging pagi",
    status_objek: "MENCURIGAKAN",
  },
  {
    id: 2,
    nama_objek: "Khoirul Mustaan",
    jenis_objek: "Tamu",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Ingin berkunjung ke rumah bapak",
    status_objek: "TIDAK MENCURIGAKAN",
  },
  {
    id: 3,
    nama_objek: "Deddy Sunarya",
    jenis_objek: "Tidak Dikenal",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Tidak jelas tujuannya apa",
    status_objek: "MENCURIGAKAN",
  },
  {
    id: 4,
    nama_objek: "Cindy Riyanti",
    jenis_objek: "Warga",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Ingin berkunjung ke rumah bapak",
    status_objek: "TIDAK MENCURIGAKAN",
  },
  {
    id: 5,
    nama_objek: "Syahri Ramadhan",
    jenis_objek: "Pengunjung",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Ingin sholat di Masjid Baitul Jihad",
    status_objek: "TIDAK MENCURIGAKAN",
  },
  {
    id: 6,
    nama_objek: "farrel savero",
    jenis_objek: "Tamu",
    informasi_masuk: "06/01/2024",
    jam_masuk: "08:00",
    informasi_keluar: "06/01/2024",
    jam_keluar: "08:00",
    keterangan: "Prakiraan cuaca",
    status_objek: "TIDAK MENCURIGAKAN",
  },
];

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "TIDAK MENCURIGAKAN":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "MENCURIGAKAN":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const OGS = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selectedDate and searchText
  };

  const handleAdd = (params) => {
    navigate(params);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate data for PieChart
  const calculatePieChartData = () => {
    const chartTitle = "DATA ONE GATE SYSTEM"; // Set title here

    // Hitung jumlah setiap jenis objek
    const counts = data.reduce((acc, item) => {
      acc[item.jenis_objek.toUpperCase()] =
        (acc[item.jenis_objek.toUpperCase()] || 0) + 1;
      return acc;
    }, {});

    // Hitung total untuk mendapatkan persentase
    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

    // Siapkan label dan nilai dengan persentase
    const labels = Object.keys(counts);
    const values = Object.values(counts).map((count) =>
      ((count / total) * 100).toFixed(2)
    );

    // Return data dengan title
    return { labels, values, title: chartTitle };
  };

  // Get current data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div>
      <Bar />
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
            One Gate System
          </Typography>
        </Stack>
      </Stack>
      <Container component={Paper} sx={{ marginBottom: 2 }}>
        <Box sx={{ marginLeft: "0%" }}>
          <PieChartComponent data={calculatePieChartData()} />
        </Box>
      </Container>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        sx={{ marginBottom: 2 }}
      >
        <Stack>
          <Typography variant="h9" sx={{ color: "black" }}>
            Tanggal Masuk
          </Typography>
          <Datepicker />
        </Stack>
        <Stack>
          <Typography variant="h9" sx={{ color: "black" }}>
            Tanggal Keluar
          </Typography>
          <Datepicker />
        </Stack>

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
          color="primary"
          onClick={() => {
            navigate("/Ogs/Tambah");
          }}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#00A9AD",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
          style={{ marginLeft: "auto" }}
        >
          TAMBAH OBJEK
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
                OBJEK
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                INFORMASI MASUK
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                INFORMASI KELUAR
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                KETERANGAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                STATUS OBJEK
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
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{truncateText(row.nama_objek, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.jenis_objek, 20)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{truncateText(row.informasi_masuk, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.jam_masuk, 20)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{truncateText(row.informasi_keluar, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.jam_keluar, 20)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>{truncateText(row.keterangan, 20)}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status_objek}
                    sx={getPeringatanColor(row.status_objek)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example" onClick={()=> navigate('/Ogs/Detail')}>
                    <VisibilityOutlinedIcon sx={{ color: "#00A9AD" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: 2, paddingBottom:4 }}>
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

export default OGS;