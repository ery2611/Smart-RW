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
          onClick={() => Navigate("/Warga")}
          sx={{
            backgroundColor: isActive("/Warga") ? "#00A9AD" : "inherit",
            color: isActive("/Warga") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga") ? "1px solid #EFEFEF" : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga") ? "#00A9AD" : "#EFEFEF",
              color: isActive("/Warga") ? "#FFFFFF" : "inherit",
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
          onClick={() => Navigate("/Warga/Keamanan")}
          sx={{
            backgroundColor: isActive("/Warga/Keamanan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/Warga/Keamanan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga/Keamanan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga/Keamanan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/Warga/Keamanan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText primary="Keamanan" />
        </ListItem>
        <ListItem
          button
          onClick={() => Navigate("/Warga/Kebersihan")}
          sx={{
            backgroundColor: isActive("/Warga/Kebersihan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/Warga/Kebersihan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga/Kebersihan")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga/Kebersihan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/Warga/Kebersihan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText primary="Kebersihan" />
        </ListItem>
        <ListItem
          button
          onClick={() => Navigate("/Warga/Ikk")}
          sx={{
            backgroundColor: isActive("/Warga/Ikk") ? "#00A9AD" : "inherit",
            color: isActive("/Warga/Ikk") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga/Ikk") ? "1px solid #EFEFEF" : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga/Ikk") ? "#00A9AD" : "#EFEFEF",
              color: isActive("/Warga/Ikk") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText primary="IKK" />
        </ListItem>
        <ListItem
          button
          onClick={() => Navigate("/Warga/Ews")}
          sx={{
            backgroundColor: isActive("/Warga/Ews") ? "#00A9AD" : "inherit",
            color: isActive("/Warga/Ews") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga/Ews") ? "1px solid #EFEFEF" : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga/Ews") ? "#00A9AD" : "#EFEFEF",
              color: isActive("/Warga/Ews") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <CameraIcon />
          </ListItemIcon> */}
          <ListItemText primary="Early Warning System" />
        </ListItem>

        <ListItem
          button
          onClick={() => Navigate("/Warga/Panggilan")}
          sx={{
            backgroundColor: isActive("/Warga/Panggilan")
              ? "#00A9AD"
              : "inherit",
            color: isActive("/Warga/Panggilan") ? "#FFFFFF" : "inherit",
            borderBottom: isActive("/Warga/Panggilann")
              ? "1px solid #EFEFEF"
              : "0px",
            "&:hover": {
              backgroundColor: isActive("/Warga/Panggilan")
                ? "#00A9AD"
                : "#EFEFEF",
              color: isActive("/Warga/Panggilan") ? "#FFFFFF" : "inherit",
            },
          }}
        >
          {/* <ListItemIcon>
            <EmergencyIcon />
          </ListItemIcon> */}
          <ListItemText primary="Panggilan Darurat" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
