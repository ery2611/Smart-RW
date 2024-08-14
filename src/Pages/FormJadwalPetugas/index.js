import React from 'react'
import FormJadwalPetugas from '../../Component/FormJadwalPetugas/formjadwalpetugas'
import { Box, Container, Stack, Typography } from "@mui/material";

export default function FormJadwalPetugasKebersihan() {
  return (
    <div>
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
            Dashboard/ Jadwal/ 
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Form Jadwal Petugas
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
         <FormJadwalPetugas/>
        </Box>
    </div>
  )
}
