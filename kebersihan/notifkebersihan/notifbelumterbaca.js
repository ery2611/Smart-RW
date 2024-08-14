import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const CustomPaper = styled(Paper)(({ theme, bgcolor }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 1500,
  flexGrow: 1,
  backgroundColor: bgcolor || '#19F4D6',
  boxShadow:20,
  cursor: 'pointer', // Optional: changes cursor to pointer to indicate it's clickable
}));

const CustomTypography = styled(Typography)({
  color: '#000',
  textAlign: 'left'
});

const TimeTypography = styled(Typography)({
  color: '#000',
  alignSelf: 'center',
 
});

const Divider = styled('hr')({
  border: 0,
  height: 1,
  backgroundColor: '#C5BDBD',
  margin: '10px 0',
});

export default function Nbelumterbaca() {
  const [bgColor, setBgColor] = useState('#19F4D6');

  const handleClick = () => {
    setBgColor('#EEEEE');
  };

  return (
    //bye
    <CustomPaper bgcolor={bgColor} onClick={handleClick} sx={{boxShadow:5,borderRadius: 3,}}>
      <Box container spacing={2}>
        <Box item xs={12}>
          <CustomTypography variant="body2" sx={{color : '#A1A5B7', mb : 1}}>
            Laporan
          </CustomTypography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Masuknya Laporan pengaduan warga atas nama Yan Azhari
          </Typography>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CustomTypography variant="body2" sx={{color : '#A1A5B7'}}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          </CustomTypography>
          <TimeTypography variant="body2">
            09:20
          </TimeTypography>
        </Box>
        </Box>
        </Box>
    </CustomPaper>
  );
}
