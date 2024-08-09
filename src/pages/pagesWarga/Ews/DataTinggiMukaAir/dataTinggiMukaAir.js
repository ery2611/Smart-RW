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
  Stack,
  Typography,
  Chip,
  Pagination,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";

const data = [
  // Your data array
  {
    id: 1,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "40 cm",
    status: "NORMAL",
  },
  {
    id: 2,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "80 cm",
    status: "NORMAL",
  },
  {
    id: 3,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pos Pengamatan",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Mendung",
    tinggi_air: "250 cm",
    status: "NORMAL",
  },
  {
    id: 4,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pos Pengamatan",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "178 cm",
    status: "WASPADA",
  },
  {
    id: 5,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "40 m",
    status: "NORMAL",
  },
  {
    id: 6,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "40 m",
    status: "NORMAL",
  },
  {
    id: 7,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "40 m",
    status: "NORMAL",
  },
  {
    id: 8,
    lokasi: "Sungai Kemang Pratama",
    kategori: "Pintu Air",
    tanggal: "23/12/2024",
    jam: "05:00",
    cuaca: "Terang",
    tinggi_air: "40 m",
    status: "NORMAL",
  },
];

const getPeringatanColor = (status) => {
  switch (status) {
    case "NORMAL":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "WASPADA":
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
  return text.substring(0, maxLength) + `<br>`;
};

const DataTinggiMukaAir = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const Navigate = useNavigate();

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
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>Tanggal</Typography>
          <TextField
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            size="small"
            type="date"
            sx={{ width: 179, height: 38 }}
          />
        </Stack>
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>Jam</Typography>
          <TextField
            value={searchTime}
            onChange={(e) => setSearchTime(e.target.value)}
            size="small"
            type="time"
            sx={{ width: 179, height: 38 }}
          />
        </Stack>
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>Kategori</Typography>
          <TextField size="small" select sx={{ width: 179, height: 38 }} />
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
                LOKASI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                KATEGORI
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
                CUACA
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TINGGI <br />
                AIR
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
                <TableCell>{row.lokasi}</TableCell>
                <TableCell>{row.kategori}</TableCell>
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{row.cuaca}</TableCell>
                <TableCell>{truncateText(row.tinggi_air, 40)}</TableCell>
                <TableCell>
                  <Chip
                    label={truncateText(row.status, 40)}
                    sx={getPeringatanColor(row.status)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => Navigate("/Warga/Ews/DetailTinggiMukaAir")}
                    aria-label="Example"
                  >
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

export default DataTinggiMukaAir;
