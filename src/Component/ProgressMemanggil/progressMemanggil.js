import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  styled,
} from "@mui/material";

function ProgressMemanggil() {
    const Memanggil = styled(Box)(({ theme }) => ({
        backgroundColor: "#BCBCBE",
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "4px",
        display: "inline-block",
        marginBottom: theme.spacing(2),
      }));
  return (
    <div>
      <Card
        sx={{
          maxWidth: 700,
          margin: "0 auto",
          borderRadius: 2,
          p: 2,
          background: "white",
          marginTop: 2,
          maxWidth: "auto",
          boxShadow: 5,
        }}
      >
        <CardContent>
          <Typography
            textAlign="center"
            variant="h6"
            component="div"
            gutterBottom
            fontWeight="bolder"
            fontFamily="Montserrat"
          >
            INFORMASI PETUGAS 1
          </Typography>
          <Memanggil
            sx={{
              justifyContent: "center",
              display: "flex",
              alignContent: "flex-start",
              alignItems: "center",
              width: "150px",
              height: "30px",
              fontWeight: "bolder",
            }}
          > 
            MEMANGGIL
          </Memanggil>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
              gap: "230px", // Mengatur jarak antar box
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                height="40px"
                color="#A0A1A4"
                marginBottom={1}
                fontSize="20px"
              >
                Nama Petugas
              </Typography>
              <Typography
                variant="body1"
                height="30px"
                color="#A0A1A4"
                marginBottom={1}
                fontSize="20px"
              >
                Posisi
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                height="40px"
                color="#333333"
                marginBottom={1}
                fontSize="20px"
              >
                : Richard Testnama
              </Typography>
              <Typography
                variant="body1"
                height="30px"
                color="#333333"
                marginBottom={1}
                fontSize="20px"
              >
                : Petugas Keamanan
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProgressMemanggil;
