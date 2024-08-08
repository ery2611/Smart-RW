import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import HealthIcon from '@mui/icons-material/LocalHospital';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined';

const Dashboard = () => {
  return (
    <Box>

      <Typography variant="h6" sx={{ mt: 2, textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
        JENIS PANGGILAN
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 5, 
          mt: 5, 
          flexWrap: 'wrap' 
        }}
      >
        <div>
          <Box sx={{ bgcolor: '#FF6B6B', p: 8, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4,mr : 4, }}>
            <HealthIcon sx={{ fontSize: 60, color: '#fff', mb: 1 }} />
            <Typography variant="subtitle1" color="white">KESEHATAN</Typography>
          </Box>
        </div>
        <div>
          <Box sx={{ bgcolor: '#FFA726', p: 8, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4,mr : 4,}}>
            <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 60, color: '#fff', mb: 1 }} />
            <Typography variant="subtitle1" color="white">KEBAKARAN</Typography>
          </Box>
        </div>
        <div>
          <Box sx={{ bgcolor: '#4CAF50', p: 8, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4,mr : 4, }}>
            <FloodOutlinedIcon sx={{ fontSize: 60, color: '#fff', mb: 1 }} />
            <Typography variant="subtitle1" color="white">BENCANA</Typography>
          </Box>
        </div>
        <div>
          <Box sx={{ bgcolor: '#4169E1', p: 8, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4,mr : 4, }}>
            <LocalPoliceOutlinedIcon sx={{ fontSize: 60, color: '#fff', mb: 1 }} />
            <Typography variant="subtitle1" color="white">KEAMANAN</Typography>
          </Box>
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', mt: 2 }}>
        <Box sx={{ width: '65%', textAlign: 'end' }}>
          <Button variant="contained" sx={{ height: 38, background: '#00A9AD', mr: 22 }}>LIHAT RIWAYAT</Button>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ mt: 10, textAlign: 'center' }}>
        PETUGAS YANG MERESPON
      </Typography>
    </Box>
  );
};

export default Dashboard;
