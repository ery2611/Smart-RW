import { Button, Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { getColorSudahBelum } from "../../../../context/SudahorBelumColor.tsx";
import { DataIkk } from "../../../../context/Warga/IKK/IkkData.tsx";

//TODO Benerin height dan Button nya
interface Ihover {
    hover: boolean;
}
const IkkIndex: React.FC<Ihover> = ({hover}) => {
    const [tahun, setTahun] = useState<number>(2024);
    const [semester, setSemester] = useState<number>(1)
    //todo semester 1 = jan - jun, sem.2 = jul-des

    return(
        <Container>
            <Card sx={{height:'auto', width:'430px', opacity: hover ? 0 : 1,
    transition: 'opacity 0.3s ease'}}>
                <Container sx={{mb:10}}>
                <Stack direction='column' textAlign='center' spacing={2}>
                    {/* Judul */}
                    <Stack direction='column'>
                    <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        IKK
                    </Typography>
                    <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#F05A5A', fontSize:'16px', fontWeight:'bold'}}>
                        Jatuh Tempo: ... Hari Lagi
                    </Typography>
                    </Stack>

                    {/* Pilih tahun */}
                    <Stack direction='row' spacing={3}>
                    <TextField size="small" select label={tahun} onChange={(e)=> setTahun(parseInt(e.target.value))} sx={{color:'#00A9AD', width:'40%'}}></TextField>
                    <TextField size="small" select label={`semester ${semester}`} onChange={(e)=> setSemester(parseInt(e.target.value))} sx={{color:'#00A9AD', width:'40%'}}></TextField>

                    </Stack>
                    
                    {/* table */}
                    <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'#00A9AD', color:'#FFFF', '& > *':{padding:'4px 8px'}}}>
                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Bulan
                                </TableCell>
                                
                                <TableCell 
                                sx={{color:'#FFF',
                                    fontSize:'16px',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",}}
                                >
                                    Nominal
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
                            {DataIkk.map((row)=>(
                                <TableRow 
                                key={row.bulan}
                                sx={{
                                    marginBottom: 2,
                                    display: "table-row",
                                    borderBottom:'none',
                                    '& > *': { borderBottom: 'none', padding: '2px 4px' }
                                  }}
                                >
                                    <TableCell>
                                        <Typography>
                                            {row.bulan}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={getColorSudahBelum(row.status,'nominal')}>
                                            {row.nominal}
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
                        position:'fixed',
                        bottom:15,
                        width:'80%',
                        ":hover":{backgroundColor:'#00A9AD'}}}>

                    Pembayaran
                    </Button>

                </Stack>

                </Container>
            </Card>
        </Container>
    )
}

export default IkkIndex