import React from "react";
import Forum from "../../../components/WargaComponents/Forum/semua";
import Bar from "../../../components/WargaComponents/Navbar";
import { Box, Stack, Typography, Card, CardContent } from "@mui/material";

function index() {
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
    <div
      sx={{
        width: "1200px",
      }}
    >
      <Bar />

      <Box
        display="fluid"
        sx={{
          justifyContent: "flex-start",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "30px",
            width: "100%",
          }}
        >
          <Forum />
        </Box>
      </Box>
    </div>
  );
}

export default index;
