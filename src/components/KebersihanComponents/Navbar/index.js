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
        <ListItem
          button
          onClick={() => Navigate("/DashboardKebersihan")}
          sx={{
            backgroundColor: isActive("/DashboardKebersihan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/DashboardKebersihan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/DashboardKebersihan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/DashboardKebersihan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/DashboardKebersihan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon> */}
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          onClick={() => Navigate("/JadwalKebersihan")}
          sx={{
            backgroundColor: isActive("/JadwalKebersihan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/JadwalKebersihan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/JadwalKebersihan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/JadwalKebersihan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/JadwalKebersihan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText primary="Jadwal" />
        </ListItem>
        <ListItem
          button
          onClick={() => Navigate("/LaporanKebersihan")}
          sx={{
            backgroundColor: isActive("/LaporanKebersihan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/LaporanKebersihan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/LaporanKebersihan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/LaporanKebersihan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/LaporanKebersihan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText primary="Laporan" />
        </ListItem>
        <ListItem
          button
          onClick={() => Navigate("/CutiKebersihan")}
          sx={{
            backgroundColor: isActive("/CutiKebersihan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/CutiKebersihan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/CutiKebersihan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/CutiKebersihan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/CutiKebersihan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText primary="Cuti" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
