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
        <ListItem button onClick={() => Navigate("/Warga")}>
          {/* <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Dashboard"
            sx={{
              color: isActive("/Warga") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga") ? "1px solid #EFEFEF" : "0px",
            }}
          />
        </ListItem>

        <ListItem button onClick={() => Navigate("/Warga/Keamanan")}>
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Keamanan"
            sx={{
              color: isActive("/Warga/Keamanan") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga/Keamanan")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Warga/Kebersihan")}>
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Kebersihan"
            sx={{
              color: isActive("/Warga/Kebersihan") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga/Kebersihan")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Warga/Ikk")}>
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="IKK"
            sx={{
              color: isActive("/Warga/Ikk") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga/Ikk")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => Navigate("/Warga/Ews")}>
          {/* <ListItemIcon>
            <CameraIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Early Warning System"
            sx={{
              color: isActive("/Warga/Ews") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga/Ews")
                ? "1px solid #EFEFEF"
                : "0px",
            }}
          />
        </ListItem>

        <ListItem button onClick={() => Navigate("/Warga/Panggilan")}>
          {/* <ListItemIcon>
            <EmergencyIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="Panggilan Darurat"
            sx={{
              color: isActive("/Warga/Panggilan") ? "#00A9AD" : "inherit",
              borderBottom: isActive("/Warga/Panggilan")
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
