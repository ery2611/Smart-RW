import { ArrowBack } from "@mui/icons-material";
import { Avatar, Box, Card, Container, IconButton, Stack, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import React, { useState } from "react";
import MainCard from "../../../Component/WargaComponnent/IKK/mainCard/index.tsx";
import RumputIndex from "../../../Component/WargaComponnent/IKK/clickedCard/rumput.tsx";
import SampahIndex from "../../../Component/WargaComponnent/IKK/clickedCard/sampah.tsx";
import JadwalSapuIndex from "../../../Component/WargaComponnent/IKK/clickedCard/JadwalSapu.tsx";


export const IkkMain: React.FC = () => {
    const [hover3, setHover3] = useState<boolean>(true)

    return(
        <Box sx={{height:'auto'}}>
            {/* navbar */}
      <Card
        sx={{
          width: "100%",
          display: "flex",
          height: 54,
          alignContent: "center",
          boxShadow: 4,
          backgroundColor: "#FBFAFA",
        }}
      >
        <IconButton>
          <ArrowBack/>
        </IconButton>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            color: "#00A9AD",
            alignContent: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: 14,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          detail laporan
        </Typography>
        <Box sx={{ alignContent: "center" }}>
          <Avatar src="/path-to-profile-pic.jpg" />
        </Box>
      </Card>

      <Container>

        {/* Box untuk alamat */}
        <Box sx={{display:'flex', justifyContent:'center', mt:2}}>
            <Home //! minta logo asli ke bang eri
            sx={{height:'36px', width:'30px', color:'#00A9AD'}}
            />
            <Card sx={{alignContent:'center', pr:2, pl:2, ml:1}}>
                <Typography sx={{alignContent:'center',display:'flex', justifyContent:'center', fontFamily:'Montserrat, sans-serif', fontWeight:'24px', color:'#888888', }}>
                Jl. Kemang Dahlia 1 Blok Y no 1
                </Typography>
            </Card>
        </Box>

          <Stack direction='column' spacing={3} sx={{mt:2}}>
        {/* Box pertama untuk jadwal patroli, kendaraan, dan pengaduan keamanan */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <div>
                <MainCard jenisCard='satpam'/>
            </div>
            <div>
                <MainCard jenisCard="kendaraan"/>
            </div>
            <div>
                <MainCard jenisCard="pengaduan"/>
            </div>
        </Box>

        {/* Box kedua space beetween untuk jatuh tempo dan tagihan air */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <div>
                <MainCard jenisCard="jatuhTempo"/>
            </div>
            <div>
                <MainCard jenisCard="tagihanAir"/>
            </div>
        </Box>

        {/* Box Ketiga ada 3, untuk potong rumput, pengambilan sampah, dan jadwal sapu */}
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <div onMouseEnter={()=> setHover3(false)} onMouseLeave={() => setHover3(true)}
             style={{
              flex:1,
              transition: 'transform 0.3s ease',
              transform: hover3 ? 'scale(1.1)' : 'scale(1)',
             }}>
                {hover3 === true? <MainCard jenisCard="rumput"/>: <RumputIndex hover={hover3}/>}
            </div>
            <div onMouseEnter={()=> setHover3(false)} onMouseLeave={() => setHover3(true)}
             style={{
              flex:1,
              transition: 'transform 0.3s ease',
              transform: hover3 ? 'scale(1.1)' : 'scale(1)',
             }}>
                {hover3 === true? <MainCard jenisCard="sampah"/>: <SampahIndex hover={hover3}/>}
            </div>
            <div onMouseEnter={()=> setHover3(false)} onMouseLeave={() => setHover3(true)}
             style={{
              flex:1,
              transition: 'transform 0.3s ease',
              transform: hover3 ? 'scale(1.1)' : 'scale(1)',
             }}>
                {hover3 === true? <MainCard jenisCard="jadwalSapu"/>: <JadwalSapuIndex hover={hover3}/>}
            </div>
        </Box>

          </Stack>

      </Container>
        </Box>
    )
}