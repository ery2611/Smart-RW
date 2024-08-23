import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ArrowBack } from "@mui/icons-material";
import {LaporanWarga, Warga, getColor} from "../../../context/KebersihanMobile/pengaduan/index.tsx";
import { useNavigate } from "react-router";

const pengaduan: Warga[]  = LaporanWarga()


const Dashboardpengaduan: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{background:'#F0F0F0'}}>
      {/* navbar */}
   

      {/* halaman utama */}
      <Container sx={{ maxWidth: "100%", width: "auto" }}>
        {pengaduan.map((items) => (
          <Card
            component={Paper}
            key={items.id}
            sx={{
              width: "auto",
              display: "flex",
              alignItems: "center",
              backgroundColor:'#FEFEFE',
              padding: 1,
              marginBottom: 1,
              marginTop: 1,
              boxShadow: 8,
              borderRadius:2,
            }}
          >
            <Stack direction="column" width="100%">
              {/* photo profile dan jam pengaduan */}
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Avatar sx={{width:36, height:36}}/>
                  <Stack direction="column" sx={{ml:1}}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      {items.nama}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontFamily: "Montserrat, sans-serif",
                        color: "#AEAEAE",
                      }}
                    >
                      Warga
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction="column" sx={{ mt: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontFamily: "Montserrat, sans-serif",
                        display:'flex',
                        justifyContent:'end'
                      }}
                    >
                      {items.waktu_pengaduan}
                    </Typography>
                    <Typography sx={getColor(items.tanggapan)}>
                      <i>{items.tanggapan}</i>
                    </Typography>
                  </Stack>
                </Box>
              </Box>

              {/* Alamat */}
              <Box display="flex" justifyContent="start">
                <Stack direction="row" spacing={1}>
                  <LocationOnIcon
                    sx={{ height: 20, width: 20, color: "#FE4646" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "12px",
                    }}
                  >
                    {items.alamat}
                  </Typography>
                </Stack>
              </Box>

              {/* Button dan detail */}
              <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    color: "#00A9AD",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "12px",
                    ml: 1,
                    cursor: "pointer",
                  }}
                >
                  Detail Pengaduan
                </Typography>
                {items.tanggapan === "Belum Ditanggapi" ? 
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    width: 100,
                    height: 36,
                    backgroundColor: "#00A9AD",
                    ":hover": { backgroundColor: "#00A9AD" },
                  }}
                  onClick={()=> navigate(`/KebersihanMobile/Pengaduan/Detail/${items.id}`)}
                >
                  Tanggapi
                </Button>
                :
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    width: 100,
                    height: 36,
                    backgroundColor: "#AEAEAE",
                    ":hover": { backgroundColor: "#AEAEAE" },
                  }}
                >
                  Tanggapi
                </Button>
              }
              </Box>
            </Stack>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Dashboardpengaduan;