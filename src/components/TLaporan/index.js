import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { Upload as UploadIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Navigate, useNavigate } from 'react-router-dom';

const CustomTypography = styled(Typography)({
  color: '#000',
  textAlign: 'left'
});

const App = () => {
    const Navigate = useNavigate();
  return (
    <>
      {/* Text Above Container */}
        <Box height="70px">
            <Stack direction="column" textAlign="left">
              <Typography
                variant="h5"
                sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
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
                <Typography
                  variant="h9"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Form Laporan Hasil Deteksi
                </Typography>
              </Stack>
                    
            </Stack>
          </Box>

      {/* Main Container */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, paddingBottom:3 }}>
        <Box
          sx={{
            width: '100%',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#efefef',
            mb: 4,
            
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            FORM DETEKSI
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
    OBJEK TERDETEKSI
  </Typography>

  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography sx={{ mb: 2 }}>Tipe Objek</Typography>
      <TextField
        select
        label=""
        fullWidth
      >
        <MenuItem value="tidak dikenal">tidak dikenal</MenuItem>
        <MenuItem value="pengunjung">pengunjung</MenuItem>
        <MenuItem value="warga">warga</MenuItem>
      </TextField>
    </Grid>

    <Grid item xs={6}>
      <Typography sx={{ mb: 1 }}>Tanggal Terdeteksi</Typography>
      <TextField
        sx={{ color: '#00A9AD' }}
        label=""
        type="date"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
    <Grid item xs={6}>
      <Typography sx={{ mb: 1 }}>Waktu Terdeteksi</Typography>
      <TextField
        sx={{ color: '#00A9AD' }}
        label=""
        type="time"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>

    <Grid item xs={12}>
      <Typography sx={{ mb: 1 }}>Status Objek</Typography>
      <TextField
        select
        label=""
        fullWidth
      >
        <MenuItem value="mencurigakan">mencurigakan</MenuItem>
        <MenuItem value="tidak mencurigakan">tidak mencurigakan</MenuItem>
      </TextField>
    </Grid>

    <Grid item xs={12}>
      <Button
        variant='contained'
        sx={{
          height: 38,
          background: '#00A9AD',
          border: '2px solid #00A9AD',
          fontWeight: 'bolder',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        TAMBAH OBJEK
      </Button>
    </Grid>
  </Grid>
</Box>


          {/* Keterangan Hasil Deteksi */}
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center',fontWeight: 'Bold' }}>
              KETERANGAN HASIL DETEKSI
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography sx={{marginBotom : 1}}>Lokasi CCTV</Typography>
                <TextField
                  label="Masukan Lokasi CCTV"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{marginBotom : 1}}>Keterangan</Typography>
                <TextField
                  label="Masukan Keterangan Tanah Longsor"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: '2px dashed #ccc',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <UploadIcon sx={{ fontSize: 40, color: '#00A9AD' }} />
                  <Typography variant="body1">Upload foto/video</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{display:'flex',justifyContent:'flex-end',mt:4}}>
            <Box sx={{width:'65%', textAlign:'end'}}>
              <Button variant='contained' sx={{height:38, background:'#00A9AD', mr:3, border:'2px solid #00A9AD', fontWeight:'bolder'}}>SUBMIT</Button>
              <Button variant='outlined' onClick={()=> Navigate('/LaporanHasilDeteksi')} sx={{height:38, color:'#00A9AD', border:'2px solid #00A9AD', fontWeight:'bolder'}}>BATAL</Button>
            </Box>
          </Box>
        </Box>
      </Container>
      
    </>
    
  );
}

export default App;