import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function createData(no, petugas, status, color) {
  return { no, petugas, status, color };
}

const rows = [
  createData(1, "Khairul Mustain", "DITERIMA", "#5AF411"),
  createData(2, "Deddy Sunarya", "DITOLAK", "#EE1717"),
  createData(3, "Yan Adhari", "BELUM DITERIMA", "#FFE152"),
  createData(4, "Dafta Syarif", "DITOLAK", "#EE1717"),
];

function MyTable() {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 500, margin: "0 auto", marginTop: "15px" }}
    >
      <Card sx={{ boxShadow: 5 }}>
        <CardHeader
          title={
            <Typography
              variant="body2"
              fontWeight="bold"
              align="center"
              color="#00A9AD"
              marginBottom="0"
            >
              DAFTAR CUTI
            </Typography>
          }
        />
        <CardContent>
          <TableContainer component={Card} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#A0A1A4", fontWeight: "medium" }}>
                    NO
                  </TableCell>
                  <TableCell sx={{ color: "#A0A1A4", fontWeight: "medium" }}>
                    PETUGAS
                  </TableCell>
                  <TableCell sx={{ color: "#A0A1A4", fontWeight: "medium" }}>
                    STATUS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.no}>
                    <TableCell>
                      <Typography variant="caption">{row.no}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{row.petugas}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color={row.color}>
                        {row.status}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
export default MyTable;
