import React from 'react'
import { Box, Button, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Mata from '@mui/icons-material/VisibilityOutlined';
import Lokasi from '@mui/icons-material/LocationOnOutlined';
import Jam from '@mui/icons-material/QueryBuilderOutlined';
import Kalender from '@mui/icons-material/CalendarMonthOutlined';
import { useNavigate } from 'react-router-dom';

function Index() {
  const Navigate = useNavigate();
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
                <Typography variant='h6' sx={{color:'#00A9AD'}}>Forum</Typography>
            </Box>
            <Box>
              <Button sx={{backgroundColor:'#00A9AD', color:'white',boxShadow:5,marginRight:'10px',
              '&:hover': {
                backgroundColor: '#00A9AD',
                color:'white',
                },}}>Semua Forum</Button>
            </Box>
        </Box>
        <Box sx={{ padding: 2, display: 'flex',  overflowX: 'scroll', // Aktifkan scroll horizontal
        whiteSpace: 'nowrap','&::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        'scrollbar-width': 'none'  /* Firefox */ }}>
      {[1,2,2,2,2,2].map((item) => (
        <Card
          key={item}
          sx={{
            width: '380px',
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
             {truncateText('Forum Les Anak Bahasa Inggris TK-SD-SMP',30)}
            </Typography>
            
           
            <Typography variant="body2" color="text.secondary">
                {truncateText('Forum untuk pendataan dan pendaftaran lhjbyghkbvtuyjghkbn,es anak RW 02',30)}
               
            </Typography>
            <Box sx={{
                display:'flex',
                justifyContent:'flex-end',
                marginTop:'10px'
            }}>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'6px'
                }}>
                    <Box sx={{marginRight:'20px'}}>
                    <Button sx={{backgroundColor:'#00A9AD', color:'white',boxShadow:5,marginRight:'10px',width:'130px',
              '&:hover': {
                backgroundColor: '#00A9AD',
                color:'white',
                },}}>Gabung Forum</Button>
                    </Box>
                    <Box>
                    <Button variant='outlined' onClick={()=> Navigate('/Forum/Lihat')} sx={{border:'2px solid #00A9AD', color:'#00A9AD',
                fontWeight:'bolder',marginRight:'10px',width:'120px',
              '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD',
                fontWeight:'bolder'
                },}}>Lihat Forum</Button>
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

export default Index