import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function createData(no, detail, bencana, peringatan, color) {
  return { no, detail, bencana, peringatan, color };
}

const rows = [
  createData(1, 'Banjir Bandang', 'Banjir' ,'WASPADA', '#5AF411'),
  createData(2, 'Kebakaran','Kebakaran' ,'SIAGA', '#FFE152'),
  createData(3, 'Tanah Longsor','Tanah Longsor' ,'AWAS', '#EE1717'),
  createData(4, 'Banjir Bandang','Banjir' ,'WASPADA', '#5AF411'),
];

function MyTable() {
  return (
    <Box sx={{ padding: 2, width: '100%', maxWidth: 500, margin: '0 auto',  }}>
      <Card sx={{ boxShadow:5}}>
      <CardHeader
          title={
            <Typography variant="body2" fontWeight='bold' align="center" color="#00A9AD" marginBottom='0'>
            PERINGATAN DINI
            </Typography>
          }
        />
        <CardContent>
          <TableContainer component={Card} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>No</TableCell>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>Bencana</TableCell>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.no}>
                    <TableCell>
                        <Typography variant='caption'>{row.no}</Typography></TableCell>
                    <TableCell>
                        <Box sx={{
                            display:"fluid",
                            justifyContent:'flex-start'
                        }}>
                            <Box>
                            <Typography variant='caption'>{row.detail}</Typography>
                            </Box>
                            <Box>
                            <Typography color='#CFCFCF' variant='caption'>{row.bencana}</Typography>
                            </Box>
                            
                             
                        </Box>
                        </TableCell>
                    <TableCell>
                      <Typography variant='caption' color={row.color}>{row.peringatan}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
 export  default MyTable;
