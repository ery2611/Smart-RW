import {
  Box,
  Button,
  Chip,
  IconButton,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Bar from "../../../components/KebersihanComponents/Navbar";

const data = [
  {
    id: 1,
    nama: "Kautsar Hakam",
    tanggal_pengajuan: "24/08/2024",
    jam_pengajuan: "08:00",
    status: "DITERIMA",
  },
  {
    id: 2,
    nama: "Bintang Fathurahman",
    tanggal_pengajuan: "16/08/2024",
    jam_pengajuan: "09:00",
    status: "DITERIMA",
  },
  {
    id: 3,
    nama: "Rafif Muhammad Faiz",
    tanggal_pengajuan: "14/08/2024",
    jam_pengajuan: "23:00",
    status: "DITOLAK",
  },
  {
    id: 4,
    nama: "Farrel Savero Suta",
    tanggal_pengajuan: "30/08/2024",
    jam_pengajuan: "12:00",
    status: "BELUM DITERIMA",
  },
  {
    id: 5,
    nama: "Muhammad Parsya",
    tanggal_pengajuan: "15/08/2024",
    jam_pengajuan: "08:00",
    status: "BELUM DITERIMA",
  },
  {
    id: 6,
    nama: "Galih Simantung",
    tanggal_pengajuan: "20/08/2024",
    jam_pengajuan: "10:00",
    status: "DITERIMA",
  },
  {
    id: 7,
    nama: "Kautsar Hakamu",
    tanggal_pengajuan: "24/08/2024",
    jam_pengajuan: "08:00",
    status: "DITOLAK",
  },
];

const getStatus = (status) => {
  switch (status) {
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
  }
};

const CutiKebersihan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const currentData = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  //! KETERANGAN WAKTU
  const date = new Date();
  //format
  const hari = date.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = date.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = date.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = date.getFullYear(); // Tahun

  //?function area
  const pindahHalaman = (e, v) => {
    setCurrentPage(v);
  };
  return (
    <Box>
      <Bar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Text pojok kiri atas */}
        <Stack direction="column" textAlign="left">
          <Typography
            variant="h5"
            sx={{
              marginBottom: 0,
              color: "#00A9AD",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            KEBERSIHAN
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Cuti
            </Typography>
          </Stack>

          {/* tittle dan tanggal */}
          <Box sx={{ display: "fluid", justifyContent: "end" }}>
            <Stack>
              <Typography textAlign="end">
                {hari}, {tanggal}/{bulan}/{tahun}
              </Typography>
            </Stack>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Typography variant="body1">
                JADWAL CUTI PETUGAS KEBERSIHAN HARI INI
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* Button cari */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ marginBottom: 2, mt: 3 }}
        >
          <TextField
            type="search"
            placeholder="Cari"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#A0A1A4" }} />,
            }}
            sx={{ width: 180, height: 38 }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#00A9AD", height: 38 }}
          >
            CARI
          </Button>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ color: "#A1A5B7", fontFamily: "montserrat" }}
          >
            <Typography> Showing</Typography>
            <Typography fontWeight="bold">
              {" "}
              {currentData.length} Item
            </Typography>
            <Typography> from</Typography>
            <Typography fontWeight="bold"> {data.length} Result </Typography>
          </Stack>
        </Stack>

        {/* data table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    alignContent: "center",
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
                    fontSize: 16,
                  }}
                >
                  PETUGAS <br />
                  KEBERSIHAN
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    color: "#A0A1A4",
                    alignContent: "center",
                  }}
                >
                  PENGAJUAN
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
                  <TableCell sx={{ paddingRight: "100px" }}>{row.id}</TableCell>
                  <TableCell sx={{ paddingRight: "100px" }}>
                    {row.nama}
                  </TableCell>
                  <TableCell sx={{ paddingRight: "100px" }}>
                    <Stack direction="column" alignItems="left">
                      <span>{row.tanggal_pengajuan}</span>
                      <span>{row.jam_pengajuan}</span>
                    </Stack>
                  </TableCell>

                  <TableCell aria-label="Example">
                    <Chip label={row.status} sx={getStatus(row.status)} />
                  </TableCell>
                  <TableCell sx={{ mr: 10 }}>
                    <IconButton aria-label="Example">
                      <Mata sx={{ color: "#00A9AD" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* page */}
        <Stack direction="row" justifyContent="center" sx={{ marginTop: 2 }}>
          <Pagination
            count={Math.ceil(data.length / itemPerPage)}
            page={currentPage}
            onChange={pindahHalaman}
            sx={{
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "#00A9AD", // Background color for selected page
                color: "#fff", // Text color for selected page
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default CutiKebersihan;
