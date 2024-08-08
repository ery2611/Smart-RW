import React from "react";
import { Box, Stack, Typography, Card, CardContent } from "@mui/material";

function InformasiJadwalToday() {
  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatHari = `${hari}`;
  const formatTanggal = `${tanggal} / ${bulan} / ${tahun}`;

  return (
    <Box sx={{ justifyContent: "center", width: "100%", display: "flex" }}>
      <Card
        sx={{
          boxShadow: 5,
          maxHeight: "300px",
          width: "600px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Box sx={{ display: "fluid", justifyContent: "flex-start" }}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold">
                INFORMASI HARI INI
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography sx={{ color: "#A1A5B7" }}>Hari</Typography>

                <Typography>: {formatHari}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography sx={{ color: "#A1A5B7" }}>Tanggal</Typography>
                <Typography>: {formatTanggal}</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default InformasiJadwalToday;
