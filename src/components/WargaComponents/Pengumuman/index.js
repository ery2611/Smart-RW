import React from 'react'
import { Box, Button, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Mata from '@mui/icons-material/VisibilityOutlined';
import Lokasi from '@mui/icons-material/LocationOnOutlined';
import Jam from '@mui/icons-material/QueryBuilderOutlined';
import Kalender from '@mui/icons-material/CalendarMonthOutlined';

function index() {
    const truncateText = (text, maxLength) => {
        if (!text) {
          return "";
        }
        if (text.length <= maxLength) {
          return text;
        }
        return text.substring(0, maxLength) + "...";
      };
  return (
    <Box sx={{
        display:"fluid",
        justifyContent:'flex-start',
        marginTop:'10px',
    }}>
        <Box sx={{
            justifyContent:'space-between',
            display:'flex'
        }}>
            <Box>
                <Typography variant='h6' sx={{color:'#00A9AD'}}>Pengumuman Minggu Ini</Typography>
            </Box>
            <Box>
              <Button sx={{backgroundColor:'#00A9AD', color:'white',boxShadow:5,marginRight:'10px',
              '&:hover': {
                backgroundColor: '#00A9AD',
                color:'white',
                },}}>Semua Pengumuman</Button>
            </Box>
        </Box>
        <Box sx={{ padding: 2, display: 'flex',  overflowX: 'auto', // Aktifkan scroll horizontal
        whiteSpace: 'nowrap', }}>
      {[1,2,2,2,2,2].map((item) => (
        <Card
          key={item}
          sx={{
            width: '300px',
            display: 'inline-flex', 
            marginRight: '10px', // Jarak antar card
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
            
           
            <Typography variant="body2" color="text.secondary">
                {truncateText('Bulan ini ada akan ada renovasi untuk Toilet pria ',45)}
              
            </Typography>
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
                        <Mata fontSize='large' sx={{color:'#00A9AD'}} />
                    </Box>
                </Box>
            </Box>
            </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  )
}

export default index