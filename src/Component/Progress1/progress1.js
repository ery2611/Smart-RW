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

function ProgressDarurat() {
  const StatusBadge = styled(Box)(({ theme }) => ({
    backgroundColor: "#CCEEEF",
    color: "#00a9ad",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));
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
            <StatusBadge
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "130px",
                height:"30px",
                fontWeight:'bolder'
              }}
            >
              TIBA DILOKASI
            </StatusBadge>
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
              INFORMASI PETUGAS 2
            </Typography>
            <Memanggil
              sx={{
                justifyContent: "center",
                display: "flex",
                alignContent: "flex-start",
                alignItems: "center",
                width: "130px",
                height:"30px",
                fontWeight:'bolder'
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
