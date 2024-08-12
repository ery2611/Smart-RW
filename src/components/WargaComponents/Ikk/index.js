import {
  Box,
  Typography,
  Stack,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import React from "react";
import Dompet from "@mui/icons-material/AccountBalanceWalletOutlined";
import History from "@mui/icons-material/RestoreOutlined";
import Datepicker from "../../CommandComponents/Datepicker/Index";
import { useState } from "react";
import Mata from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    jenis: "Air",
    judul: "iuran air bulanan",
    tanggal: "23/10/2025",
    jam: "00:00",
    total: "Rp. 400.000",
  },
  {
    id: 2,
    jenis: "Listrik",
    judul: "iuran listrik bulanan",
    tanggal: "23/10/2025",
    jam: "00:00",
    total: "Rp. 400.000",
  },
  {
    id: 3,
    jenis: "Kebersihan",
    judul: "iuran kebersihan bulanan",
    tanggal: "23/10/2025",
    jam: "00:00",
    total: "Rp. 400.000",
  },
  {
    id: 4,
    jenis: "Keamanan",
    judul: "iuran keamanan bulanan",
    tanggal: "23/10/2025",
    jam: "00:00",
    total: "Rp. 400.000",
  },
];

function Index() {
  const [setTanggal, setSearchTanggal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const Navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            backgroundColor: "#2ECC71",
            borderRadius: "10px",
            marginRight: "30px",
          }}
        >
          <Box sx={{ displlay: "fluid" }}>
            <Dompet
              sx={{ alignItems: "center", fontSize: 100, color: "#FFFFFF" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              TRANSFER
            </Typography>
          </Box>
        </Box>
        <Box
          onClick={() => Navigate("/Warga/Ikk/Riwayat")}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            backgroundColor: "#4169E1",
            borderRadius: "10px",
            marginRight: "30px",
          }}
        >
          <Box sx={{ displlay: "fluid" }}>
            <History
              sx={{ alignItems: "center", fontSize: 100, color: "#FFFFFF" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              HISTORY TRANSFER
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="h6" textAlign="center">
        TAGIHAN ANDA
      </Typography>

      <Stack>
        <Typography
          variant="h9"
          sx={{ color: "black", fontWeight: "hin", marginTop: "10px " }}
        >
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
          value={setTanggal}
          onChange={(e) => setSearchTanggal(e.target.value)}
          size="small"
          type="date"
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
                JENIS <br />
                IURAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JUDUL
                <br /> IURAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TENGGAT <br />
                WAKTU
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TOTAL <br /> IURAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                DETAIL <br /> IURAN
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
                <TableCell>{row.jenis}</TableCell>
                <TableCell>{truncateText(row.judul, 40)}</TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{truncateText(row.total, 100)}</TableCell>
                <TableCell>
                  <Mata sx={{ color: "#00A9AD" }} />
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
            marginBottom: "20px",
          }}
        />
      </Stack>
    </div>
  );
}

export default Index;
