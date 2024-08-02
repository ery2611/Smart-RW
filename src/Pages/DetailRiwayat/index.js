import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import DetailRiwayat from '../../Component/DetailRiwayatPanggilan/detailriwayatpanggilan'
function Detailriwayat() {
  return (
    <div>
      <Container // Mengatur ukuran maksimum container menjadi "lg" (large)
        sx={{
            maxWidth:'lg',
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
            COMMAND CENTER
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/LaporanDarurat/RiwayatPanggilan/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              DetailRiwayat
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px", // gunakan `marginLeft` di dalam `sx`
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
          <DetailRiwayat/>
        </Box>
      </Container>
    </div>
  )
}

export default Detailriwayat
