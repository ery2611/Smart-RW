import React from "react";
import DetailPompaAir from "../../../../components/WargaComponents/Ews/detailPompaAir";
import { Box, Container, Stack, Typography } from "@mui/material";
import Bar from "../../../../components/WargaComponents/Navbar";

function detailPompaAir() {
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
            Ews/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Detail Pompa Air
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          marginTop: "20px",
          width: "100%", // memastikan Box mengisi lebar penuh container
        }}
      >
        <DetailPompaAir />
      </Box>
    </div>
  );
}

export default detailPompaAir;