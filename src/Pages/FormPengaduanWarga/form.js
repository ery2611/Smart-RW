import React from 'react'
import { Box, Container, Stack, Typography } from "@mui/material";
import Form from '../../Component/FormPengaduanKebersihanWarga';

function FormPengaduan() {
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
            Dashboard/ Kebersihan/ 
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Form Pengaduan Kebersihan Warga
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
         <Form/>
        </Box>
    </div>
  )
}

export default FormPengaduan
