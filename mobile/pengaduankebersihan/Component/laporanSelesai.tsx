import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface LaporanSelesaiProps {
  kirimFoto: string | ArrayBuffer | null;
  pesan: string | null;
}

const LaporanSelesai: React.FC<LaporanSelesaiProps> = ({
  kirimFoto,
  pesan,
}) => {
  return (
    <Stack direction="column" sx={{ transition: "all 2s ease-out" }}>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            color: "#00A9AD",
          }}
        >
          Media
        </Typography>

        <Box display="flex">
          {/* jika gambar tidak ada */}
          {kirimFoto === null ? (
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#AEAEAE",
              }}
            >
              Tidak Ada Media Dari Petugas
            </Typography>
          ) : kirimFoto ? (
            <img
              src={kirimFoto.toString()}
              alt="Foto dari Petugas"
              style={{
                width: 120,
                height: 120,
                background: "#DADADA",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
              }}
            />
          ) : null}
        </Box>

        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            color: "#00A9AD",
            mt: 1,
          }}
        >
          Catatan Laporan
        </Typography>
        {/* Insert Catatan */}
        <Box sx={{ mb: 10 }}>
          {/* kalau pesan kosong */}
          {pesan === null ? (
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#AEAEAE",
              }}
            >
              Tidak Ada Catatan
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#AEAEAE",
              }}
            >
              {pesan}
            </Typography>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default LaporanSelesai;
