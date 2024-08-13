import React from 'react'
import Tagihan from '../../Component/DTagihanLunas/dtagihanlunas'
import { Stack, Typography,Box } from '@mui/material'

export default function DTagihanLunas() {
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
            Dashboard/ IKK/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Tagihan
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
         <Tagihan/>
        </Box>
    </div>
  )
}
