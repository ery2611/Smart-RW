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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const data = [
  {
    id: 1,
    nominal: "RP. 200 000",
    pembayaranBulan: "Januari",
    tanggalBayar: "02 / 01 / 2024",
    pengeluaranAir: "500 m³",
    petugasCS: "Indah",
    statusPembayaran: "SUDAH",
  },
  {
    id: 2,
    nominal: "RP. 200 000",
    pembayaranBulan: "Januari",
    tanggalBayar: "02 / 01 / 2024",
    pengeluaranAir: "500 m³",
    petugasCS: "Indah",
    statusPembayaran: "SUDAH",
  },
  {
    id: 3,
    nominal: "RP. 200 000",
    pembayaranBulan: "Januari",
    tanggalBayar: "02 / 01 / 2024",
    pengeluaranAir: "500 m³",
    petugasCS: "Indah",
    statusPembayaran: "SUDAH",
  },
  {
    id: 4,
    nominal: "RP. 200 000",
    pembayaranBulan: "Januari",
    tanggalBayar: "02 / 01 / 2024",
    pengeluaranAir: "500 m³",
    petugasCS: "Indah",
    statusPembayaran: "SUDAH",
  },
];

const Riwayatpembayaranpam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null); // State untuk menyimpan data baris yang dipilih
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const [searchDate, setSearchDate] = useState("");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleAdd = (params) => {
    navigate(params);
  };

  // Get current data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = (row) => {
    setSelectedRow(row); // Simpan data baris yang dipilih ke dalam state
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        textAlign={"center"}
        marginTop={2}
        marginBottom={5}
        fontSize={"16px"}
      >
        RIWAYAT AIR PAM
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        sx={{ marginBottom: 2 }}
      >
        <Stack direction={"column"}>
          <Typography justifyContent={"flex-start"}>Tanggal Bayar</Typography>
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
            Status Pembayaran
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
          BAYAR AIR PAM
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
                NOMINAL
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                PEMBAYARAN BULAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                TANGGAL BAYAR
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                PENGELUARAN AIR
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                PETUGAS CS
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                STATUS PEMBAYARAN
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "#A0A1A4",
                }}
              >
                DETAIL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  marginBottom: 2,
                  display: "table-row",
                  borderBottom: "none",
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.nominal}</TableCell>
                <TableCell>{row.pembayaranBulan}</TableCell>
                <TableCell>{row.tanggalBayar}</TableCell>
                <TableCell>{row.pengeluaranAir}</TableCell>
                <TableCell>{row.petugasCS}</TableCell>
                <TableCell>
                  <Chip
                    label={row.statusPembayaran}
                    sx={
                      row.statusPembayaran === "SUDAH"
                        ? {
                            backgroundColor: "#DBF8DC",
                            color: "#5AF411",
                            fontWeight: "bold",
                          }
                        : {
                            backgroundColor: "#FBE3E3",
                            color: "#EE1717",
                            fontWeight: "bold",
                          }
                    }
                  />
                </TableCell>
                <TableCell>
                  <RemoveRedEyeOutlinedIcon
                    onClick={() => handleClickOpen(row)} // Pass the selected row data
                    sx={{ color: "#00A9AD" }}
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ textAlign: "center", color: "#00A9AD", fontWeight: "bold" }}
        >
          DETAIL RIWAYAT
        </DialogTitle>
        {selectedRow && (
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "16px 32px",
              maxWidth: 400,
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Keterangan
            </Typography>

            <Chip
              label={selectedRow.statusPembayaran}
              sx={
                selectedRow.statusPembayaran === "SUDAH"
                  ? {
                      backgroundColor: "#DBF8DC",
                      color: "#5AF411",
                      fontWeight: "bold",
                      marginBottom: 2,
                    }
                  : {
                      backgroundColor: "#FBE3E3",
                      color: "#EE1717",
                      fontWeight: "bold",
                      marginBottom: 2,
                    }
              }
            />

            <Grid container spacing={1} marginBottom={1}>
              <Grid item xs={6}>
                <Typography sx={{ color: "#A1A5B7", fontSize: "16px" }}>
                  Nominal
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#000", fontSize: "16px" }}>
                  Rp. 200 0000
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} marginBottom={1}>
              <Grid item xs={6}>
                <Typography sx={{ color: "#A1A5B7", fontSize: "16px" }}>
                  Pembayaran Bulan
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#000", fontSize: "16px" }}>
                  Januari
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} marginBottom={1}>
              <Grid item xs={6}>
                <Typography sx={{ color: "#A1A5B7", fontSize: "16px" }}>
                  Tanggal Bayar
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#000", fontSize: "16px" }}>
                  2 Januari 2024 (05:00)
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} marginBottom={1}>
              <Grid item xs={6}>
                <Typography sx={{ color: "#A1A5B7", fontSize: "16px" }}>
                  Pengeluaran Air
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#000", fontSize: "16px" }}>
                  500 m³
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} marginBottom={1}>
              <Grid item xs={6}>
                <Typography sx={{ color: "#A1A5B7", fontSize: "16px" }}>
                  Petugas CS
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#000", fontSize: "16px" }}>
                  Indah
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Tutup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Riwayatpembayaranpam;
