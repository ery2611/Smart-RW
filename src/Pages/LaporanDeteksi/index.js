import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Table from "../../Component/Laporan/laporan";

const Index = () => {
  return (
    <div>
          <Container
            maxWidth="lg"

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
            <Box sx={{ marginTop: "20px" }}>
              <Table />
            </Box>
          </Container>
    </div>
  );
};

export default Index;
