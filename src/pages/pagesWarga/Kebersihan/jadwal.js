 import React from 'react'
 import Jadwal from '../../../components/WargaComponents/JadwalKebersihan'
 import Bar from '../../../components/WargaComponents/Navbar'
 import { Stack,Typography } from '@mui/material'
 
 function jadwal() {
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
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Kebersihan/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Jadwal Petugas
            </Typography>
          </Stack>
        </Stack>

        <Bar />
        <Jadwal />
     </div>
   )
 }
 
 export default jadwal