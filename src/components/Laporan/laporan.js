import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Container,
  Box,
  Typography,
  Stack,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

// Data array
const rows = [
  {
    id: 1,
    objek: "2 Objek",
    date: "06/01/2024 08.00",
    lokasi: "Kemang Dahlia Raya Blok Z No. 12, RT02 / RW36 Kemang Pratama",
  },
  {
    id: 2,
    objek: "5 Objek",
    date: "06/01/2024 08.00",
    lokasi: "Masjid Baitul Jihad, Kemang Dahlia Raya Blok Z No. 12, RT02...",
  },
  {
    id: 3,
    objek: "3 Objek",
    date: "06/01/2024 08.00",
    lokasi: "Koperasi Sejahtera, Kemang Dahlia Raya Blok Z No. 20, RT02...",
  },
  {
    id: 4,
    objek: "1 Objek",
    date: "06/01/2024 08.00",
    lokasi: "Koperasi Sejahtera, Kemang Dahlia Raya Blok Z No. 20, RT02...",
  },
  {
    id: 5,
    objek: "4 Objek",
    date: "06/01/2024 08.00",
    lokasi: "Koperasi Sejahtera, Kemang Dahlia Raya Blok Z No. 20, RT02...",
  },
];

// const getStatuscolor = (status) => {
//   switch (status) {
//     case "DITERIMA":
//       return {
//         backgroundColor: "#DBF8DC",
//         color: "#5AF411",
//         fontWeight: "bold",
//       };
//     case "BELUM DITERIMA":
//       return {
//         backgroundColor: "#FFF6CB",
//         color: "#FFE152",
//         fontWeight: "bold",
//       };
//     case "DITOLAK":
//       return {
//         backgroundColor: "#FBE3E3",
//         color: "#EE1717",
//         fontWeight: "bold",
//       };
//     default:
//       return {};
//   }
// };
const Laporan = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          gap: 2, // adding gap to space out the items vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            textAlign: "left",
          }}
        >
          Tanggal
        </Typography>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: "200px" }} // Adjust width as needed
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00a9ad",
            }}
          >
            CARI
          </Button>
          <Button
          variant="contained"
          onClick={() => Navigate("/laporan/detailobjek")}
          startIcon={<AddIcon />}
          sx={{
            bgcolor:'#00a9ad',
            display:'flex',
            alignItems:'center',
            
          }}
          style={{
            marginLeft:'auto'
          }}
          >
            TAMBAH  
          </Button>
        </Stack>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            marginBottom: "8px",
            fontFamily: "Montserrat",
            textAlign: "left",
          }}
        >
          Tanggal
        </Typography>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: "200px", marginLeft: 3 }} // Ubah ukuran sesuai kebutuhan
          />
        </Stack>
      </Box> */}
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 4,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          boxShadow: 5,
        }}
      >
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                NO
              </TableCell>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                OBJEK
              </TableCell>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                TANGGAL &<br />
                WAKTU PENGADUAN
              </TableCell>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                LOKASI
              </TableCell>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                AKSI
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.objek}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.lokasi}</TableCell>
                <TableCell>
                  <Mata
                    onClick={() => Navigate("/detailobjek")}
                    sx={{ color: "#00A9AD", cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Laporan;