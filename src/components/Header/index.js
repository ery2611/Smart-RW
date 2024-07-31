import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import { Box } from '@mui/material';

const CommandCenterAppBar = () => {
  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: 'white'}}>
      <Toolbar sx={{ display:'flex' }}>
        
      <Box sx={{ 
          backgroundColor: '#00A9AD', 
          borderRadius: '50px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Mengatur posisi konten di sebelah kiri
          padding: 0,
          height: 48, // Tinggi Box
          width: 48,  // Lebar Box
          position: 'relative' // Menggunakan posisi relatif untuk elemen child
        }}>
          <AdbIcon sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            height: 40, 
            width: 40 ,
            color:'white'
          }} />
        </Box>
        
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 1, color:'#00A9AD', fontSize:'1.5rem', fontWeight:'bolder' }}>
          SMART CITY
        </Typography>
        <IconButton aria-label="notifications" color="inherit">
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography variant="body1" component="div" sx={{ marginLeft: 1, marginRight:1 }}>
          Lorem Ipsum
        </Typography>
        <Avatar alt="Avatar" src="user_avatar_url_here" />
        
      </Toolbar>
    </AppBar>
  );
};

export default CommandCenterAppBar;
