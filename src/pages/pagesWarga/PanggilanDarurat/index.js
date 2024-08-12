import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HealthIcon from "@mui/icons-material/LocalHospital";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import FloodOutlinedIcon from "@mui/icons-material/FloodOutlined";
import Bar from "../../../components/WargaComponents/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  return (
    <Box>
      <Bar />
      <Box>
        <Typography
          variant="h5"
          sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
        >
          COMMAND CENTER
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        JENIS PANGGILAN
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          mt: 5,
          flexWrap: "wrap",
        }}
      >
        <div>
          <Box
            sx={{
              bgcolor: "#FF6B6B",
              p: 8,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
              mr: 4,
            }}
          >
            <HealthIcon sx={{ fontSize: 60, color: "#fff", mb: 1 }} />
            <Typography variant="subtitle1" color="white">
              KESEHATAN
            </Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              bgcolor: "#FFA726",
              p: 8,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
              mr: 4,
            }}
          >
            <LocalFireDepartmentOutlinedIcon
              sx={{ fontSize: 60, color: "#fff", mb: 1 }}
            />
            <Typography variant="subtitle1" color="white">
              KEBAKARAN
            </Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              bgcolor: "#4CAF50",
              p: 8,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
              mr: 4,
            }}
          >
            <FloodOutlinedIcon sx={{ fontSize: 60, color: "#fff", mb: 1 }} />
            <Typography variant="subtitle1" color="white">
              BENCANA
            </Typography>
          </Box>
        </div>
        <div>
          <Box
            onClick={() => Navigate("/Warga/Panggilan/Keamanan")}
            sx={{
              bgcolor: "#4169E1",
              p: 8,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
              mr: 4,
            }}
          >
            <LocalPoliceOutlinedIcon
              sx={{ fontSize: 60, color: "#fff", mb: 1 }}
            />
            <Typography variant="subtitle1" color="white">
              KEAMANAN
            </Typography>
          </Box>
        </div>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right", mt: 2 }}>
        <Box sx={{ width: "65%", textAlign: "end" }}>
          <Button
            onClick={() => Navigate("/Warga/PanggilanDarurat/Riwayat")}
            variant="contained"
            sx={{ height: 38, background: "#00A9AD", mr: 22 }}
          >
            LIHAT RIWAYAT
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        PETUGAS YANG MERESPON
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: "center" }}
      >
        Belum ada petugas
      </Typography>
    </Box>
  );
};

export default Dashboard;
