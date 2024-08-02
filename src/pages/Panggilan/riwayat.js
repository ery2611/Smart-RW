import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

// Data Nama Panggilan
const riwayatPanggilan = [
  { nama: 'Amir Mahmud', waktu: '09:20', deskripsi: 'Ada orang tidak di kenal masuk sembarangan.', tanggal: '2024-08-02' },
  { nama: 'Amir ajah', waktu: '09:20', deskripsi: 'Ada orang tidak di kenal masuk sembarangan.', tanggal: '2024-08-02' },
  { nama: 'Siti Aminah', waktu: '10:15', deskripsi: 'Ada orang mencurigakan.', tanggal: '2024-08-01' },
  // Tambahkan data lainnya di sini
];

// Komponen BoxPanggilan
const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 1000,
  flexGrow: 1,
  borderRadius: 10,
  backgroundColor: '#EEEEE',
  color: '#000',
  marginBottom: theme.spacing(2), // Menambahkan jarak ke bawah
  position: 'relative', // Untuk mengatur posisi ikon
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: '#A1A5B7', // Memberikan warna #A1A5B7 pada deskripsi
  textAlign: 'left'
}));

const TimeTypography = styled(Typography)({
  color: '#000',
  alignSelf: 'center'
});

const Divider = styled('hr')({
  border: 0,
  height: 1,
  backgroundColor: '#C5BDBD', // Mengubah warna Divider
  margin: '10px 0',
});

const EyeIcon = styled(RemoveRedEyeOutlinedIcon)({
  position: 'absolute',
  top: 8,
  right: 8,
  color: '#00A9AD', // Ubah warna ikon menjadi biru
});

function BoxPanggilan({ riwayat }) {
  const Navigate = useNavigate();
  return (
    <div>
      {riwayat.map((item, index) => (
        <CustomPaper key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {item.nama}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs>
              <CustomTypography variant="body2">
                {item.deskripsi}
              </CustomTypography>
            </Grid>
            <Grid item>
              <TimeTypography variant="body2">
                {item.waktu}
              </TimeTypography>
            </Grid>
          </Grid>
          <EyeIcon onClick={()=> Navigate('/Panggilan/Riwayat/DetailRiwayat')} /> {/* Tambahkan ikon mata di sini */}
        </CustomPaper>
      ))}
    </div>
  );
}

// Komponen utama yang menggabungkan kedua bagian kode
export default function HistoryPanggilan() {
  const today = '2024-08-02'; // Ganti dengan tanggal hari ini secara dinamis jika diperlukan
  const yesterday = '2024-08-01'; // Ganti dengan tanggal kemarin secara dinamis jika diperlukan

  const panggilanHariIni = riwayatPanggilan.filter(panggilan => panggilan.tanggal === today);
  const panggilanKemarin = riwayatPanggilan.filter(panggilan => panggilan.tanggal === yesterday);

  return (
    <div>
     <Stack direction="column">
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
            Panggilan Darurat/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Riwayat Panggilan Darurat
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        RIWAYAT PANGGILAN
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h7" sx={{ mt: 10, ml: 25, color: '#A0A1A4', fontWeight: 'bold' }}>
          Hari Ini
        </Typography>
      </Box>

      <BoxPanggilan riwayat={panggilanHariIni} />
      <div>
        <Divider style={{ maxWidth: '1000px', margin: '10px auto' }} />
      </div>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h7" sx={{ mt: 10, ml: 25, color: '#A0A1A4', fontWeight: 'bold' }}>
          Kemarin
        </Typography>
      </Box>
      
      <BoxPanggilan riwayat={panggilanKemarin} />

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
  <Box sx={{ width: '65%', textAlign: 'end', ml: 15}}> {/* Menambahkan margin-left */}
    <Button variant='outlined' sx={{ height: 38, color: '#00A9AD' }}>
      KEMBALI
    </Button>
  </Box>
</Box>

    </div>
  );
}