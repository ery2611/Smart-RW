import React from "react"
import {Card, Container, Typography } from "@mui/material"
import { ChatOutlined, PendingActionsSharp, Security, Toys } from "@mui/icons-material";

interface TypeCard {
    jenisCard: string;
}

const MainCard: React.FC<TypeCard> = ({jenisCard}) =>{
    return(
        <Container>
                <Card sx={{alignContent:'space-between', textAlign:'center', height:'180px', width:'330px'}}>

                    {/* Judul */}
                    {jenisCard === 'satpam'? (
                    <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Patroli Satpam Selanjutnya
                    </Typography>
                    ): jenisCard === 'kendaraan'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Kendaraan Saya
                    </Typography>
                    ): jenisCard === 'pengaduan'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Pengaduan Keamanan
                    </Typography>
                    ): jenisCard === 'jatuhTempo'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Jatuh Tempo IKK
                    </Typography>
                    ): jenisCard === 'tagihanAir'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Tagihan Air Pam Bulan Ini
                    </Typography>
                    ): jenisCard === 'rumput'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Pemotongan Rumput Hari Ini
                    </Typography>
                    ): jenisCard === 'sampah'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Pengambilan Sampah Hari Ini
                    </Typography>
                    ): jenisCard === 'jadwalSapu'? (
                        <Typography sx={{fontFamily:'Montserrat, sans-serif', color:'#00A9AD', fontSize:'20px', fontWeight:'bold'}}>
                        Jadwal Sapu Hari Ini
                    </Typography>
                    ):null}
                    
                    {/* Icon */}
                    {jenisCard === 'satpam'? (
                        <Security sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'kendaraan'? (
                        <Toys sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'pengaduan'? (
                        <ChatOutlined sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'jatuhTempo'? (
                        <PendingActionsSharp sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'tagihanAir'? (
                        <PendingActionsSharp sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'rumput'? (
                        <PendingActionsSharp sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'sampah'? (
                        <PendingActionsSharp sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ): jenisCard === 'jadwalSapu'? (
                        <PendingActionsSharp sx={{width:'100px', height:'100px', color:'#00A9AD', mt:1}}/>
                    ):null}

                    <Typography sx={{fontFamily:'Montserrat, sans-serif', fontSize:'20px', fontWeight:'bold'}}> 20</Typography>
                </Card>
                
            {/* judul */}
        </Container>
    )
}

export default MainCard;