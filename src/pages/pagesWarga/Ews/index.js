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
import AddIcon from "@mui/icons-material/Add";
import Datepicker from "../../../components/CommandComponents/Datepicker/Index";
import InformasiCuacaHariIni from "../../../components/WargaComponents/CardCuaca/index";
import Bar from '../../../components/WargaComponents/Navbar'

const data = [
  // Your data array
  {
    id: 1,
    cuaca: "Hujan",
    suhu: "23",
    tanggal: "23/12/2024",
    jam: "05:00",
    bencana_alam: "Banjir",
    lokasi_bencana: "Seluruh area Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 1",
  },
  {
    id: 2,
    cuaca: "Cerah",
    suhu: "36",
    tanggal: "16/12/2024",
    jam: "07:00",
    bencana_alam: "Kebakaran",
    lokasi_bencana: "Jl. Kemang Dahlia Raya Blok Z No. 12, RT 02 / RW 36",
    status_siaga: "SIAGA 2",
  },
  {
    id: 3,
    cuaca: "Hujan",
    suhu: "20",
    tanggal: "14/12/2024",
    jam: "05:00",
    bencana_alam: "Tanah Longsor",
    lokasi_bencana: "Jalan di depan RW 36 Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 4",
  },
  {
    id: 4,
    cuaca: "Hujan",
    suhu: "23",
    tanggal: "23/12/2024",
    jam: "05:00",
    bencana_alam: "Banjir",
    lokasi_bencana: "Seluruh area Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 4",
  },
  {
    id: 5,
    cuaca: "Hujan",
    suhu: "23",
    tanggal: "23/12/2024",
    jam: "05:00",
    bencana_alam: "Banjir",
    lokasi_bencana: "Seluruh area Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 1",
  },
  {
    id: 6,
    cuaca: "Hujan",
    suhu: "23",
    tanggal: "23/12/2024",
    jam: "05:00",
    bencana_alam: "Banjir",
    lokasi_bencana: "Seluruh area Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 1",
  },
  {
    id: 7,
    cuaca: "Hujan",
    suhu: "23",
    tanggal: "23/12/2024",
    jam: "05:00",
    bencana_alam: "Banjir",
    lokasi_bencana: "Seluruh area Kemang Pratama, Bekasi",
    status_siaga: "SIAGA 1",
  },
];

const getPeringatanColor = (status_siaga) => {
  switch (status_siaga) {
    case "SIAGA 1":
      return {
        backgroundColor: "#CDFBE0",
        color: "#16E502",
        fontWeight: "bold",
      };
    case "SIAGA 2":
      return {
        backgroundColor: "#FAF1C8",
        color: "#FED200",
        fontWeight: "bold",
      };
    case "SIAGA 3":
      return {
        backgroundColor: "#FDD399",
        color: "#FF9500",
        fontWeight: "bold",
      };
    case "SIAGA 4":
      return {
        backgroundColor: "#D29A9A",
        color: "#CE1305",
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
  return text.substring(0, maxLength) + `<br>`;
};

const WargaEWS = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchMonth, setSearchMonth] = useState("");

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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Early Warning System
          </Typography>
        </Stack>
        <Container sx={{ marginBottom: 2 }}>
          <Box sx={{ marginLeft: "0%" }}>
            <InformasiCuacaHariIni />
          </Box>
        </Container>
        <Typography variant="h9" sx={{ color: "black", fontWeight: "hin" }}>
          Bulan
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
         <TextField
          value={searchMonth}
          onChange={(e) => setSearchMonth(e.target.value)}
          size="small"
          type="month"
          sx={{ width: 179, height: 38 }}
        />

        <TextField
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Cari"
          size="small"
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
                CUACA & <br />
                SUHU
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TANGGAL &<br /> WAKTU
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                BENCANA <br />
                ALAM
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                LOKASI <br /> BENCANA
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
                    <span>{truncateText(row.cuaca, 40)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.suhu + "°C", 40)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{truncateText(row.bencana_alam, 40)}</TableCell>
                <TableCell>{truncateText(row.lokasi_bencana, 200)}</TableCell>
                <TableCell>
                  <Chip
                    label={truncateText(row.status_siaga, 40)}
                    sx={getPeringatanColor(row.status_siaga)}
                  />
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

export default WargaEWS;