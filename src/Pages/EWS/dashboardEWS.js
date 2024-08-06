
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
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";



const EWS = ({dataList}) => {

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
  
  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const data = dataList;


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

  const navigate = useNavigate();


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
        <Typography variant="h9" sx={{ color: "black", fontWeight: "hin" }}>
          Tanggal
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
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
          onClick={handleAdd}
          startIcon={<AddIcon />}
          style={{ marginLeft: "auto" }}
          sx={{
            backgroundColor: "#00A9AD",
            marginLeft: "auto",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
        >
          TAMBAH
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
                    <span>{truncateText(row.bencana, 20)}</span>
                    <span style={{ color: "#A1A5B7" }}>
                      {truncateText(row.jenis_bencana, 20)}
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{truncateText(row.parameter, 20)}</TableCell>
                <TableCell>{truncateText(row.lokasi, 20)}</TableCell>
                <TableCell>
                  <Chip
                    label={truncateText(row.peringatan, 20)}
                    sx={getPeringatanColor(row.peringatan)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example" onClick={()=> navigate(`/detail/${row.id}`)}>
                    <VisibilityOutlinedIcon sx={{ color: "#00A9AD" }}  />
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

export default EWS;
