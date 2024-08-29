import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Kalender from "@mui/icons-material/CalendarToday"; // Replace with actual icon
import Jam from "@mui/icons-material/AccessTime"; // Replace with actual icon
import Lokasi from "@mui/icons-material/LocationOn"; // Replace with actual icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button
import Person from "@mui/icons-material/Person";

function Semua() {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          sx={{
            justifyContent: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          {/* Gambar */}
          <Card
            sx={{
              width: "100%",
              display: "inline-flex",
              marginRight: "20px", // Jarak antar card
              flexDirection: "column",
              flexShrink: 0, // Menghindari penyusutan card
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image="https://www.karebasulsel.id/wp-content/uploads/2022/11/les-bahasa-inggris-terdekat-1.jpg"
              alt={""}
              sx={{
                backgroundColor: "#EFEFEF",
                width: "100%", // Make the image span the full width of the card
                objectFit: "cover", // Ensure the image covers the area
              }}
            />
          </Card>
          {/* Card deskripsi */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-50px",
            }}
          >
            <Card
              sx={{
                width: "50%",
                display: "inline-flex",
                marginRight: "20px", // Jarak antar card
                flexDirection: "column",
                flexShrink: 0, // Menghindari penyusutan card
                padding: "16px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#00A9AD",
                    fontWeight: "bolder",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {truncateText("Forum Les Anak Bahasa Inggris", 70)}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {truncateText(
                    "Forum untuk pendataan dan pendaftaran les anak RW 36",
                    60
                  )}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#EE1717",
                        fontWeight: "bold",
                      }}
                    >
                      <Lokasi sx={{ marginRight: "5px" }} />
                      {truncateText("Kemang Pratama 2", 20)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => Navigate("/DetailKegiatan")}
                    sx={{
                      backgroundColor: "#00A9AD",
                      textTransform: "none",
                      ml: "auto",
                    }}
                  >
                    Lihat Forum
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Semua;
