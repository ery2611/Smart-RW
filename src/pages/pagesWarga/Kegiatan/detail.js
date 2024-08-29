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
import Kegiatan from "../../../components/WargaComponents/Kegiatan/detail";

import Header from "../../../components/WargaComponents/Header";

import Footer from "../../../components/WargaComponents/DashboardBaru/Footer/index";

function index() {
  // Mendapatkan tanggal saat ini

  return (
    <Box>
      <Header />

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
