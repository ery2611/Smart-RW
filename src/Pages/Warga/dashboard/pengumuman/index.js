import { Box, Stack, Typography, Card, CardContent, Container, CardMedia, Button } from "@mui/material";
import Mata from '@mui/icons-material/VisibilityOutlined';
import Lokasi from '@mui/icons-material/LocationOnOutlined';
import { useNavigate } from "react-router";

    const truncateText = (text, maxLength) => {
      
        if (!text) {
          return "";
        }
        if (text.length <= maxLength) {
          return text;
        }
        return text.substring(0, maxLength) + "...";
      };

const Pengumuman = () => {
  const Navigate = useNavigate();
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
    <Box>
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
              Pengumuman
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* card hari dan tanggal */}
      <Box sx={{ justifyContent: "center", width: "100%", display: "flex" }}>
        <Card
          sx={{
            boxShadow: 5,
            maxHeight: "300px",
            width: "600px",
            borderRadius: "10px",
          }}
        >
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
                  <Typography sx={{ color: "#A1A5B7" }}>Hari</Typography>

                  <Typography>: {formatHari}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Typography sx={{ color: "#A1A5B7" }}>Tanggal</Typography>
                  <Typography>: {formatTanggal}</Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* card yang akan digunakan */}
      <Box
        sx={{
          display:'flex',
          justifyContent: "center",
          overflowY: "auto",
          width: "100%",
          marginTop: "30px"
        }}
      >
        <Box width='100%' textAlign='center'>
        <Stack direction='column'> 
         <Typography variant='h6' fontWeight='bolder' gutterBottom>SELURUH PENGUMUMAN PADA HARI INI</Typography>
         <Typography variant='body1' sx={{color:"#A1A5B7", textAlign:'center'}} gutterBottom>Total: 6 Pengumuman</Typography>
         {/* jumlah pengumuman ambil dari data */}
        </Stack>

        <Container sx={{width:'60%'}}>
            <Box sx={{display:'flex',justifyContent:'space-between', flexWrap:'wrap'}}>
                {/* diambil dari data nantinya agar jumlah nya dapat disesuaikan */}
            {[1,2,2,2,2,2].map((item) => (
        <Card
          key={item}
          sx={{
            mt:2,
            width: '300px',
            display: 'inline-flex', 
            marginRight: '20px', // Jarak antar card
            flexDirection: 'column',
            flexShrink: 0 // Menghindari penyusutan card
            
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="/path-to-your-image.png" // Ganti dengan path gambar yang benar
            alt="Pengajian Banner"
            sx={{
                backgroundColor:'#EFEFEF'
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{
                color:'#00A9AD',
                fontWeight:'bolder',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'        
            }}>
             {truncateText('Renovasi Masjid',30)}
            </Typography>
            
           <Box sx={{
            display:'flex',
            justifyContent:'flex-start'
           }}>
           <Typography variant="body2" color="text.secondary">
                {truncateText('Bulan ini ada akan ada renovasi untuk Toilet pria ',30)}
              
            </Typography>
           </Box>
           
            <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
            }}>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'6px'
                }}>
                    <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                         <Lokasi sx={{color:'#EE1717'}} />
                         <Typography variant='caption' sx={{marginLeft:'5px', marginTop:'5px', fontWeight:'bold'}}>Kemang Pratama 2</Typography>
                    </Box>
                    <Box>
                      <Button onClick={()=> Navigate('/DetailPengumuman')}>
                      <Mata fontSize='large' sx={{color:'#00A9AD'}} />
                      </Button>
                        
                    </Box>
                </Box>
            </Box>
            </CardContent>
        </Card>
      ))}

            </Box>
        </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Pengumuman;
