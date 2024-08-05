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

function createData(no, warga, jenis ) {
  return { no, warga, jenis };
}

const rows = [
  createData(1, 'Khairul Mustain', 'Kesehatan'),
  createData(2, 'Deddy Sunarya', 'Kebakaran'),
  createData(3, 'Yan Adhari', 'Bencana'),
  createData(4, 'Dafta Syarif', 'Keamanan'),
];

function MyTable() {
  return (
    <Box sx={{ padding: 2, width: '100%', maxWidth: 500, margin: '0 auto', marginLeft:'10px', marginTop:'10px'}}>
      <Card sx={{  boxShadow:5}}>
      <CardHeader
          title={
            <Typography variant="body2" fontWeight='bold' align="center" color="#00A9AD" marginBottom='0'>
              PANGGILAN DARURAT
            </Typography>
          }
        />
        <CardContent>
          <TableContainer component={Card} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>No</TableCell>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>Warga</TableCell>
                  <TableCell sx={{color:'#A0A1A4', fontWeight:'medium'}}>Jenis</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.no}>
                    <TableCell>
                        <Typography variant='caption'>{row.no}</Typography></TableCell>
                    <TableCell>
                    <Typography variant='caption'>{row.warga}</Typography>
                        </TableCell>
                    <TableCell>
                      <Typography variant='caption' >{row.jenis}</Typography>
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
