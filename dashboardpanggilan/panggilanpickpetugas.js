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
import Box from '@mui/material/Box';
import ControlledCheckbox from "./Component/checkbox";


const data = [
  // Your data array
  {
    id: <ControlledCheckbox/>,
    judul_bencana: "Yuni",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: <ControlledCheckbox/>,
    judul_bencana: "Firdaus",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Kemang Dahlia Raya Blok Z No.12",
    peringatan: "TIDAK AKTIF",
  },
  {
    id: <ControlledCheckbox/>,
    judul_bencana: "Yusuf",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: <ControlledCheckbox/>,
    judul_bencana: "Wasis Utomo",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "TIDAK AKTIF",
  },
  {
    id: <ControlledCheckbox/>,
    judul_bencana: "Bintang",
    jenis_bencana: "Petugas Keamanan",
    lokasi: "Area RW02 Kemang Pratama",
    peringatan: "AKTIF",
  },
  {
    id: <ControlledCheckbox/>,
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
          COMMAND CENTER
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            Dashboard/
          </Typography>
          
        </Stack>

        <Typography variant="h6" sx={{ textAlign: 'center' }}>
              PILIH PETUGAS
            </Typography>
        <Box>
      <Stack direction="row" spacing={5} sx={{ml: 5 ,mt: 4,}}>
        <Typography sx={{ color: '#A1A5B7', fontSize: '16px', textAlign: 'left' }}>Panggilan Yang Dipilih</Typography>
        <Typography sx={{ color: '#000', fontSize: '16px', textAlign: 'left', }}>: Keamanan</Typography>
      </Stack>
    </Box>
          

       
      </Stack>
      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        sx={{ marginBottom: 5,ml : 5, }}
      >
      

        <TextField
          value={searchText}
          onChange={handleSearchChange}
          size={"small"}
          placeholder="Cari"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{ width: 250, height: 22, }}
        />
         <Button
  variant="contained"
  onClick={handleSearch}
  sx={{ backgroundColor: "#00A9AD", height: 38, mt: '20px !important' }}
>
  CARI
</Button>

     
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          style={{ marginLeft: "auto",marginTop: 'auto', }}
          sx={{
            backgroundColor: "#00A9AD",
            
            height: 38,
            display: "flex",
            alignItems: "center",
            mr : '25px !important',
          }}
        >
          PANGGIL
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
                  <IconButton aria-label="Example">
                   
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

export default Pilihpetugas;