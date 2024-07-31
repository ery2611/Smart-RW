import React from "react";
import { Box, Container } from "@mui/material";
import Table from "../../Component/Pengaduan/pengaduan";
import Kalender from "../../Component/Kalender/calender";
import Detail from "../../Component/Detail/detail";
export default function index() {
  return (
    <div>
      <Container sx={{ maxWidth: "lg" }}>
        <Box marginLeft="200px" sx={{marginTop:'20px'}}>
            <Kalender/>
          <Table />
        </Box>
      </Container>
      <Container
      maxWidth="md" // Mengatur ukuran maksimum container menjadi "lg" (large)
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // agar konten tidak berada di tengah secara vertikal
        minHeight: '100vh', // memastikan container memenuhi tinggi viewport
      }}
    >
      <Box
        sx={{
          marginTop: '20px',
          marginLeft: '200px', // gunakan `marginLeft` di dalam `sx`
          width: '100%', // memastikan Box mengisi lebar penuh container
        }}
      >
        <Detail/>
        </Box>
      </Container>
    </div>
  );
}
