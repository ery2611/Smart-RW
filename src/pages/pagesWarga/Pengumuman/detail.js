import React from 'react'
import Detail from '../../../components/WargaComponents/Pengumuman/detail'
import Bar from '../../../components/WargaComponents/Navbar'
import { Box,Stack,Typography } from '@mui/material'

function detail() {
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
              Dashboard/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Pengumuman
            </Typography>
          </Stack>
        </Stack>
    <Bar />
    <Box sx={{
        paddingBottom:3
    }}>
        <Detail />
    </Box>
    </div>
  )
}

export default detail