import { Button, Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { getColorSudahBelum } from "../../../../context/SudahorBelumColor.tsx";
import { DataPengaduan } from "../../../../context/Warga/IKK/PengaduanData.tsx";
import { useNavigate } from "react-router-dom";

interface Ihover {
  hover: boolean;
}

const PengaduanIndex: React.FC<Ihover> = ({ hover }) => {
  const Navigate = useNavigate();
  

  return (
    <Container>
      <Card
        sx={{
          height:'100%',
           width:'330px',
          transition: "opacity 0.3s ease",
          mb:'30'
        }}
      >
        <Container sx={{ mb: 11 }}>
          <Stack direction="column" textAlign="center" spacing={2}>
            {/* Judul */}
            <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                Pengaduan Saya
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
                                    Tanggal
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
                            {DataPengaduan.map((row)=>(
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
                                            {row.tanggal.toLocaleDateString()}
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

                    {/* Button */}
                    <Button fullWidth onClick={()=> Navigate('/Warga/RiwayatPengaduan')} sx={{
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
  );
};

export default PengaduanIndex