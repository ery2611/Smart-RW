import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
 import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Index() {
  const Navigate = useNavigate();
  const StatusBadge = styled(Box)(({ theme }) => ({
    backgroundColor: "#AEF4F0",
    fontWeight:'bold',
    color: "#74D6D0",
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
          <Typography variant="H6" fontWeight="bold">
           JADWAL PETUGAS
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
                INFORMASI PETUGAS
              </Typography>
              <StatusBadge>PAGI</StatusBadge>
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
                    Nama Petugas
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Jam Mulai
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Jam Selesai
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
                  
                    : 08.30
                  </Typography>
                  <Typography variant="body1" color="#333333">
                 
                    : 10.00
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
                INFORMASI PETUGAS
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
                    Kepala Kebersihan
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Tugas
                  </Typography>
                  <Typography variant="body1" color="#A0A1A4">
                    Hari Bertugas
                  </Typography>
                 
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" color="#333333">
                  
                    : Budi Abdurrahman
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  
                    : Mengangkut sampah dengan truk sampah
                  </Typography>
                  <Typography variant="body1" color="#333333">
                 
                    : Senin,2 Januari 2024
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
                   Lokasi Tugas
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Area perumahan RW 36 Kemang Pratama
                </Typography>
              </Box>
                <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
              }}>
                <Typography variant="body1" color="#A0A1A4">
                    Keterangan Tugas
                  </Typography>
                  <Typography variant="body1" color="#333333">
                  Mengangkut sampah-sampah yang ada di tempat 
                  sampah masing-masing rumah area RW 36 dengan truk sampah
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
          
            <Button onClick={() => Navigate("/Warga/Kebersihan")} sx={{color:'#00A9AD', fontWeight:'bolder',  border: '2px solid #00A9AD',
                '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD',
                
                },

            }} variant="outlined"  >KEMBALI</Button>
      
        </Box>
      </Box>
    </Container>
  );
}

export default Index;
