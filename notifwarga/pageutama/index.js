import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sesudahterbaca from '../sudahterbaca';
import Sebelumterbaca from '../belumterbaca';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Labtabs() {
  const [value, setValue] = React.useState('1');

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
            COMMAND CENTER
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
    <Box sx={{ width: '100%', borderRadius:'10px' ,typography: 'body1',backgroundColor : '#FEFEFE' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Semua" value="1" />
            <Tab label="Belum Terbaca" value="2" />
            <Tab label="Sudah Terbaca" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#A1A5B7' }}>
            Hari Ini
          </Typography>
          <div>
            <Sebelumterbaca />
          </div>
          <div style={{ marginTop: '16px' }}> {/* Menambahkan jarak ke bawah */}
            <Sesudahterbaca />
          </div>

          <div style={{ marginTop: '20px' }}>   <Divider /></div>
          

          <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#A1A5B7' }}>
            Kemarin
          </Typography>
          <div>
            <Sesudahterbaca />
          </div>
          <div style={{ marginTop: '16px' }}> {/* Menambahkan jarak ke bawah */}
            <Sesudahterbaca />
          </div>

        </TabPanel>

        <TabPanel value="2">
          <div>
            <Sebelumterbaca />
          </div>
        </TabPanel>
          
        <TabPanel value="3">
          <Sesudahterbaca />
        </TabPanel>
      </TabContext>
    </Box>
    </Box>
   
  );
}