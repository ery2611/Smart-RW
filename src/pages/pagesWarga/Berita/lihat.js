import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Detail from "../../../components/WargaComponents/Berita/detail";

import Header from "../../../components/WargaComponents/Header";

import Footer from "../../../components/WargaComponents/DashboardBaru/Footer/index";
function DetailForum() {
  return (
    <Box>
      <Header />

      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
        }}
      >
        <Detail />
      </Box>
      <Footer />
    </Box>
  );
}

export default DetailForum;
