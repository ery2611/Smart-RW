import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import Forum from "../../../components/WargaComponents/Berita/all";
import Header from "../../../components/WargaComponents/Header";
import Highlight from "../../../components/WargaComponents/Berita/highlight";
import Footer from "../../../components/WargaComponents/DashboardBaru/Footer/index";
import { useNavigate } from "react-router-dom";

function Index() {
  // mwengeccek ukuran screen
  const isSmOrSmaller = useMediaQuery("(max-width:600px)");
  const isLargerThanSm = useMediaQuery("(min-width:600px)");
  const Navigate = useNavigate();

  return (
    <Box>
      <Header />
      {isLargerThanSm && (
        <Box sx={{ width: "100%", display: { md: "flex", sm: "none" } }}>
          <Highlight />
        </Box>
      )}
      {isSmOrSmaller && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              edge="start"
              sx={{ color: "#00A9AD", marginRight: "auto" }}
              onClick={() => Navigate("/Warga")}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                flexGrow: 1,
                textAlign: "center",
                marginLeft: "-48px", // Adjust to keep text centered when the back button is present
              }}
            >
              Berita
            </Typography>
          </Box>
          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search"
            sx={{
              marginTop: "8px",
              width: "80%",
              backgroundColor: "#ffffff", // Set background color to white
              borderRadius: "20px", // Rounded corners
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Apply shadow effect
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensure input field has rounded corners
                "& fieldset": {
                  border: "none", // Remove the border
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#00A9AD" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
        }}
      >
        <Forum />
      </Box>
      <Footer />
    </Box>
  );
}

export default Index;
