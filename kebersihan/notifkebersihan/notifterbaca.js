import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 1320,
  flexGrow: 1,
  backgroundColor: '#EEEEE',
  color: '#000',
  width: '100%',
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

export default function Nsudahterbaca() {
  return (
    <CustomPaper sx={{boxShadow:5,borderRadius: 3,}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
        <CustomTypography variant="body2" sx={{color : '#A1A5B7',mb : 1}}>
          IKK
        </CustomTypography>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Masuknya laporan pengaduan atas nama Yan Azhari
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
    </CustomPaper>
  );
}
