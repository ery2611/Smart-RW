import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#00A9AD",
        color: "white",
        p: 4,
        mt: "auto",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SMART RW
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            © 2024. All rights reserved.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography
            onClick={() => Navigate("/Warga")}
            variant="body2"
            sx={{ mb: 1 }}
          >
            Home
          </Typography>
          <Typography
            variant="body2"
            onClick={() => Navigate("/Warga/Pengumuman")}
            sx={{ mb: 1 }}
          >
            Pengumuman
          </Typography>
          <Typography
            variant="body2"
            onClick={() => Navigate("/Warga/Kegiatan")}
          >
            Kegiatan
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Kemang Pratama
          </Typography>
          <Typography variant="body2">Tentang Kami</Typography>
          <Typography variant="body2">kemangpratama@gmail.com</Typography>
          <Typography variant="body2">021 - xxxx - xxxx</Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Brilyan Trimitra Utama
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "regular" }}>
            Kemang Pratama 2, Bekasi
          </Typography>
          <Typography variant="body2">
            brilyantrimitrautama@web.co.id
          </Typography>
          <Typography variant="body2">021 - xxxx - xxxx</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
