// export default CommandCenterAppBar;
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, useLocation } from "react-router-dom";

const AppBarComponent = ({ title, showBackButton }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        backgroundColor: "white",
        display: { xs: "flex", md: "none" },
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Jika di halaman home, tampilkan logo, jika tidak tampilkan tombol back */}
        {location.pathname === "/KeamananMobile" ? (
          <Box
            sx={{
              backgroundColor: "#00A9AD",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
              height: 43,
              width: 43,
              marginRight: 2,
            }}
          >
            <AdbIcon
              sx={{
                display: { md: "flex" },
                height: 40,
                width: 40,
                color: "white",
              }}
            />
          </Box>
        ) : (
          showBackButton && (
            <IconButton edge="start" color="inherit" onClick={handleBackClick}>
              <ArrowBackIcon sx={{ color: "#00A9AD" }} />
            </IconButton>
          )
        )}

        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#00A9AD",
            fontSize: "1.5rem",
            fontWeight: "bolder",
            marginLeft: 1,
            display: { xs: "block", md: "none" }, // Show only on mobile
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>

        {/* Tampilkan avatar di sebelah kanan */}
        <Avatar alt="User Avatar" src="user_avatar_url_here" />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
