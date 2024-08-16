import React from "react";
import {
    Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ArrowBack} from "@mui/icons-material";

interface Warga {
  id: number;
  nama: string;
  alamat: string;
  waktu_pengaduan: string;
  tanggal: Date | null;
  tanggapan: string;
}

const getColor = (tanggap: string): React.CSSProperties => {
  switch (tanggap) {
    case "Sudah Ditanggapi":
      return {
        color: "#2ECC71",
        fontSize: 10,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold"
      };
      case "Belum Ditanggapi":
        return{
            color:'#CE1305',
            fontSize: 10,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold"
        }
    default:
      return {};
  }
};

const PengaduanKeamanan: React.FC = () => {
  const Pengaduan: Warga[] = [
    {
      id: 1,
      nama: "kautsar Hakam",
      alamat: "kemang pratama 1",
      waktu_pengaduan: "10:10",
      tanggal: new Date("2024-01-01"),
      tanggapan: "Belum Ditanggapi",
    },
    {
      id: 2,
      nama: "Muhammad Rifaldo",
      alamat: "kemang pratama 2",
      waktu_pengaduan: "15:22",
      tanggal: new Date("2024-01-01"),
      tanggapan: "Sudah Ditanggapi",
    },
    {
      id: 3,
      nama: "Bintang Fathurahman",
      alamat: "kemang pratama 3",
      waktu_pengaduan: "17:20",
      tanggal: new Date("2024-01-01"),
      tanggapan: "Sudah Ditanggapi",
    },
    {
      id: 4,
      nama: "Rafif Muhammad",
      alamat: "kemang pratama 4",
      waktu_pengaduan: "15:12",
      tanggal: new Date("2024-01-01"),
      tanggapan: "Belum Ditanggapi",
    },
    {
      id: 5,
      nama: "Farrel Savero",
      alamat: "kemang pratama 5",
      waktu_pengaduan: "01:01",
      tanggal: new Date("2024-01-01"),
      tanggapan: "Sudah Ditanggapi",
    },
  ];
  return (
    <Box>

            {/* navbar */}
            <Card sx={{width:'100%', display:'flex',height:54, alignContent:'center', boxShadow:4}}>
            <IconButton>
                <ArrowBack/>
            </IconButton>
            <Typography sx={{ flexGrow: 1, textAlign: 'center',color : "#00A9AD",alignContent:'center', fontFamily:'Montserrat, sans-serif', fontSize:14, fontWeight:'bold' }}>
                PENGADUAN
            </Typography>
            <Box sx={{alignContent:'center'}}>
            <Avatar src="/path-to-profile-pic.jpg" />
            </Box>
          </Card>

        {/* halaman utama */}
      <Container sx={{ maxWidth: "100%", width: "auto" }}>
        {Pengaduan.map((items) => (
          <Card
            component={Paper}
            key={items.id}
            sx={{
              width: "auto",
              display: "flex",
              alignItems: "center",
              padding: 1,
              marginBottom: 1,
              marginTop: 1,
              boxShadow: 3,
            }}
          >
            <Stack direction="column" width="100%">
              {/* photo profile dan jam pengaduan */}
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <IconButton size="small">
                    <AccountCircleIcon sx={{ width: 36, height: 36 }} />
                  </IconButton>
                  <Stack direction="column">
                    <Typography
                      sx={{
                        fontSize: '14px',
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
                      }}
                    >
                      {items.waktu_pengaduan}
                    </Typography>
                    <Typography
                      sx={getColor(items.tanggapan)}
                    >
                      <i>{items.tanggapan}</i>
                    </Typography>
                  </Stack>
                </Box>
              </Box>

              {/* Alamat */}
              <Box display="flex" justifyContent="start">
                <Stack direction="row" spacing={1}>
                  <LocationOnIcon sx={{height:20, width:20, color:'#FE4646'}}/>
                  <Typography sx={{fontFamily:'Montserrat, sans-serif', fontWeight:'12px', }}>{items.alamat}</Typography>
                </Stack>
              </Box>

              {/* Button dan detail */}
              <Box display="flex" justifyContent="space-between" sx={{mt:1}}>
                <Typography sx={{color:'#00A9AD', fontFamily:'Montserrat, sans-serif', fontWeight:'bold', fontSize:'12px', ml:1, cursor:'pointer'}}>Detail Pengaduan</Typography>
                <Button variant='contained' sx={{borderRadius:2,width:100, height:36, backgroundColor:'#00A9AD', ":hover":{ backgroundColor:'#00A9AD'}}}>Tanggapi</Button>
              </Box>
            </Stack>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default PengaduanKeamanan;
