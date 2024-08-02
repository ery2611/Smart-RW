import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Detail from '../../components/Detail/detail'

const index = () => {
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
              Dashboard/Keamanan/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Detail
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            paddingBottom:4,
            width: "100%", // memastikan Box mengisi lebar penuh container
            
          }}
        >
          <Detail />
        </Box>
      </Container>
    </div>
  )
}

export default index