import React from "react";
import Bar from "../../../components/WargaComponents/Navbar";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import Pengumuman from "../../../components/WargaComponents/Pengumuman";
import Kegiatan from "../../../components/WargaComponents/Kegiatan/all";
import Header from "../../../components/WargaComponents/Header";
import Highlight from "../../../components/WargaComponents/Kegiatan/highlight";
import Footer from "../../../components/WargaComponents/DashboardBaru/Footer/index";

function index() {
  // Mendapatkan tanggal saat ini
  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "long" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal} ${bulan} ${tahun}`;

  return (
    <Box>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Highlight />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
        }}
      >
        <Kegiatan />
      </Box>
      <Footer />
    </Box>
  );
}

export default index;