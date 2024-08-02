
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Table from "../../components/Laporan/laporan";

const Index = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Menggeser konten ke kanan
          alignItems: "flex-start", // Mengatur agar konten mulai dari atas
          minHeight: "100vh",
          backgroundColor: "#fff", // Warna latar belakang opsional untuk bagian kosong
          padding: 2, // Opsional: Menambahkan padding untuk ruang ekstra
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "lg",
          }}
        >
          <Container
            maxWidth="lg"
            marginBottom='10px'

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
                COMMAND CENTER
              </Typography>
              <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
                <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                  Dashboard/
                </Typography>
                <Typography
                  variant="h9"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Laporan
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ marginTop: "0px" }}>
              <Table />
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
