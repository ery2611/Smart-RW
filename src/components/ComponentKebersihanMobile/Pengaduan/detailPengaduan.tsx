import { Add } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";

interface InputProps {
  kirimFoto: string | ArrayBuffer | null;
  handleFileClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeText: ChangeEventHandler<HTMLInputElement>;
}

const DetailPengaduanKebersihan: React.FC<InputProps> = ({
  kirimFoto,
  handleFileClick,
  handleChangeText,
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
          {/* untuk gambar yang sudah dipilih */}
          {kirimFoto ? (
            <img
              src={kirimFoto.toString()}
              alt="foto petugas"
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
          {/* Untuk upload gambar */}
          <Box
            sx={{
              width: 120,
              height: 120,
              background: "#DADADA",
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack direction="column" sx={{ mt: 2 }}>
              <Box display="flex" justifyContent="center">
                <IconButton
                  sx={{
                    width: "45px",
                    height: "45px",
                    background: "#AEAEAE",
                    ":hover": { background: "#AEAEAE" },
                  }}
                >
                  <Input
                    type="file"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      cursor: "pointer",
                    }}
                    onChange={handleFileClick}
                  />
                  <Add sx={{ color: "#DADADA" }} />
                </IconButton>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Montserrat, sans-serif",
                  color: "#AEAEAE",
                  textAlign: "center",
                }}
              >
                Tambahkan Foto
              </Typography>
            </Stack>
          </Box>
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
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              borderRadius: "3px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <TextField
              placeholder="Tambahkan catatan disini"
              fullWidth
              multiline
              onChange={handleChangeText}
              rows={2}
              InputProps={{
                style: {
                  fontSize: "16px",
                  color: "rgba(0, 0, 0, 0.4)",
                },
              }}
            />
          </Paper>
        </Box>
      </Box>
    </Stack>
  );
};

export default DetailPengaduanKebersihan;