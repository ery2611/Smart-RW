import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import myImage from "../../../assets/about.png";
import Header from "../../../components/WargaComponents/Header";

const AboutUsKemang = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: "100px" }}>
        <CardMedia
          component="img"
          height="70"
          image={myImage}
          alt="Gambar disini"
          sx={{
            borderRadius: 1,
            width: "100%", // Mengubah lebar gambar menjadi 100%
            height: "auto", // Memastikan tinggi gambar menyesuaikan secara proporsional
          }}
        />

        {/* Bagian Tentang RW 36 */}
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom align="center">
            ABOUT US
          </Typography>
          <Typography variant="body1" paragraph>
            RW 36 Kemang Pratama Bekasi merupakan salah satu lingkungan
            perumahan yang berada di kawasan Bekasi, tepatnya di daerah Kemang
            Pratama, yang dikenal sebagai salah satu kawasan perumahan elit di
            Bekasi. Berikut ini adalah gambaran umum mengenai profil RW 36 di
            Kemang Pratama Bekasi:
          </Typography>

          {/* Daftar Informasi */}
          <Box>
            <Typography variant="h7" gutterBottom>
              1. Lokasi:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              RW 36 terletak di dalam area perumahan Kemang Pratama, yang
              merupakan kawasan perumahan dengan akses mudah ke berbagai
              fasilitas umum seperti pusat perbelanjaan, sekolah, rumah sakit,
              dan akses tol.
            </Typography>
          </Box>
          {/* Tambahkan bagian informasi lain sesuai kebutuhan */}

          {/* Struktur Organisasi */}
          <Box>
            <Typography variant="h7" gutterBottom>
              2. Fasilitas:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              Di dalam lingkungan RW 36, biasanya terdapat fasilitas umum yang
              mendukung kehidupan sehari-hari warga, seperti taman bermain, pos
              keamanan, dan area olahraga.
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              Beberapa rumah di area ini dilengkapi dengan fasilitas modern
              seperti kolam renang pribadi, taman yang luas, dan desain
              arsitektur yang mew
            </Typography>
          </Box>

          <Box>
            <Typography variant="h7" gutterBottom>
              3. Komunitas:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              RW 36 terdiri dari komunitas warga yang sebagian besar adalah
              keluarga menengah ke atas. Kegiatan sosial, seperti arisan,
              pengajian, dan olahraga bersama sering diadakan untuk mempererat
              hubungan antarwarga
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2, mb: 1 }}>
              <span>
                <b>· </b>
              </span>
              Keamanan menjadi salah satu prioritas utama, dengan adanya satpam
              yang berjaga 24 jam dan sistem keamanan yang canggih, termasuk
              CCTV di berbagai sudut.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h7" gutterBottom>
              4. Kegiatan:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              RW 36 sering mengadakan kegiatan gotong royong, terutama dalam
              menjaga kebersihan lingkungan dan mencegah banjir di musim hujan.
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2, mb: 1 }}>
              <span>
                <b>· </b>
              </span>
              Kegiatan perayaan hari-hari besar nasional dan keagamaan juga
              rutin dilakukan, seperti perayaan 17 Agustus, Idul Fitri, dan
              Natal.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h7" gutterBottom>
              5. Komunitas:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              RW 36 terdiri dari komunitas warga yang sebagian besar adalah
              keluarga menengah ke atas. Kegiatan sosial, seperti arisan,
              pengajian, dan olahraga bersama sering diadakan untuk mempererat
              hubungan antarwarga
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2, mb: 1 }}>
              <span>
                <b>· </b>
              </span>
              Keamanan menjadi salah satu prioritas utama, dengan adanya satpam
              yang berjaga 24 jam dan sistem keamanan yang canggih, termasuk
              CCTV di berbagai sudut.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h7" gutterBottom>
              6. Struktur Organisasi:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              RW 36 dipimpin oleh seorang Ketua RW yang dipilih oleh warga
              melalui mekanisme musyawarah atau pemilihan. Di bawah Ketua RW,
              ada beberapa Ketua RT yang mengkoordinasikan kegiatan di tingkat
              RT masing-masing.
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2, mb: 1 }}>
              <span>
                <b>· </b>
              </span>
              Pengurus RW biasanya juga mencakup bagian keamanan, kebersihan,
              sosial, dan keagamaan, yang semuanya bekerja sama untuk
              menciptakan lingkungan yang nyaman dan aman bagi warga.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h7" gutterBottom>
              7. Lingkungan:
            </Typography>
            <Typography variant="body3" paragraph sx={{ ml: 2 }}>
              <span>
                <b>· </b>
              </span>
              Kemang Pratama dikenal dengan lingkungan yang hijau, tertata rapi,
              dan asri. Warga RW 36 turut serta menjaga keindahan dan kebersihan
              lingkungan ini, dengan adanya taman-taman kecil di sekitar rumah
              dan jalan-jalan yang terawat baik.
            </Typography>
          </Box>
        </Box>

        {/* Bagian Pengurus */}
        <Box sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom align="center">
            PENGURUS RW 36 Periode 2024
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Yan Akhar
                </Typography>
                <Typography variant="body2">Ketua RW</Typography>
              </Paper>
            </Grid>
            {/* Tambahkan komponen Grid untuk anggota pengurus lainnya */}
            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Wasis Utomo
                </Typography>
                <Typography variant="body2">Sekretaris</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Farel Savero
                </Typography>
                <Typography variant="body2">Bedahara</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Aldo
                </Typography>
                <Typography variant="body2">Koordinator Kebersihan</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Rafif L
                </Typography>
                <Typography variant="body2">Koordinator Keamanan</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} md={2}>
              <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/path/to/image1.jpg"
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Banting
                </Typography>
                <Typography variant="body2">Humas</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsKemang;
