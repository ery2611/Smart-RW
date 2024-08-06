import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
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
        '& .MuiDrawer-paper': {
          position:"absolute",
          top: 100,
          width: 240,
          boxSizing: 'border-box',
          height:'450px',
          borderRadius:'10px'
        },
      }}
    >
      <List>
        <ListItem button>
          {/* <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon> */}
          <ListItemText primary="Dashboard"  onClick={() => Navigate("/Warga")}
             sx={{ color: isActive("/Warga") ? '#00A9AD' : 'inherit', 
                borderBottom: isActive("/Warga") ? '1px solid #EFEFEF' : '0px'}}
          />
        </ListItem>
     
        <ListItem button>
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText primary="Keamanan"  onClick={() => Navigate("/Warga")}
           sx={{ color: isActive("/") ? '#00A9AD' : 'inherit', 
            borderBottom: isActive("/") ? '1px solid #EFEFEF' : '0px'}}
            />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText primary="Kebersihan" onClick={() => Navigate("/Warga")} 
            sx={{ color: isActive("/") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/") ? '1px solid #EFEFEF' : '0px'}} />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText primary="IKK"  onClick={() => Navigate("/Warga")} 
            sx={{ color: isActive("/") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/") ? '1px solid #EFEFEF' : '0px'}}
            />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <CameraIcon />
          </ListItemIcon> */}
          <ListItemText primary="Early Warning System" />
        </ListItem>
       
        <ListItem button>
          {/* <ListItemIcon>
            <EmergencyIcon />
          </ListItemIcon> */}
          <ListItemText primary="Panggilan Darurat"  onClick={() => Navigate("/Warga")} 
            sx={{ color: isActive("/") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/") ? '1px solid #EFEFEF' : '0px'}} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
