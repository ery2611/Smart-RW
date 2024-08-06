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
                <Typography variant='h6' sx={{color:'#00A9AD'}}>Kegiatan Minggu Ini</Typography>
            </Box>
            <Box>
              <Button sx={{backgroundColor:'#00A9AD', color:'white',boxShadow:5,marginRight:'10px',
              '&:hover': {
                backgroundColor: '#00A9AD',
                color:'white',
                },}}>Semua Kegiatan</Button>
            </Box>
        </Box>
        <Box sx={{ padding: 2, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
      {[1, 2].map((item) => (
        <Card
          key={item}
          sx={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            
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
             {truncateText('Pengajian Aula Kemang Pratama',30)}
            </Typography>
            
           
            <Typography variant="body2" color="text.secondary">
                {truncateText('Pengajian Aula bagi kaum perempuan Kemang Pratama 2',40)}
              
            </Typography>
            <Box sx={{
                display:'fluid',
                justifyContent:'flex-start',
                marginTop:'10px'
            }}>
                <Box sx={{
                    display:'flex',
                    justifyContent:'flex-start'
                }}>
                    <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                         <Kalender sx={{color:'#00A9AD'}} />
                         <Typography variant='caption' sx={{marginLeft:'5px', marginTop:'5px'}}>Selasa,02 / 01 / 2024</Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'flex-start', marginLeft:'20px'}}>
                         <Jam sx={{color:'#00A9AD'}} />
                         <Typography variant='caption' sx={{marginLeft:'5px', marginTop:'5px'}}>10.00-11.30</Typography>
                    </Box>
                  
                </Box>
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