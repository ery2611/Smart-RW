import React from "react";
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
} from "@mui/material";
import Mata from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";

// Data array
const rows = [
  {
    id: 1,
    name: "Khoirul Mustaan",
    date: "06/01/2024 08.00",
    alasan: "lorem ipsum dolor sit amet",
    status: "DITERIMA",
  },
  {
    id: 2,
    name: "Yan Azhari",
    date: "06/01/2024 08.00",
    alasan: "lorem ipsum dolor sit amet",
    status: "BELUM DITERIMA",
  },
  {
    id: 3,
    name: "Deddy Sunarya",
    date: "06/01/2024 08.00",
    alasan: "lorem ipsum dolor sit amet",
    status: "BELUM DITERIMA",
  },
  {
    id: 4,
    name: "Khoirul Mustaan",
    date: "06/01/2024 08.00",
    alasan: "lorem ipsum dolor sit amet",
    status: "DITOLAK",
  },
  {
    id: 5,
    name: "Cindy Riyanti",
    date: "06/01/2024 08.00",
    alasan: "lorem ipsum dolor sit amet",
    status: "DITOLAK",
  },
];

const getStatuscolor = (status) => {
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
    default:
      return {};
  }
};
const SimpleTable = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h3 style={{ marginBottom: "0" }}>ADUAN KEAMANAN</h3>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ marginTop: 4,marginBottom:2, fontFamily: "Montserrat, sans-serif",boxShadow:5 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                WARGA
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
                ALASAN PENGADUAN
              </TableCell>
              <TableCell
                sx={{
                  color: "#A0A1A4",
                  fontFamily: "Montserrat",
                }}
              >
                STATUS
                <br />
                PENGADUAN
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.alasan}</TableCell>
                <TableCell>
                  <Chip label={row.status} sx={getStatuscolor(row.status)} />
                </TableCell>
                <TableCell>
                  <Mata onClick={() => Navigate("/detail")} sx={{ color: "#00A9AD",cursor:'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SimpleTable;
