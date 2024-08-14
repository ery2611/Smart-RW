import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Nbelumterbaca from './notifbelumterbaca';
import Nsudahterbaca from './notifterbaca';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Pagenotifkebersihan() {
  const [value, setValue] = React.useState('1');
  const [belumTerbacaCount, setBelumTerbacaCount] = React.useState(1);
  const [sudahTerbacaCount, setSudahTerbacaCount] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const Divider = styled('hr')({
    border: 0,
    height: 1,
    backgroundColor: '#C5BDBD',
    margin: '10px 0',
  });

  return (
    <Box>
      <Box sx={{ marginBottom: '5px', display: "flex", height: "3%", width: "100%" }}>
        <Stack direction="column" textAlign='left'>
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18, fontWeight:'bold' }}
          >
            KEBERSIHAN
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography variant="h9" align="center" sx={{color:'black', fontWeight:'bold'}}>
              Notifikasi
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ width: '100%', borderRadius:'10px', typography: 'body1', backgroundColor : '#FEFEFE' }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Semua" value="1" />
              <Tab label="Belum Terbaca" value="2" />
              <Tab label="Sudah Terbaca" value="3" />
            </TabList>
          </Box>

          <Box sx={{ mt: 2 }}> 
          <Typography variant="body2" sx={{ color: '#A1A5B7' }}>
            {belumTerbacaCount} notifikasi belum terbaca dan {sudahTerbacaCount} notifikasi sudah terbaca
          </Typography>
        </Box>

          <TabPanel value="1">
            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#A1A5B7' }}>
              Hari Ini
            </Typography>
            <div>
              <Nbelumterbaca />
            </div>
            <div style={{ marginTop: '16px' }}>
              <Nsudahterbaca />
            </div>

            <div style={{ marginTop: '20px' }}>   <Divider /></div>

            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#A1A5B7' }}>
              Kemarin
            </Typography>
            <div>
              <Nsudahterbaca />
            </div>
            <div style={{ marginTop: '16px' }}>
              <Nsudahterbaca />
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div>
              <Nbelumterbaca />
            </div>
          </TabPanel>
          
          <TabPanel value="3">
            <Nsudahterbaca />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
