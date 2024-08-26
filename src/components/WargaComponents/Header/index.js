import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CommandCenterAppBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        backgroundColor: "white",
        top: 0,
        display: { xs: "none", md: "flex" },
        marginBottom: "10px",
        height: "70px",
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Logo and Title Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
              position: "relative",
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
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#00A9AD",
              fontSize: "1.5rem",
              fontWeight: "bolder",
              marginLeft: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            SMART RW
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Home
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Ikk")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              IKK
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Ews")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              EWS
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Panggilan")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Darurat
            </Typography>
          </Box>
        </Box>

        {/* Right Side Content */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <IconButton
            aria-label="notifications"
            color="inherit"
            onClick={() => navigate("/Notif")}
            sx={{ display: { xs: "none", md: "flex" } }} // Hide on mobile
          >
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginLeft: 1,
              marginRight: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            Warga
          </Typography>
          <Avatar alt="Avatar" src="user_avatar_url_here" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CommandCenterAppBar;
