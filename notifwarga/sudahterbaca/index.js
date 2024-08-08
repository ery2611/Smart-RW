import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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
  alignSelf: 'center'
});

const Divider = styled('hr')({
  border: 0,
  height: 1,
  backgroundColor: '#C5BDBD',
  margin: '10px 0',
});

export default function Sesudahterbaca() {
  return (
    <CustomPaper sx={{boxShadow:5,borderRadius: 3,}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <CustomTypography variant="body2" sx={{color : '#A1A5B7',mb : 1}}>
            IKK
          </CustomTypography>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Tagihan Iuran Kebersihan
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs>
          <CustomTypography variant="body2" sx={{color : '#A1A5B7',}}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          </CustomTypography>
        </Grid>
        <Grid item>
          <TimeTypography variant="body2">
            09:20
          </TimeTypography>
        </Grid>
      </Grid>
    </CustomPaper>
  );
}