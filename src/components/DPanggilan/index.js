import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
 import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Index() {
  const Navigate = useNavigate();
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
                INFORMASI PANGGILAN
              </Typography>
              <StatusBadge>Diterima</StatusBadge>
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
                    Nama Warga
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Jenis Panggilan
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Tanggal Pengaduan
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Waktu Pengaduan
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
                  
                    : Keamanan
                  </Typography>
                  <Typography variant="body1" color="#333333">
                 
                    : 06 / 01/ 2024
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
                    Lokasi Panggilan
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Jalan Kemang Dahlia Blok Z no. 12, RT 02/ RW 02
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
                KETERANGAN 
              </Typography>
              
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
                    Alasan Pemanggilan
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Ada orang tidak jelas yang setiap hari keliling keliling depan rumah saya, 
                  entah apa tujuan orang tersebut tetapi terlihat mencurigakan
                </Typography>
              </Box>
                <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
              }}>
                <Typography variant="body1" color="#A0A1A4">
                    Keterangan Panggilan
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim  veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat
                </Typography>
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
          
            <Button onClick={() => Navigate("/Panggilan")} sx={{color:'#00A9AD', fontWeight:'bold',  border: '2px solid #00A9AD',
                '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD'
                },

            }} variant="outlined"  >Kembali</Button>
      
        </Box>
      </Box>
    </Container>
  );
}

export default Index;
