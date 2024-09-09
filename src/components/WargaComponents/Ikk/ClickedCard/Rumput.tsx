import { Button, Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { dataPemotonganRumput } from "../../../../context/Warga/IKK/PemotonganRumputData.tsx";
import { getColorSudahBelum } from "../../../../context/SudahorBelumColor.tsx";
import { useNavigate } from "react-router-dom";

//TODO Benerin height dan Button nya
interface Ihover {
    hover: boolean;
}
const RumputIndex: React.FC<Ihover> = ({hover}) => {
    const [tahun, setTahun] = useState<number>(2024);
    const Navigate = useNavigate();

    return(
        <Container>
            <Card sx={{height:'430px', width:'330px', opacity: hover ? 0 : 1,
    transition: 'opacity 0.3s ease'}}>
                <Container sx={{mb:2}}>
                <Stack direction='column' textAlign='center' spacing={2}>
                    {/* Judul */}
                    <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Jadwal Pemotongan Rumput
                    </Typography>

                    {/* Pilih tahun */}
                    <TextField size="small" select label={tahun} onChange={(e)=> setTahun(parseInt(e.target.value))} sx={{color:'#00A9AD', width:'40%'}}></TextField>
                    
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
                            {dataPemotonganRumput.map((row)=>(
                                <TableRow 
                                key={row.id}
                                sx={{
                                    marginBottom: 2,
                                    display: "table-row",
                                    borderBottom:'none',
                                    '& > *': { borderBottom: 'none', padding: '2px 4px' }
                                  }}
                                >
                                    <TableCell>
                                        <Typography>
                                            {row.tanggal.toLocaleDateString()}
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
                    <Button fullWidth onClick={()=> Navigate('/Warga/RiwayatPemotonganRumput')}  sx={{
                        backgroundColor:'#00A9AD', 
                        color:'#FFF',
                        fontSize:'16px',
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        borderRadius:'8px',
                        position:'fixed',
                        bottom:15,
                        width:'75%',
                        ":hover":{backgroundColor:'#00A9AD'}}}>

                    Lapor
                    </Button>

                </Stack>

                </Container>
            </Card>
        </Container>
    )
}

export default RumputIndex