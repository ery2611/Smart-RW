import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  styled
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import ProgressTiba from "../ProgressTiba/progressTiba";
import ProgressMemanggil from "../ProgressMemanggil/progressMemanggil";
import ProgressMenuju from "../ProgressMenuju/progressMenuju";

function ProgressDarurat() {


  return (
    <div>
      <Container
        maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 2,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",
          padding: 1,
          borderRadius: "10px",
          pb:3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "0" }}>DAFTAR PETUGAS</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "end",
          }}
        >
          <p
            style={{
              marginBottom: "0",
              fontWeight: "bolder",
              color: "#00a9ad",
            }}
          >
            1 Tiba
          </p>
        </Box>

        <ProgressTiba/>
        <ProgressMemanggil/>
        <ProgressMenuju/>
        
        <Button
              onClick={() => Navigate("/")}
              sx={{
                color: "#00a9ad",
                fontWeight: "bolder",
                fontSize:'18px',
                width: "100%",
                height: "50px",
                mt:3,
                border: "2px solid #00a9ad",
                "&:hover": {
                  border: "2px solid #00a9ad",
                  color: "#00a9ad",
                },
              }}
              variant="outlined"
            >
              DETAIL PANGGILAN
            </Button>
      </Container>
    </div>
  );
}

export default ProgressDarurat;
