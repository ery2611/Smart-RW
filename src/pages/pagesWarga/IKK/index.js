import React from "react";
import Bar from "../../../components/WargaComponents/Navbar";
import { Stack, Typography } from "@mui/material";
import Dashboard from "../../../components/WargaComponents/Ikk";

function index() {
  return (
    <div>
      <Bar />
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
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            IKK
          </Typography>
        </Stack>
      </Stack>
      <Dashboard />
    </div>
  );
}

export default index;
