import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Table from "../../../components/CommandComponents/Pengaduan/pengaduan";
import Kalender from "../../../components/CommandComponents/Kalender/calender";
import Bar from '../../../components/CommandComponents/Navbar'

export default function index() {
  return (
    <div>
      <Bar />
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
        <Box sx={{ marginTop: "20px", paddingBottom:4}}>
          <Kalender />
          <Table />
        </Box>
      </Container>
    </div>
  );
}