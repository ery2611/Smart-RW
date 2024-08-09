import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          position: "absolute",
          top: 100,
          width: 240,
          boxSizing: "border-box",
          height: "450px",
          borderRadius: "10px",
        },
      }}
    >
      <List>
        <ListItem button onClick={() => Navigate("/")}>
          {/* <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Dashboard"
            sx={{
              color: isActive("/") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/") ? "1px solid #EFEFEF" : "0px",
            }}
          />
        </ListItem>

        <ListItem button onClick={() => Navigate("/Ews")}>
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Early Warning System"
            sx={{
              color: isActive("/Ews") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Ews") ? "1px solid #EFEFEF" : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Keamanan")}>
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Keamanan"
            sx={{
              color: isActive("/Keamanan") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Keamanan") ? "1px solid #EFEFEF" : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Ogs")}>
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="One Gate System"
            sx={{
              color: isActive("/Ogs") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Ogs") ? "1px solid #EFEFEF" : "0px",
            }}
          />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <CameraIcon />
          </ListItemIcon> */}
          <ListItemText primary="CCTV" />
        </ListItem>
        <ListItem button onClick={() => Navigate("/LaporanHasilDeteksi")}>
          {/* <ListItemIcon>
            <ReportIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Laporan Hasil Deteksi"
            sx={{
              color: isActive("/LaporanHasilDeteksi") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/LaporanHasilDeteksi")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Panggilan")}>
          {/* <ListItemIcon>
            <EmergencyIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Panggilan Darurat"
            sx={{
              color: isActive("/Panggilan") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Panggilan")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
