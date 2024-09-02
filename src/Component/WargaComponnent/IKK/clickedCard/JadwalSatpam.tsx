import { Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { getColorSudahBelum } from "../../../../Context/SudahorBelumColor.tsx";
import { DataJadwalSatpam } from "../../../../Context/Warga/IKK/jadwalSatpam.tsx";

interface Ihover {
  hover: boolean;
}

const JadwalSatpamIndex: React.FC<Ihover> = ({ hover }) => {
  return (
    <Container>
      <Card
        sx={{
          height:'auto',
           width:'330px',
          transition: "opacity 0.3s ease",
        }}
      >
        <Container sx={{ mb: 2 }}>
          <Stack direction="column" textAlign="center" spacing={2}>
            {/* Judul */}
            <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                Patroli Satpam
            </Typography>

            {/* table */}
            <TableContainer component={Paper}>
                    <Table size="small" align="right">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'#00A9AD', color:'#FFFF', '& > *':{padding:'2px 4px'}}}>
                                
                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Jam
                                </TableCell>

                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Status
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DataJadwalSatpam.map((row)=>(
                                <TableRow 
                                key={row.id}
                                sx={{
                                    marginBottom: 2,
                                    display: "table-row",
                                    borderBottom:'none'
                                  }}
                                >
                                    <TableCell>
                                        <Typography>
                                            {row.waktu}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography sx={getColorSudahBelum(row.status)}>{row.status}</Typography>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
          </Stack>
        </Container>
      </Card>
    </Container>
  );
};

export default JadwalSatpamIndex