import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Table from "../../Component/Pengaduan/pengaduan";
import Kalender from "../../Component/Kalender/calender";
import Detail from "../../Component/Detail/detail";

export default function index() {
  return (
    <div>
      <Container sx={{ maxWidth: "lg" }}>
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
              Keamanan
            </Typography>
          </Stack>
        </Stack>
        <Box marginLeft="200px" sx={{ marginTop: "20px" }}>
          <Kalender />
          <Table />
        </Box>
      </Container>
    </div>
  );
}