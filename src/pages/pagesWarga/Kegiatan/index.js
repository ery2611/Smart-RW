import React from "react";
import Kegiatan from "../../../components/WargaComponents/Kegiatan/semua";
import Bar from "../../../components/WargaComponents/Navbar";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function index() {
  return (
    <Container
      sx={{
        width: "1200px",
      }}
    >
      <Bar />

      <Box
        sx={{
          height: "3%",
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
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
      </Box>

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
          <Kegiatan />
        </Box>
      </Box>
    </Container>
  );
}

export default index;
