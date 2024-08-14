import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import DetailJadwal from "../../../components/KebersihanComponents/Kebersihan/detail";
import Bar from "../../../components/KebersihanComponents/Navbar";

export default function DetailJadwalPetugas() {
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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Detail Forum
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          marginTop: "20px",
          width: "100%", // memastikan Box mengisi lebar penuh container
        }}
      >
        <DetailJadwal />
      </Box>
    </div>
  );
}
