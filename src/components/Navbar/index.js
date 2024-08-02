import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
// S
import { useNavigate, useLocation } from "react-router-dom";
import CameraIcon from '@mui/icons-material/Camera';
import ReportIcon from '@mui/icons-material/Report';
// import EmergencyIcon from '@mui/icons-material/Emergency';

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
          <ListItemText primary="Dashboard"  onClick={() => Navigate("/")}
             sx={{ color: isActive("/") ? '#00A9AD' : 'inherit', 
                borderBottom: isActive("/") ? '1px solid #EFEFEF' : '0px'}}
          />
        </ListItem>
     
        <ListItem button>
          {/* <ListItemIcon>
            <WarningIcon />
          </ListItemIcon> */}
          <ListItemText primary="Early Warning System"  onClick={() => Navigate("/Ews")}
           sx={{ color: isActive("/Ews") ? '#00A9AD' : 'inherit', 
            borderBottom: isActive("/Ews") ? '1px solid #EFEFEF' : '0px'}}
            />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon> */}
          <ListItemText primary="Keamanan" onClick={() => Navigate("/Keamanan")} 
            sx={{ color: isActive("/Keamanan") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/Keamanan") ? '1px solid #EFEFEF' : '0px'}} />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <GateIcon />
          </ListItemIcon> */}
          <ListItemText primary="One Gate System"  onClick={() => Navigate("/Ogs")} 
            sx={{ color: isActive("/Ogs") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/Ogs") ? '1px solid #EFEFEF' : '0px'}}
            />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <CameraIcon />
          </ListItemIcon> */}
          <ListItemText primary="CCTV" />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <ReportIcon />
          </ListItemIcon> */}
          <ListItemText primary="Laporan Hasil Deteksi" onClick={() => Navigate("/LaporanHasilDeteksi")} 
            sx={{ color: isActive("/LaporanHasilDeteksi") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/LaporanHasilDeteksi") ? '1px solid #EFEFEF' : '0px'}}  />
        </ListItem>
        <ListItem button>
          {/* <ListItemIcon>
            <EmergencyIcon />
          </ListItemIcon> */}
          <ListItemText primary="Panggilan Darurat"  onClick={() => Navigate("/Panggilan")} 
            sx={{ color: isActive("/Panggilan") ? '#00A9AD' : 'inherit', 
              borderBottom: isActive("/Panggilan") ? '1px solid #EFEFEF' : '0px'}} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
