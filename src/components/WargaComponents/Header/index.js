import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CommandCenterAppBar = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        backgroundColor: "white",
        top: 0,
        height: "70px",
        display: { xs: "flex", md: "flex" },
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Mobile View: Show Logo and Title */}
        <Box sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center" }}>
          {/* Logo */}
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
                height: 40,
                width: 40,
                color: "white",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#00A9AD",
              fontSize: "1.5rem",
              fontWeight: "bolder",
              textAlign: "center",
              flexGrow: 1,
              marginLeft: 1,
            }}
          >
            SMART RW
          </Typography>
        </Box>

        {/* Desktop View: Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {/* Navigation Links (same as desktop layout) */}
          {/* Home */}
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
          {/* Berita */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Berita")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Berita
            </Typography>
          </Box>
          {/* Kegiatan */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Kegiatan")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Kegiatan
            </Typography>
          </Box>
          {/* Pengumuman */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Pengumuman")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Pengumuman
            </Typography>
          </Box>
          {/* Gallery */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Gallery")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Gallery
            </Typography>
          </Box>
          {/* EWS */}
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
          {/* OGS */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/Ogs")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              OGS
            </Typography>
          </Box>
          {/* About */}
          <Box
            sx={{
              padding: "5px 15px",
              margin: "0 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Warga/About")}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              About
            </Typography>
          </Box>
          {/* IKK */}
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
        </Box>

        {/* Right Side Content */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <IconButton
            aria-label="notifications"
            color="inherit"
            onClick={() => navigate("/Warga/Notifikasi")}
            sx={{ display: { xs: "flex", md: "flex" } }} // Hide on mobile
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
