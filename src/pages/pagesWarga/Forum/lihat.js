import React from 'react'
import { Box, Container, Stack, Typography } from "@mui/material";
import Detail from '../../../components/WargaComponents/Forum/detail';
import Bar from '../../../components/WargaComponents/Navbar'

function DetailForum() {
  return (
    <div>
        <Bar />
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
            Forum/ 
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Detail Forum
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%", // memastikan Box mengisi lebar penuh container
          }}
        >
         <Detail/>
        </Box>
    </div>
  )
}

export default DetailForum