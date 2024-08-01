import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
 import Button from '@mui/material/Button';


function index() {
  const StatusBadge = styled(Box)(({ theme }) => ({
    backgroundColor: "#D4FFDB",

    color: "#5AF411",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        marginBottom:'10px',
        overflowY: "auto",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "fluid",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            DETAIL
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Card sx={{ maxWidth: 800, margin: "0 auto", borderRadius: 2 }}>
            <CardContent>
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                gutterBottom
              >
                INFORMASI OBJEK
              </Typography>
              <StatusBadge>Tidak Mencurigakan</StatusBadge>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                  gap: "180px", // Mengatur jarak antar box
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" color="#A0A1A4">
                    Nama Objek
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Tipe Objek
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Aktivitas Objek
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" color="#333333">
                  
                    : Khoirul Mustaank
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  
                    : Tamu
                  </Typography>
                  <Typography variant="body1" color="#333333">
                 
                    : Berkunjung ke rumah bapak Budi
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box  sx={{
            marginTop: "20px",
          }}>
            <Card sx={{ maxWidth: 800, margin: "0 auto", borderRadius: 2 }}>
                <CardContent>
                <Typography
                textAlign="center"
                variant="h6"
                component="div"
                gutterBottom
              >
                KETERANGAN OBJEK
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                  gap: "180px", // Mengatur jarak antar box
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" color="#A0A1A4">
                    Tanggal Masuk
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Waktu Masuk
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Tanggal Keluar
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Waktu Keluar
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" color="#333333">
                  
                    : 06/01/24
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  
                    : 06:00
                  </Typography>
                  <Typography variant="body1" color="#333333">
                 
                    : 06/01/24
                    </Typography>
                    <Typography variant="body1" color="#333333">
                 
                    : 08:00
                    </Typography>
                </Box>
              </Box>
              <Box sx={{
                display:'fluid',
                justifyContent:'flex-start'
              }}>
                <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
              }}>
                 <Typography variant="body1" color="#A0A1A4">
                    Tujuan Objek 
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Melakukan meeting terkait hal pekerjaan dengan bapak Budi di rumahnya
                </Typography>
              </Box>
                <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
              }}>
                <Typography variant="body1" color="#A0A1A4">
                    Keterangan 
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim  veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat
                </Typography>
                </Box>
                <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
              }}>
                    <Typography variant="body1" color="#A0A1A4">
                    Media
                  </Typography>
                  <img 
    src=''
    alt="Media"
    style={{
        backgroundColor: '#EFEFEF',
        width: '240px', // Ubah dari 120px menjadi 240px atau ukuran yang Anda inginkan
        height: '240px', // Ubah dari 120px menjadi 240px atau ukuran yang Anda inginkan
        marginTop: '10px',
        display: 'block', 
        borderRadius:'10px'
    }}
/>

                </Box>
              </Box>
                </CardContent>
            </Card>
        </Box>
        <Box sx={{
            justifyContent:'flex-end',
            display:'flex',
            marginTop:'15px',
            marginBottom:'15px',
            marginRight: 4
        }}>
          
            <Button sx={{color:'#00A9AD', fontWeight:'bold',  border: '2px solid #00A9AD',
                '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD'
                },

            }} variant="outlined">Kembali</Button>
      
        </Box>
      </Box>
    </Container>
  );
}

export default index;
