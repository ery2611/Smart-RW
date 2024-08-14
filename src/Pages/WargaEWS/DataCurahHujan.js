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

const data = [
  // Your data array
  {
    id: 1,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "9000",
    siaga2: "9000",
    siaga3: "9000",
    siaga4: "9000",
    tinggi_air: "6",
    status: "NORMAL",
  },
  {
    id: 2,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "2000",
    siaga2: "1500",
    siaga3: "800",
    siaga4: "1",
    tinggi_air: "9",
    status: "NORMAL",
  },
  {
    id: 3,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "9000",
    siaga2: "9000",
    siaga3: "9000",
    siaga4: "9000",
    tinggi_air: "6",
    status: "NORMAL",
  },
  {
    id: 4,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "9000",
    siaga2: "9000",
    siaga3: "9000",
    siaga4: "9000",
    tinggi_air: "6",
    status: "NORMAL",
  },
  {
    id: 5,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "9000",
    siaga2: "9000",
    siaga3: "9000",
    siaga4: "9000",
    tinggi_air: "6",
    status: "NORMAL",
  },
  {
    id: 6,
    lokasi: "Sungai Kemang Pratama",
    tanggal: "23/12/2024",
    jam: "05:00",
    siaga1: "9000",
    siaga2: "9000",
    siaga3: "9000",
    siaga4: "9000",
    tinggi_air: "6",
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

const DataCurahHujan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");

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
        alignItems="flex-end"
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
                TANGGAL &<br /> WAKTU
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                SIAGA 1
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                SIAGA 2
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                SIAGA 3
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                SIAGA 4
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
                <TableCell>
                  <Stack direction="column" alignItems="left">
                    <span>{row.tanggal}</span>
                    <span style={{ color: "#A1A5B7" }}>{row.jam}</span>
                  </Stack>
                </TableCell>
                <TableCell>{row.siaga1}</TableCell>
                <TableCell>{row.siaga2}</TableCell>
                <TableCell>{row.siaga3}</TableCell>
                <TableCell>{row.siaga4npm}</TableCell>
                <TableCell>{truncateText(row.tinggi_air, 40)}</TableCell>
                <TableCell>
                  <Chip
                    label={truncateText(row.status, 40)}
                    sx={getPeringatanColor(row.status)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton aria-label="Example">
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

export default DataCurahHujan;
