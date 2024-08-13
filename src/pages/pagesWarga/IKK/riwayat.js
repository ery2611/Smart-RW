import React from "react";
import RiwayatIKK from "../../../components/WargaComponents/Ikk/riwayat";
import { Box, Container, Stack, Typography } from "@mui/material";
import Bar from "../../../components/WargaComponents/Navbar";

function Riwayat() {
  return (
    <div>
      <Bar />
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{
            marginBottom: 0,
            color: "#00A9AD",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          WARGA
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            Dashboard/
          </Typography>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            IKK/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Riwayat Pembayaran
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          marginTop: "20px",
          width: "100%", // memastikan Box mengisi lebar penuh container
          marginBottom: "20px",
        }}
      >
        <RiwayatIKK />
      </Box>
    </div>
  );
}

export default Riwayat;
