import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ComplexGrid from './pagetwo';
import TextTerbaca from './pageterbaca';
import BackDashboard from './backtodashboard';

export default function Labtabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', typography: 'body1', backgroundColor: '#EFEFEF' }}>
      <Box component="h1" sx={{ color: '#00A9AD' }}>
        NOTIFIKASI
        <BackDashboard/>
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#A1A5B7' }}>
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
  );
}
