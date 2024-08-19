import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Notif from "@mui/icons-material/Notifications";
import Inbox from "@mui/icons-material/Inbox";
import Home from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const Navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      sx={{
        maxWidth: "250px",
        display: "flex",
        justifyContent: "center", // Menyelaraskan konten secara horizontal
        mx: "auto", // Menambahkan margin horizontal otomatis untuk memusatkan box jika ada batasan lebar
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
          onClick={() => Navigate("/KeamananMobile")}
          icon={
            <Home
              sx={{
                color: isActive("/KeamananMobile")
                  ? "#00A9AD"
                  : "rgba(0, 0, 0, 0.6)",
              }}
            />
          }
        />
        <BottomNavigationAction
          label=""
          onClick={() => Navigate("/KeamananMobile/Notifikasi")}
          icon={
            <Notif
              sx={{
                color: isActive("/KeamananMobile/Notifikasi")
                  ? "#00A9AD"
                  : "rgba(0, 0, 0, 0.6)",
              }}
            />
          }
        />
        <BottomNavigationAction label="" icon={<Inbox />} />
      </BottomNavigation>
    </Box>
  );
}
