import { Box, Container } from '@mui/material'
import React from 'react'

export default function PanggilanBencana() {
  return (
    <div>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#A0A1A4",
              fontWeight: "bold",
              fontStyle:'italic'
            }}
          >
            Tidak ada Panggilan Darurat
          </p>
        </Box>
    </div>
  )
}
