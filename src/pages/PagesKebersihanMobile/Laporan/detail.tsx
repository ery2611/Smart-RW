import { ArrowBack, LocationOn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const DetailLaporanKebersihan: React.FC = () => {
  //! CATATAN : CTRL + F OR SEARCH = "Todo"
  return (
    <Box sx={{ background: "#F0F0F0", height: "auto", minHeight: "100vh" }}>
      {/* navbar */}
      

      {/* halaman utama */}
      <Container
        sx={{mt:1, background: "#F0F0F0", height: "auto", minHeight: "100vh" }}
      >
        <Stack direction="column">
          {/* Pembersihan aula */}
          <Box>
            <Stack direction="column">
              <Typography
                sx={{
                  color: "#00A9AD",
                  fontWeight: "bold",
                  fontSize: "16px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Pembersihan Aula
              </Typography>

              {/* Alamat */}
              <Stack direction="row" spacing={1}>
                <LocationOn sx={{ height: 20, width: 20, color: "#FE4646" }} />
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    //todo Alamat nantinya akan di ambil dari data
                  }}
                >
                  Balai Warga RW 03
                </Typography>
              </Stack>

            </Stack>
          </Box>

          {/* regu Kebersihan */}
          <Box sx={{ mt: 1 }}>
            {/* Judul dan SubJudul */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "#00A9AD",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Regu Kebersihan
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Montserrat, sans-serif",
                  //todo nantinya regu akan diambil dari regu yang
                  //todo melaksanakan tugas
                }}
              >
                Regu 1 Kebersihan
              </Typography>
            </Box>

            {/* Anggota Bertugas */}
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                mt: 1,
              }}
            >
              Anggota Bertugas
            </Typography>

            {/* profile, nama, dan divisi petugas */}
            <Stack direction="row" spacing={1} marginTop={1}
            //Todo Profile akan di ambil dari users.kebersihan nantinya
            >
              <Avatar sx={{ width: 36, height: 36 }} />
              <Stack direction="column">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Rama
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    color: "#AEAEAE",
                  }}
                >
                  Anggota Regu 1 Kebersihan
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Instruksi */}
          <Box marginTop={1}>
            {/* Judul */}
            <Typography
              sx={{
                color: "#00A9AD",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Instruksi
            </Typography>

            {/* Pesan Instruksi */}
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#AEAEAE",
                //todo Masukan instruksi dapat di enter
                //todo Data di ambil dari message instruksi nantinya
              }}
            >
              Masukan intruksi
            </Typography>
          </Box>

          {/* Catatan Tambahan */}
          <Box marginTop={2}>
            {/* judul */}
            <Typography
              sx={{
                color: "#00A9AD",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Catatan Tambahan
            </Typography>

            {/* Isi Catatan */}
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#AEAEAE",
                //todo akan dibuat logika (pesan_ada? :tidak ada pesan)
                //todo nantinya catatan akan diambil dari catatan
              }}
            >
              Tidak Ada Catatan
            </Typography>

          </Box>

        </Stack>
      </Container>
      
    </Box>
  );
};

export default DetailLaporanKebersihan