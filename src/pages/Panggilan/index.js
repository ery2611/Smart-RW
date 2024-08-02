// Panggilan
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
import { useNavigate } from "react-router";
import PieChartComponent from "../../components/Chart/Index"; // Update import path

const data = [
  // data array

  {
    id: 1,
    warga: "Khoirul Mustaan",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Keamanan",
    status_pemanggilan: "TERIMA",
  },
  {
    id: 2,
    warga: "Yan Azhari",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Bencana",
    status_pemanggilan: "TOLAK",
  },
  {
    id: 3,
    warga: "Deddy Sunarya",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Keamanan",
    status_pemanggilan: "TERIMA",
  },
  {
    id: 4,
    warga: "Daffa Syarif",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Kesehatan",
    status_pemanggilan: "TERIMA",
  },
  {
    id: 5,
    warga: "Syahri Ramadhan",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Keamanan",
    status_pemanggilan: "TOLAK",
  },
  {
    id: 6,
    warga: "farrel savero",
    informasi_pemanggilan: "06/01/2024",
    jam_pemanggilan: "07:00",
    jenis_panggilan: "Bencana",
    status_pemanggilan: "TERIMA",
  },
];

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "TERIMA":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "TOLAK":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const Panggilan = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const Navigate = useNavigate("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selectedDate and searchText
  };

  const handleAdd = (params) => {
    Navigate(params);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate data for PieChart
  const calculatePieChartData = () => {
    const counts = data.reduce((acc, item) => {
      acc[item.jenis_panggilan.toUpperCase()] =
        (acc[item.jenis_panggilan.toUpperCase()] || 0) + 1;
      return acc;
    }, {});

    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

    const labels = Object.keys(counts);
    const values = Object.values(counts).map((count) =>
      ((count / total) * 100).toFixed(2)
    );

    return { labels, values };
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
            Laporan Hasil Deteksi
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
            Navigate("/Panggilan/Riwayat");
          }}
          sx={{
            backgroundColor: "#00A9AD",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
          style={{ marginLeft: "auto" }}
        >
          RIWAYAT
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
                WARGA
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                INFORMASI PEMANGGILAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JENIS PANGGILAN
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
                    <span>{truncateText(row.warga, 20)}</span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{truncateText(row.informasi_pemanggilan, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.jam_pemanggilan, 20)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>{truncateText(row.jenis_panggilan, 20)}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status_pemanggilan}
                    sx={getPeringatanColor(row.status_pemanggilan)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example" onClick={()=> Navigate('/Panggilan/Detail')}>
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
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Panggilan;