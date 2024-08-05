import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ObjekData = [
  {
    objek: 'Objek 1',
    tipeObjek: ': Pengunjung',
    tanggalTerdeteksi: ': 06/01/2024',
    waktuTerdeteksi: ': 08:00',
    statusObjek: ' TIDAK MENCURIGAKAN',
  },
  {
    objek: 'Objek 2',
    tipeObjek: ': Tidak Dikenal',
    tanggalTerdeteksi: ': 06/01/2024',
    waktuTerdeteksi: ': 08:00',
    statusObjek: ' MENCURIGAKAN',
  },
  {
    objek: 'Objek 3',
    tipeObjek: ': Warga',
    tanggalTerdeteksi: ': 06/01/2024',
    waktuTerdeteksi: ': 08:00',
    statusObjek: 'TIDAK MENCURIGAKAN',
  },
  {
    objek: 'Objek 4',
    tipeObjek: ': Warga',
    tanggalTerdeteksi: ': 06/01/2024',
    waktuTerdeteksi: ': 08:00',
    statusObjek: 'MENCURIGAKAN',
  },
  {
    objek: 'Objek 5',
    tipeObjek: ': Tidak Dikenal',
    tanggalTerdeteksi: ': 06/01/2024',
    waktuTerdeteksi: ': 08:00',
    statusObjek: 'MENCURIGAKAN',
  },
];

function ObjekList() {
  return (
    <Box >
      {ObjekData.map((objek, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          {/* Menampilkan nama objek di atas tipe objek */}
          <Typography sx={{ fontSize: '16px', mb: 2 }}>
            {objek.objek}
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography sx={{ color: '#A1A5B7', fontSize: '14px', textAlign: 'left' }}>Tipe Objek</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ color: '#000', fontSize: '14px', textAlign: 'left' }}>{objek.tipeObjek}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography sx={{ color: '#A1A5B7', fontSize: '14px', textAlign: 'left' }}>Tanggal Terdeteksi</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ color: '#000', fontSize: '14px', textAlign: 'left' }}>{objek.tanggalTerdeteksi}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography sx={{ color: '#A1A5B7', fontSize: '14px', textAlign: 'left' }}>Waktu Terdeteksi</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ color: '#000', fontSize: '14px', textAlign: 'left' }}>{objek.waktuTerdeteksi}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
  <Grid item xs={5}>
    <Typography sx={{ color: '#A1A5B7', fontSize: '14px', textAlign: 'left' }}>
      Status Objek
    </Typography>
  </Grid>
  <Grid item xs={7}>
    <Typography sx={{ fontSize: '14px', textAlign: 'left' }}>
      <span style={{ color: 'black' }}>:</span> {/* Simbol ":" dengan warna hitam */}
      <span style={{ color: objek.statusObjek === 'MENCURIGAKAN' ? 'red' : 'limegreen' }}>
        {objek.statusObjek}
      </span>
    </Typography>
  </Grid>
</Grid>

        </Box>
      ))}
    </Box>
  );
}

const DetailLaporan = () => {
    const Navigate=useNavigate();
  return (
    <>
      <Box>
      <Stack direction="column" textAlign='left'>
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18, fontWeight:'bold' }}
          >
            COMMAND CENTER
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
             Laporan Hasil Deteksi/
            </Typography>
            <Typography variant="h9" align="center" sx={{color:'black', fontWeight:'bold'}}>
              Detail
            </Typography>
          </Stack>
        </Stack>
  
  
      </Box>

      <Container
 
  sx={{
    mt: 4,
    mb: 0,
    mx: 2,
    paddingBottom:1
  }}
>
  <Box
    sx={{
      overflowY:'auto',
      p: 2,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: '#efefef',
      mb: 10,
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
      DETAIL OBJEK
    </Typography>
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
        mb: 4,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
        OBJEK YANG TERDETEKSI
      </Typography>

      <Typography sx={{ textAlign: 'center', color: '#A1A5B7', mb: 2 }}>
        5 objek terdeteksi
      </Typography>

      <ObjekList />

      <Grid container spacing={2}>
        {/* Grid items can be added here if needed */}
      </Grid>
    </Box>

    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
        KETERANGAN HASIL DETEKSI
      </Typography>

      <Grid container spacing={2} sx={{ mb: 1 }}>
        <Grid item xs={12}>
          <Typography sx={{ color: '#A1A5B7', fontSize: '14px' }}>
            Lokasi Kejadian
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography sx={{ fontSize: '14px', textAlign: 'left', mb: 2 }}>
            Masjid Baitul Jihad, Kemang Dahlia Raya Blok Z No. 12, RT02 / RW36
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ color: '#A1A5B7', fontSize: '14px' }}>
            KETERANGAN
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '14px', textAlign: 'left' }}>
            Ada yang mencurigakan di sebalah Masjid,
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Typography sx={{ color: '#A1A5B7', fontSize: '14px' }}>
            Media
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="70"
            image="/mnt/data/Group 40831.png"
            alt="Deteksi Media"
            sx={{
              borderRadius: 1,
              width: '250px',
              height: '250px',
              backgroundColor:'#EFEFEF'
            }}
          />
        </Grid>
      </Grid>

    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
      <Box sx={{ width: '65%', textAlign: 'end' }}>
        <Button variant='outlined'
         sx={{ height: 38, color: '#00A9AD', fontWeight: 'bolder', border: '2px solid #00A9AD' }}
         onClick={()=> Navigate('/LaporanHasilDeteksi')}>
          KEMBALI
        </Button>
      </Box>
    </Box>
  </Box>
  </Container>



    </>
  );
}

export default DetailLaporan;