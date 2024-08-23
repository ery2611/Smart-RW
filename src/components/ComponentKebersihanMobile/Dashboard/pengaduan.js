// /src/components/ComplaintSummary.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

const ComplaintSummary = () => {
  const Navigate = useNavigate();
  const truncateText = (text, maxLength) => {
    if (!text) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardContent>
        <Typography
          fontSize="14px"
          sx={{ color: "#00a9ad", fontWeight: "bold" }}
        >
          Pengaduan Warga
        </Typography>
        <Card
          sx={{
            padding: "16px",
            maxWidth: 400,
            boxShadow: 5,
            marginTop: "10px",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            {/* Replace the person icon with an image in an Avatar component */}
            <Avatar
              src="https://via.placeholder.com/100"
              sx={{ width: 40, height: 40, borderRadius: "50%" }}
            />
            <Box sx={{ marginLeft: "8px", flex: 1 }}>
              <Typography variant="h6" noWrap sx={{ maxWidth: "100%" }}>
                {truncateText("Pengaduan Kebersihan", 25)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", maxWidth: "100%" }}
                noWrap
              >
                <LocationOnIcon
                  sx={{ marginRight: "4px", fontSize: 16, color: "#FE4646" }}
                />
                {truncateText("Jl. Kemang Pratama 2, Blok AE", 25)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00A9AD",
                color: "white",
                "&:hover": {
                  backgroundColor: "#00A9AD",
                  color: "white",
                },
              }}
            >
              TANGGAPI
            </Button>
          </Box>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#00A9AD", fontWeight: "regular" }}
          >
            3 Aduan Lainnya
          </Typography>
          <Button
            onClick={() => Navigate("/KebersihanMobile/Pengaduan")}
            variant="contained"
            sx={{
              backgroundColor: "#CCEEEF",
              color: "#00A9AD", // text color (white)
              textTransform: "none", // to prevent the text from being uppercase
              "&:hover": {
                backgroundColor: "#CCEEEF", // same color on hover
                color: "#00A9AD", // text color (white)
              },
            }}
            endIcon={<ArrowForwardIcon sx={{ color: "#00A9AD" }} />}
          >
            Lihat Semua
          </Button>
        </Box>
        {/* <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
        
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default ComplaintSummary;
