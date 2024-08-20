// /src/components/ComplaintSummary.js
import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ComplaintSummary = () => {
  const Navigate = useNavigate();
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ color: "#00a9ad", fontWeight: "bold" }}
        >
          PENGADUAN
        </Typography>
        <Box display="flex" justifyContent="space-around" mt={2}>
          {/* Box untuk Hari ini   */}
          <Box
            textAlign="center"
            sx={{
              width: "95px",
              height: "100px",
              display: "flex",
              flexDirection: "column", // Menyusun elemen secara vertikal
              justifyContent: "center", // Menyelaraskan konten secara vertikal
              alignItems: "center", // Menyelaraskan konten secara horizontal
            }}
          >
            <Box
              sx={{
                backgroundColor: "#CCEEEF",
                borderRadius: "10px",
                width: "80%",
                height: "70%",
                display: "flex",
                justifyContent: "center", // Menyelaraskan konten secara horizontal
                alignItems: "center", // Menyelaraskan konten secara vertikal
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#00A9AD",
                }}
              >
                4
              </Typography>
            </Box>

            <Typography
              variant="body1"
              fontWeight="bold"
              textAlign="center"
              sx={{ marginTop: "8px" }} // Menambahkan margin jika diperlukan
            >
              Hari Ini
            </Typography>
          </Box>

          {/* Box untuk minggu ini */}
          <Box
            textAlign="center"
            sx={{
              width: "95px",
              height: "100px",
              display: "flex",
              flexDirection: "column", // Menyusun elemen secara vertikal
              justifyContent: "center", // Menyelaraskan konten secara vertikal
              alignItems: "center", // Menyelaraskan konten secara horizontal
            }}
          >
            <Box
              sx={{
                backgroundColor: "#CCEEEF",
                borderRadius: "10px",
                width: "80%",
                height: "70%",
                display: "flex",
                justifyContent: "center", // Menyelaraskan konten secara horizontal
                alignItems: "center", // Menyelaraskan konten secara vertikal
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#00A9AD",
                }}
              >
                14
              </Typography>
            </Box>

            <Typography
              variant="body1"
              textAlign="center"
              sx={{ marginTop: "8px" }} // Menambahkan margin jika diperlukan
            >
              Minggu Ini
            </Typography>
          </Box>

          {/* Box untuk bulann ini */}
          <Box
            textAlign="center"
            sx={{
              width: "95px",
              height: "100px",
              display: "flex",
              flexDirection: "column", // Menyusun elemen secara vertikal
              justifyContent: "center", // Menyelaraskan konten secara vertikal
              alignItems: "center", // Menyelaraskan konten secara horizontal
            }}
          >
            <Box
              sx={{
                backgroundColor: "#CCEEEF",
                borderRadius: "10px",
                width: "80%",
                height: "70%",
                display: "flex",
                justifyContent: "center", // Menyelaraskan konten secara horizontal
                alignItems: "center", // Menyelaraskan konten secara vertikal
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#00A9AD",
                }}
              >
                114
              </Typography>
            </Box>

            <Typography
              variant="body1"
              textAlign="center"
              sx={{ marginTop: "8px" }} // Menambahkan margin jika diperlukan
            >
              Bulan Ini
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button
            onClick={() => Navigate("/KeamananMobile/Pengaduan")}
            variant="contained"
            sx={{
              backgroundColor: "#00A9AD",
              color: "#FFFFFF", // text color (white)
              textTransform: "none", // to prevent the text from being uppercase
              "&:hover": {
                backgroundColor: "#00A9AD", // same color on hover
              },
            }}
          >
            LIHAT PENGADUAN
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComplaintSummary;
