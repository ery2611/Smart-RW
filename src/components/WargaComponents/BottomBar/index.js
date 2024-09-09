import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import Ews from "@mui/icons-material/Flood";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Ikk from "@mui/icons-material/Payments";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import Ogs from "@mui/icons-material/RvHookup";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const containerStyle = (path) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isActive(path) ? "#00A9AD" : "transparent",
    borderRadius: "50px",
    padding: "8px",
    transition: "background-color 0.3s",
  });

  const iconStyle = (path) => ({
    color: isActive(path) ? "#FFFFFF" : "#00A9AD",
    fontSize: "24px",
  });

  const textStyle = (path) => ({
    color: isActive(path) ? "#FFFFFF" : "#00A9AD",
    fontSize: "10px",
    marginTop: "4px",
  });

  return (
    <Box
      sx={{
        display: { md: "none", sm: "flex" },
        flexDirection: "column",
        mt: "10px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {/* Main content of the application */}
      </Box>

      {/* Centered Bottom Navigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
          }}
        >
          <BottomNavigationAction
            onClick={() => navigate("/Warga")}
            icon={
              <Box sx={containerStyle("/Warga")}>
                <HomeIcon sx={iconStyle("/Warga")} />
                <Typography sx={textStyle("/Warga")}>Home</Typography>
              </Box>
            }
          />
          <BottomNavigationAction
            onClick={() => navigate("/Warga/EWS")}
            icon={
              <Box sx={containerStyle("/Warga/EWS")}>
                <Ews sx={iconStyle("/Warga/EWS")} />
                <Typography sx={textStyle("/Warga/EWS")}>EWS</Typography>
              </Box>
            }
          />
          <BottomNavigationAction
            onClick={() => navigate("/Warga/Darurat")}
            icon={
              <Box sx={containerStyle("/Warga/Darurat")}>
                <ReportProblemIcon sx={iconStyle("/Warga/Darurat")} />
                <Typography sx={textStyle("/Warga/Darurat")}>
                  Darurat
                </Typography>
              </Box>
            }
          />
          <BottomNavigationAction
            onClick={() => navigate("/Warga/IKK")}
            icon={
              <Box sx={containerStyle("/Warga/IKK")}>
                <Ikk sx={iconStyle("/Warga/IKK")} />
                <Typography sx={textStyle("/Warga/IKK")}>IKK</Typography>
              </Box>
            }
          />
          <BottomNavigationAction
            onClick={() => navigate("/Warga/OGS")}
            icon={
              <Box sx={containerStyle("/Warga/OGS")}>
                <Ogs sx={iconStyle("/Warga/OGS")} />
                <Typography sx={textStyle("/Warga/OGS")}>OGS</Typography>
              </Box>
            }
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
