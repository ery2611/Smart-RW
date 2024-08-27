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
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router";
import Sampah from "../../Assets/Sampah.png";

const data = [
  // Your data array
  {
    id: 1,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 2,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 3,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 4,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 5,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 6,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
  {
    id: 7,
    media: Sampah,
    judul_pengaduan:
      "Sampah menumpuk di depan rumah saya dan belum diangkut sama sekali",
    alamat: "Jalan Kemang Dahlia Raya, Blok Z No. 12, Kemang Pratama Bekasi",
    tanggal_ditanggapi: "02 / 01 / 2024",
    status: "DITANGGAPI",
  },
];

const getPeringatanColor = (status) => {
  switch (status) {
    case "DITANGGAPI":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "BELUM DITANGGAPI":
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

const PengambilanSampah = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const Navigate = useNavigate("");
  const [searchDate, setSearchDate] = useState("");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleAdd = (params) => {
    Navigate(params);
  };

  // Get current data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Typography
        textAlign={"center"}
        marginTop={2}
        marginBottom={5}
        fontSize={"16px"}
      >
        RIWAYAT PENGAMBILAN SAMPAH
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        sx={{ marginBottom: 2 }}
      >
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>
            Tanggal DItanggapi
          </Typography>
          <TextField
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            size="small"
            type="date"
            sx={{ width: 179, height: 38 }}
          />
        </Stack>
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>
            Status Pengaduan
          </Typography>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleAdd("/");
          }}
          sx={{
            backgroundColor: "#00A9AD",
            height: 38,
            display: "flex",
            alignItems: "center",
          }}
          style={{ marginLeft: "auto" }}
        >
          BUAT PENGADUAN
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
                MEDIA
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                JUDUL <br /> PENGADUAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                ALAMAT
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TANGGAL <br /> DITANGGAPI
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                STATUS <br /> PENGADUAN
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
                  <img
                    src={row.media}
                    alt="media"
                    style={{ width: 128, height: 85 }}
                  />
                </TableCell>
                <TableCell>{row.judul_pengaduan}</TableCell>{" "}
                <TableCell>{row.alamat}</TableCell>
                <TableCell>
                  <Typography>{row.tanggal_ditanggapi}</Typography>
                </TableCell>
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
      <Box
        sx={{
          justifyContent: "flex-end",
          display: "flex",
          marginTop: "15px",
          marginBottom: "15px",
          marginRight: 4,
        }}
      >
        <Button
          onClick={() => Navigate("/")}
          sx={{
            color: "#00A9AD",
            fontWeight: "bolder",
            border: "2px solid #00A9AD",
            "&:hover": {
              border: "2px solid #00A9AD",
              color: "#00A9AD",
            },
          }}
          variant="outlined"
        >
          KEMBALI
        </Button>
      </Box>
    </div>
  );
};

export default PengambilanSampah;
