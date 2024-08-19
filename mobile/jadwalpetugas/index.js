import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton, Card, Button, Container, Stack } from '@mui/material';
import { ArrowBack, Phone, Email, AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function App() {
  const [isScanned, setIsScanned] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [completionTime, setCompletionTime] = useState("--:--");

  const handleScanClick = () => {
    setIsScanned(true);
  };

  const handleCompleteTask = () => {
    setIsTaskCompleted(true);
    setCompletionTime("10:55"); // Waktu tugas selesai di sini, bisa diganti sesuai kebutuhan
  };

  return (
    <Container 
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box sx={{}}>
        {/* Full-width Card for "Detil Tugas" */}
        <Card sx={{
          width: 385,
          display: "flex",
          height: 60,
          alignContent: "center",
        }}>
          <IconButton>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', color: "#00A9AD", alignContent: "Center" }}>
            DETIL TUGAS
          </Typography>
          <Avatar src="/path-to-profile-pic.jpg" sx={{ mt: 1, mr: 1 }} />
        </Card>

        {/* Box for "Jadwal Tugas" */}
        <Box sx={{ padding: 2 }}>
          <Typography variant="h7" sx={{ color: '#00A9AD', fontWeight: "bold" }}>
            Menjaga Pos Keamanan
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 1 }}>
            <LocationOnIcon sx={{ color: "#FE4646" }} />
            <Typography sx={{ ml: 0.5 }}>Pos Lapangan</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarMonthIcon sx={{ color: "#00A9AD" }} />
              <Typography sx={{ ml: 0.5 }}>22 Januari 2024</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 15 }}>
                <AccessTimeIcon sx={{ color: "#00A9AD" }} />
                <Typography sx={{ ml: 0.5 }}>09:30</Typography>
              </Box>
            </Box>
          </Box>

           {/* klik untuk pindah ke page sudah absen */}
           <Box onClick={handleScanClick}>
            {isScanned ? (
              <Box>
                <Typography sx={{fontStyle: 'italic' }}>
                  Absensi
                </Typography>
                
                {/* Message appears when task is completed */}
                {isTaskCompleted && (
                  <Typography sx={{ mt: 2, mb: 2, fontStyle: 'italic', color: "#CE1305",}}>
                    Tugas Anda sudah selesai, silakan buat laporan
                  </Typography>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AssignmentTurnedInOutlinedIcon sx={{ color: "#00A9AD" }} />
                    <Typography sx={{ ml: 0.5 }}>09:29</Typography>
                  </Box>  
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 16 }}>
                      <LogoutOutlinedIcon sx={{ color: "#CE1305" }} />
                      <Typography sx={{ ml: 0.5 }}>{completionTime}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Typography sx={{ color: 'red', fontStyle: 'italic' }}>
                Mohon scan Absen terlebih dahulu
              </Typography>
            )}
          </Box>
        </Box>


        {/* Box for "Regu Keamanan" */}
        <Box sx={{ padding: 2 }}>
          <Typography variant="h7" sx={{ color: '#00A9AD', fontWeight: "bold" }}>
            Regu Keamanan
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2, mt: 1 }}>
            Regu 1 Keamanan
          </Typography>

          {/* Rahmat's Info with Icon Buttons on the Right */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src="/path-to-rahmat-pic.jpg" />
              <Box sx={{ ml: 2 }}>
                <Typography>Rahmat</Typography>
                <Typography variant="caption" sx={{ color: '#AEAEAE', mb: 2 }}>Komandan Regu</Typography>
              </Box>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Phone sx={{ color: "#00A9AD" }} />
              </IconButton>
              <IconButton>
                <Email sx={{ color: "#00A9AD" }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Rama's Info */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="/path-to-rama-pic.jpg" />
            <Box sx={{ ml: 2 }}>
              <Typography>Rama</Typography>
              <Typography variant="caption" sx={{ color: '#AEAEAE' }}>Anggota Regu 1</Typography>
            </Box>
          </Box>
        </Box>

        {/* Box for "Instruksi" */}
        <Box sx={{ padding: 2 }}>
          <Typography variant="h7" sx={{ color: '#00A9AD', mb: 1, fontWeight: "Bold" }}>
            Instruksi
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            1. Menjaga pos keamanan.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            2. Menanggapi jika ada pengunjung mencurigakan
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            3. Larangan membuat kegaduhan tanpa sebab
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            4. Menanggapi keluhan keamanan dari warga
          </Typography>
        </Box>

        {!isTaskCompleted && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h7" sx={{ mt: 2, color: '#00A9AD', mb: 1, fontWeight: "Bold" }}>
              Catatan Tambahan
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontStyle: 'italic' }}>
              Tidak ada catatan
            </Typography>
          </Box>
        )}

         {/* Bottom Buttons */}
        {isScanned && !isTaskCompleted && (
          <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
            <Button color="primary" sx={{ fontWeight: "bold", mr: 5,height: "36px",}}>
              Kembali
            </Button>

            <Button variant="contained" sx={{ backgroundColor: "#CE1305", borderRadius: "10px", ml: 5,height: "36px",width: "140px" }} onClick={handleCompleteTask}>
              Selesai
            </Button>
          </Box>
        )}

        {/* Button "Buat Laporan" */}
        {isTaskCompleted && (
          <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' ,fontSize: "50px",}}>
            <Button variant="contained" sx={{ backgroundColor: "#00A9AD", borderRadius: "10px",width: "328px",height : "36px"}}>
              Buat Laporan
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
