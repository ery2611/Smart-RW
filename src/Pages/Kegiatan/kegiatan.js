import React from "react";
import Kegiatan from "../../Component/Kegiatan/index";
import { Box, Container, Stack, Typography } from "@mui/material";

function kegiatan() {
  return (
    <div>
      <Container // Mengatur ukuran maksimum container menjadi "lg" (large)
        sx={{
          maxWidth: "lg",
        }}
      >
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
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Kegiatan
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
          <Kegiatan />
        </Box>
      </Container>
    </div>
  );
}

export default kegiatan;
