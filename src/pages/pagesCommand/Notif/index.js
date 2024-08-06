import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ComplexGrid from '../Nunread';
import TextTerbaca from '../Nread';
import { Stack, Typography } from '@mui/material';
import Bar from '../../../components/CommandComponents/Navbar'


export default function Labtabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box>
      <Bar />
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
    <Box sx={{ width: '100%', borderRadius:'10px' ,typography: 'body1', boxShadow:5 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#00A9AD' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Semua" value="1" />
            <Tab label="Belum Terbaca" value="2" />
            <Tab label="Sudah Terbaca" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <div>
            <ComplexGrid />
          </div>
          <div style={{ marginTop: '16px' }}> {/* Menambahkan jarak ke bawah */}
            <TextTerbaca />
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div>
            <ComplexGrid />
          </div>
        </TabPanel>
          
        <TabPanel value="3">
          <TextTerbaca />
        </TabPanel>
      </TabContext>
    </Box>
    </Box>
   
  );
}