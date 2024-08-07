import React from "react";
import Kegiatan from "../../../components/WargaComponents/Kegiatan/semua";
import Bar from "../../../components/WargaComponents/Navbar";
import { Box, Stack, Typography, Card, CardContent } from "@mui/material";

function index() {
  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatHari = `${hari}`;
  const formatTanggal = `${tanggal} / ${bulan} / ${tahun}`;
  return (
    <div
      sx={{
        width: "1200px",
      }}
    >
      <Bar />
      
      <Box
          sx={{
            height: "3%",
          }}
        >
          <Stack direction="column">
            <Typography
              variant="h5"
              sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
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
                Kegiatan
              </Typography>
            </Stack>
          </Stack>
        </Box>
      <Box sx={{justifyContent:'center',width:'100%', display:'flex' }}>
          <Card sx={{ boxShadow: 5, maxHeight: "300px", width:'600px', borderRadius:'10px' }}>
            <CardContent>
              <Box sx={{ display: "fluid", justifyContent: "flex-start" }}>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    INFORMASI HARI INI
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Typography sx={{color:'#A1A5B7'}}>Hari</Typography>

                    <Typography>: {formatHari}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Typography sx={{color:'#A1A5B7'}}>Tanggal</Typography>
                    <Typography>: {formatTanggal}</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
        display="fluid"
        sx={{
          justifyContent: "flex-start",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "30px",
            width: "100%",
          }}
        >
          <Kegiatan />
        </Box>
      </Box>
    </div>
  );
}

export default index;
