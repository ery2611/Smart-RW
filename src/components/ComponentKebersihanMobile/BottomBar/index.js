import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Notif from "@mui/icons-material/Notifications";
import Inbox from "@mui/icons-material/Inbox";
import Home from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Content Area */}
      <Box
        sx={{
          flexGrow: 1, // Memastikan area konten mengisi sisa ruang
          overflowY: "auto", // Menambahkan scroll jika konten lebih tinggi dari viewport
        }}
      >
        {/* Konten utama aplikasi */}
      </Box>

      {/* Centered Bottom Navigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "75%",
          display: "flex",
          justifyContent: "center", // Memusatkan BottomNavigation secara horizontal
          zIndex: 1000, //  BottomNavigation berada di atas konten lain
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            borderRadius: "50px",
            width: "100%", // Membuat BottomNavigation memenuhi lebar Box
          }}
        >
          <BottomNavigationAction
            label=""
            onClick={() => navigate("/KebersihanMobile")}
            icon={
              <Home
                sx={{
                  color: isActive("/KebersihanMobile")
                    ? "#00A9AD"
                    : "rgba(0, 0, 0, 0.6)",
                }}
              />
            }
          />
          <BottomNavigationAction
            label=""
            onClick={() => navigate("/KebersihanMobile/Notifikasi")}
            icon={
              <Notif
                sx={{
                  color: isActive("/KebersihanMobile/Notifikasi")
                    ? "#00A9AD"
                    : "rgba(0, 0, 0, 0.6)",
                }}
              />
            }
          />
          <BottomNavigationAction label="" icon={<Inbox />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
