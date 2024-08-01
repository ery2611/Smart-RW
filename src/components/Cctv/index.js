import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function index() {
  return (
    <Box sx={{
      
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
        }}>
      <Card sx={{ minWidth: 100, minHeight: 330, boxShadow:5 }}>
  
        <CardContent>
          <Typography gutterBottom variant="body1" fontSize='16' fontWeight='bold' component="div" align='center' color='#00A9AD'>
          CCTV
          </Typography>
            <Box sx={{
              display:'flex',
              justifyContent:'space-between'
            }}>
              <Box>
              <Typography gutterBottom variant="body2" component="div" align='center' color='#00A9AD'>
              4 CCTV Aktif
              </Typography>
              </Box>
              <Box>
              <Button variant="contained" size='sm' sx={{
                background:'#00A9AD',
                color:'white'
              }}>
              Lihat CCTV
            </Button>
              </Box>
            </Box>
              <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop:'0  '
      }}>
              <img src=''

                    alt="Story"
                    style={{backgroundColor:'#EFEFEF' ,width: '250px',height:'120px' ,marginTop: "10px", justifyContent:'center', alignItems:'center' }}>
                </img>
                <img src=''

                    alt="Story"
                    style={{backgroundColor:'#EFEFEF' ,width: '250px',height:'120px' ,marginTop: "10px", justifyContent:'center', alignItems:'center' }}>
                </img>
                <img src=''

                    alt="Story"
                    style={{backgroundColor:'#EFEFEF' ,width: '250px',height:'120px' ,marginTop: "10px", justifyContent:'center', alignItems:'center' }}>
                </img>
                <img src=''

                    alt="Story"
                    style={{backgroundColor:'#EFEFEF' ,width: '250px',height:'120px' ,marginTop: "10px", justifyContent:'center', alignItems:'center' }}>
                </img>
              </Box>
    
        </CardContent>
      
    </Card>
        </Box>
  )
}

export default index