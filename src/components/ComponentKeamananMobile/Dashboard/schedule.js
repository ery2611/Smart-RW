// /src/components/ScheduleCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ScheduleCard = () => {
  return (
    <Card sx={{ backgroundColor: "#CCEEEF" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#00A9AD" }}>
          Jadwal Berlangsung
        </Typography>

        <Card sx={{ p: 1, borderRadius: 2, boxShadow: 3 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center">
              <Box
                component="img"
                src="https://wallpapercave.com/wp/wp9745348.jpg" // Replace with the path to your image
                alt="Pos Lapangan"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mr: 2,
                }}
              />
              <Stack>
                <Typography variant="body1" fontWeight="bold">
                  Penjagaan Pos Lapangan
                </Typography>
                <Typography variant="body2" color="primary">
                  09:00 - 11:30
                </Typography>
              </Stack>
            </Stack>
            <Box>
              <ArrowForwardIosIcon sx={{ color: "#00A9AD" }} />
            </Box>
          </Stack>
        </Card>

        {/* BOX UNTUK  BAGIAN PALING BAWAH */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#00A9AD", fontWeight: "bold" }}
          >
            12 Tugas Hari Ini
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00B4B4",
              color: "white",
              borderRadius: "10px",
              maxWidth: "160px",
              maxHeight: "40px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Seluruh Jadwal
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
