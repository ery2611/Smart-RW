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
  Button,
  Stack,
  Typography,
  Chip,
  Pagination,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

    const data = [
        // Your data array
        {
          id: 1,
          nama: "Kautsar Hakam",
          tanggal: "23/12/2024",
          jam_masuk: "05:00",
          jam_keluar: "17:00",
          kategori: "Warga",
          status: "MENCURIGAKAN",
        },
        {
          id: 2,
          nama: "Muhammad Rifaldo",
          tanggal: "23/17/2024",
          jam_masuk: "08:00",
          jam_keluar: "17:00",
          kategori: "Pengunjung",
          status: "TIDAK MENCURIGAKAN",
        },
        {
          id: 3,
          nama: "Rafif Muhammad Faiz",
          tanggal: "01/07/2024",
          jam_masuk: "08:00",
          jam_keluar: "17:00",
          kategori: "Pengunjung",
          status: "MENCURIGAKAN",
        },
        {
          id: 4,
          nama: "Farrel Savero Suta",
          tanggal: "23/08/2024",
          jam_masuk: "12:00",
          jam_keluar: "13:00",
          kategori: "Tidak Dikenal",
          status: "MENCURIGAKAN",
        },
        {
          id: 5,
          nama: "bintang Fathurahman",
          tanggal: "02/04/2024",
          jam_masuk: "00:00",
          jam_keluar: "23:59",
          kategori: "Warga",
          status: "TIDAK MENCURIGAKAN",
        },
        {
          id: 6,
          nama: "Muhammad Parsya",
          tanggal: "02/04/2024",
          jam_masuk: "23:00",
          jam_keluar: "23:05",
          kategori: "Tidak Dikenal",
          status: "MENCURIGAKAN",
        },
        {
          id: 7,
          nama: "nemoel",
          tanggal: "17/01/2024",
          jam_masuk: "00:00",
          jam_keluar: "--:--",
          kategori: "Warga",
          status: "TIDAK MENCURIGAKAN",
        },
      ];
    
    const getPeringatanColor = (status_siaga) => {
      switch (status_siaga) {
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
    
    const truncateText = (text, maxLength) => {
      if (!text) {
        return "";
      }
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + `...`;
    };



    
    const  DashboardKeamanan = () => {
      const [searchText, setSearchText] = useState("");
      const [searchMonth, setSearchMonth] = useState('');
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
                Keamanan
              </Typography>
            </Stack>

            <Box display='flex' justifyContent='center'>
                <Typography variant="h6" fontFamily='montserrat' fontWeight='600' mb={5}>
                    DAFTAR PENGUNJUNG</Typography>
            </Box>

            <Typography variant="h6" sx={{ color: "black", fontWeight: "hin" }}>
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
              size='small'
              type='month'
              sx={{ width: 180, height: 38 }}
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

            <Stack direction='row' spacing={0.5} sx={{color:'#A1A5B7', fontFamily:'montserrat'}}>
                <Typography> Showing</Typography>
                <Typography fontWeight='bold'> {currentData.length} Item</Typography>
                <Typography> from</Typography>
                <Typography fontWeight='bold'> {data.length} Result </Typography>
            </Stack>

            <Button
              variant="contained"
              color="primary"
              onClick={handleAdd}
              style={{ marginLeft: "auto" }}
              sx={{
                backgroundColor: "#00A9AD",
                marginLeft: "auto",
                height: 38,
                display: "flex",
                alignItems: "center",
              }}
            >
              PENGADUAN WARGA
            </Button>
          </Stack>

          {/* table data placement */}
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
                    NAMA <br />
                    PNGUNJUNG
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      color: "#A0A1A4",
                    }}
                  >
                    TANGGAL <br /> 
                    MASUK
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      color: "#A0A1A4",
                    }}
                  >
                    WAKTU MASUK & <br />
                    KELUAR
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      color: "#A0A1A4",
                      
                    }}
                  >
                    KATEGORI <br /> PENGUNJUNG
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
                        <span>{truncateText(row.nama, 40)}</span>
                    </TableCell>
                    <TableCell>
                      {truncateText(row.tanggal, 40)}
                    </TableCell>
                    <TableCell>
                     <Stack direction="column" alignItems="left">
                      <span>{row.jam_masuk}</span>
                      <span style={{ color: "#A1A5B7" }}>{row.jam_keluar}</span>
                     </Stack>
                    </TableCell>
                    <TableCell>{truncateText(row.kategori, 30)}</TableCell>
                    <TableCell>
                      <Chip
                        label={truncateText(row.status, 40)}
                        sx={getPeringatanColor(row.status)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* page */}
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
      )

    }

export default DashboardKeamanan