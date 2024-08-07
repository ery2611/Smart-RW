import { Box, Card,CardContent,CardMedia, Typography,Button, Container } from '@mui/material'
import React from 'react'
import Mata from '@mui/icons-material/VisibilityOutlined';
import Lokasi from '@mui/icons-material/LocationOnOutlined';
import Jam from '@mui/icons-material/QueryBuilderOutlined';
import Kalender from '@mui/icons-material/CalendarMonthOutlined';
import { useNavigate } from 'react-router-dom';


function Semua() {
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
    <div style={{justifyContent:'center', display:'fluid', alignContent:"center", alignItems:'center'}}>
         <Box sx={{
        display:'fluid',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    }}>
        <Typography variant='h6' fontWeight='bolder' gutterBottom>SELURUH KEGIATAN PADA HARI INI</Typography>
        <Typography variant='body1' sx={{color:"#A1A5B7", textAlign:'center'}} gutterBottom>Total: 6 Kegiatan</Typography>
       
    </Box>
    <Container sx={{display:'flex',justifyContent:'center'}}>
    <Box sx={{
        display:'fluid',
        justifyContent:'center',
      
        alignItems:'center',
        width:'80%'

    }}>
    <Box sx={{
         display: 'flex',
         flexWrap: 'wrap', 
         justifyContent: 'center', 
         gap: '20px', 
         padding: '10px', 

    }}>
         {[1, 2,2,2,2,2,].map((item) => (
        <Card
          key={item}
          sx={{
            width: '400px',
            display: 'flex', 
            marginRight: '20px', // Jarak antar card
            flexDirection: 'column',
            justifyContent:'center',
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
                      <Button onClick={()=> Navigate('/DetailKegiatan')}><Mata fontSize='large' sx={{color:'#00A9AD'}}  /></Button>
                        
                    </Box>
                </Box>
            </Box>
            </CardContent>
        </Card>
      ))}
    </Box>
    <Box sx={{
        marginBottom:2,
        marginTop:1.2,
        justifyContent:'flex-end',
        display:'flex',
        marginRight:'50px'
    }}>
    <Button onClick={() => Navigate("/Warga")} sx={{color:'#00A9AD', fontWeight:'bolder',  border: '2px solid #00A9AD',
                '&:hover': {
                border: '2px solid #00A9AD',
                color:'#00A9AD',
                
                },

            }} variant="outlined"  >KEMBALI</Button>
    </Box>
    </Box>
    </Container>
   
    
    </div>
   
    
  )
}

export default Semua