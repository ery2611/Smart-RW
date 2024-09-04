import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import React, { useState } from "react";
import MainCard from "../../../components/WargaComponents/Ikk/MainCard/index.tsx";
import RumputIndex from "../../../components/WargaComponents/Ikk/ClickedCard/Rumput.tsx";
import SampahIndex from "../../../components/WargaComponents/Ikk/ClickedCard/Sampah.tsx";
import JadwalSapuIndex from "../../../components/WargaComponents/Ikk/ClickedCard/JadwalSapu.tsx";
import JadwalSatpamIndex from "../../../components/WargaComponents/Ikk/ClickedCard/JadwalSatpam.tsx";
import KendaraanIndex from "../../../components/WargaComponents/Ikk/ClickedCard/KendaraanIndex.tsx";
import PengaduanIndex from "../../../components/WargaComponents/Ikk/ClickedCard/PengaduanIndex.tsx";
import IkkIndex from "../../../components/WargaComponents/Ikk/ClickedCard/IkkIndex.tsx";
import AirPamIndex from "../../../components/WargaComponents/Ikk/ClickedCard/AirPamIndex.tsx";
import Header from '../../../components/WargaComponents/Header/index.js'


const IkkMain: React.FC = () => {
    const [hover1, setHover1] = useState <boolean>(true)
    const [hover2, setHover2] = useState<boolean>(true)
    const [hover3, setHover3] = useState<boolean>(true)

  return (
    <Box sx={{ height: "auto" }}>
      {/* navbar */}
      <Header />

      <Container>
        {/* Box untuk alamat */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Home //! minta logo asli ke bang eri
            sx={{ height: "36px", width: "30px", color: "#00A9AD" }}
          />
          <Card sx={{ alignContent: "center", pr: 2, pl: 2, ml: 1 }}>
            <Typography
              sx={{
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "24px",
                color: "#888888",
              }}
            >
              Jl. Kemang Dahlia 1 Blok Y no 1
            </Typography>
          </Card>
        </Box>

        <Stack direction="column" spacing={3} sx={{ mt: 2 }}>
          {/* Box pertama untuk jadwal patroli, kendaraan, dan pengaduan keamanan */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div
              onMouseEnter={() => setHover1(false)}
              onMouseLeave={() => setHover1(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease-in-out",
                transform: hover1 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover1 === true ? (
                <MainCard jenisCard="satpam" />
              ) : (
                <JadwalSatpamIndex hover={hover1} />
              )}
            </div>
            <div
              onMouseEnter={() => setHover1(false)}
              onMouseLeave={() => setHover1(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease-in-out",
                transform: hover1 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover1 === true ? (
                <MainCard jenisCard="kendaraan" />
              ) : (
                <KendaraanIndex hover={hover1} />
              )}
            </div>
            <div
              onMouseEnter={() => setHover1(false)}
              onMouseLeave={() => setHover1(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease-in-out",
                transform: hover1 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover1 === true ? (
                <MainCard jenisCard="pengaduan" />
              ) : (
                <PengaduanIndex hover={hover1} />
              )}
            </div>
          </Box>

          {/* Box kedua space beetween untuk jatuh tempo dan tagihan air */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div
              onMouseEnter={() => setHover2(false)}
              onMouseLeave={() => setHover2(true)}
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: hover2 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover2 === true ? (
                <MainCard jenisCard="jatuhTempo" />
              ) : (
                <IkkIndex hover={hover2} />
              )}
            </div>
            <div
              onMouseEnter={() => setHover2(false)}
              onMouseLeave={() => setHover2(true)}
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: hover2 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover2 === true ? (
                <MainCard jenisCard="tagihanAir" />
              ) : (
                <AirPamIndex hover={hover2} />
              )}
            </div>
          </Box>

          {/* Box Ketiga ada 3, untuk potong rumput, pengambilan sampah, dan jadwal sapu */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div
              onMouseEnter={() => setHover3(false)}
              onMouseLeave={() => setHover3(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease",
                transform: hover3 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover3 === true ? (
                <MainCard jenisCard="rumput" />
              ) : (
                <RumputIndex hover={hover3} />
              )}
            </div>
            <div
              onMouseEnter={() => setHover3(false)}
              onMouseLeave={() => setHover3(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease",
                transform: hover3 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover3 === true ? (
                <MainCard jenisCard="sampah" />
              ) : (
                <SampahIndex hover={hover3} />
              )}
            </div>
            <div
              onMouseEnter={() => setHover3(false)}
              onMouseLeave={() => setHover3(true)}
              style={{
                flex: 1,
                transition: "transform 0.5s ease",
                transform: hover3 ? "scale(0.9)" : "scale(1)",
              }}
            >
              {hover3 === true ? (
                <MainCard jenisCard="jadwalSapu" />
              ) : (
                <JadwalSapuIndex hover={hover3} />
              )}
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default IkkMain;