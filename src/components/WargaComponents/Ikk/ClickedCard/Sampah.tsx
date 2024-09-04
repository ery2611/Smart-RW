import { Button, Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { DataPembuanganSampah } from "../../../../context/Warga/IKK/PembuanganSampahData.tsx";
import { getColorSudahBelum } from "../../../../context/SudahorBelumColor.tsx";

interface Ihover {
    hover: boolean;
}

const SampahIndex: React.FC<Ihover> = ({hover}) => {
    const [pekan, setPekan] = useState<string>("Pekan ke-1")

    return(
        <Container>
            <Card sx={{height:'auto', width:'340px', opacity: hover ? 0 : 1,
    transition: 'opacity 0.3s ease'}}>
                <Container sx={{mb:2}}>
                <Stack direction='column' textAlign='center' spacing={2}>
                    {/* Judul */}
                    <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Jadwal Pengambilan Sampah
                    </Typography>

                    {/* Pilih tahun */}
                    <TextField size="small" select label={pekan} onChange={(e)=> setPekan(e.target.value)} sx={{color:'#00A9AD', width:'50%'}}></TextField>
                    
                    {/* table */}
                    <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'#00A9AD', color:'#FFFF', '& > *':{borderBottom:'none',padding:'2px 8px'}}}>
                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Tanggal
                                </TableCell>
                                
                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Waktu
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
                            {DataPembuanganSampah.map((row)=>(
                                <TableRow 
                                key={row.id}
                                sx={{
                                    marginBottom: 2,
                                    display: "table-row",
                                    borderBottom:'none',
                                    '& > *':{borderBottom:'none',padding: '4px 16px'}
                                  }}
                                >
                                    <TableCell>
                                        <Typography>
                                            {row.hari}
                                        </Typography>
                                    </TableCell>
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

                    {/* Button lapor */}
                    <Button fullWidth sx={{
                        backgroundColor:'#00A9AD', 
                        color:'#FFF',
                        fontSize:'16px',
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        borderRadius:'8px',
                        marginTop:'auto',
                        bottom:0,
                        ":hover":{backgroundColor:'#00A9AD'}}}>

                    Lapor
                    </Button>

                </Stack>

                </Container>
            </Card>
        </Container>
    )
}

export default SampahIndex;