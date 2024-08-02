import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from 'react-chartjs-2';
import { Paper, Typography, Select, MenuItem, FormControl, Box, Grid, Card } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Warga', 'Tamu', 'Pengunjung', 'Tidak Dikenal'],
  datasets: [
    {
      label: 'Persentase',
      data: [40, 8, 30, 22],
      backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#FDB45C'],
      hoverBackgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#FDB45C'],
    },
  ],
};

function App() {
  const [year, setYear] = useState('2024');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="400px" marginTop='25px'>
      <Paper sx={{ padding: 9, textAlign: 'center', minWidth: '230px', marginTop:'0px',marginLeft:'59px',
         maxHeight:220, display: 'flex', flexDirection: 'column', justifyContent: 'center',  boxShadow:5 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body2" style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color:'#00A9AD' }}>
            ONE GATE SYSTEM
          </Typography>
          <Typography variant="body1" style={{ fontSize: 14 }}>{year}</Typography>
          <FormControl variant="outlined" style={{ marginTop: 8, marginBottom: 8, minWidth: 120 }}>
            <Select value={year} onChange={handleChange} style={{ height: 36 }}>
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box height={150} display='flex' justifyContent='center' alignItems='center'>
          <Pie data={data} />
        </Box>
        <Grid container spacing={2} marginTop={1} fontSize={12}>
          <Grid item xs={6} textAlign="center">
            <Typography   variant="caption" style={{ color: '#FFCE56' }}>● WARGA:  </Typography>
            <Typography  variant="caption">40%</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Typography   variant="caption" style={{ color: '#FF6384' }}>● TAMU:  </Typography>
            <Typography  variant="caption">8%</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Typography   variant="caption" style={{ color: '#FDB45C' }}>● TIDAK DIKENAL:  </Typography>
            <Typography  variant="caption">22%</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Typography  variant="caption" style={{ color: '#36A2EB' }}>● PENGUNJUNG:  </Typography>
            <Typography  variant="caption">30%</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}



export default App;
