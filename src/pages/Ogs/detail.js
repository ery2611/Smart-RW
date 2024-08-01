import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Deogs from '../../components/DeOgs'

function index() {
  return (
   <Box sx={{
    display:'fluid',
    justifyContent:"flex-start"
   }}>
    <Box sx={{ m: 2, display: "flex", height: "3%", width: "100%" }}>
          <Stack direction="column" textAlign='left'>
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18, fontWeight:'bold' }}
          >
            COMMAND CENTER
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              One Gate System/
            </Typography>
            <Typography variant="h9" align="center" sx={{color:'black', fontWeight:'bold'}}>
              Detail
            </Typography>
          </Stack>
        </Stack>
  
          
    </Box>
    <Box alignItems='center' display='flex'>
        <Deogs />
    </Box>
   </Box>
  )
}

export default index