import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Chip,
  Container,
} from "@mui/material";

const detail = () => {
  return (
    <Container
      maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
      sx={{
        maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
        marginTop: 2,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h3 style={{ marginBottom: "0" }}>DETAIL</h3>
      </Box>
      <Box
        component={Paper}
        sx={{
          p: 2,
          background: "white",
          marginTop: 2,
          maxWidth: "100%",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontFamily: "Montserrat" }}
        >
          INFORMASI PELAPOR
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Nama Warga" secondary=": Khoirul Mustaan" />
          </ListItem>
          <ListItem>
            <ListItemText primary="NIK" secondary=": 3213124603450001" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Nomor Telepon" secondary=": 087889342226" />
          </ListItem>
        </List>
      </Box>

      <Box
        component={Paper}
        sx={{ p: 2, background: "white", marginTop: 2, maxWidth: "800px" }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontFamily: "Montserrat" }}
        >
          INFORMASI ADUAN KEAMANAN
        </Typography>

        <Chip
          label="DITERIMA"
          sx={{
            color: "#5AF411",
            bgcolor: "#DBF8DC",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "100px",
            marginLeft: 2, // adjust height if necessary
          }}
        />

        <List>
          <ListItem>
            <ListItemText
              primary="Judul"
              secondary=": Orang meresahkan lewat depan rumah"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jenis" secondary=": Keamanan" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Tanggal Pengaduan"
              secondary=": 06/01/2024"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Waktu Pengaduan" secondary=": 08:00" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Lokasi Kejadian"
              secondary="Jalan Kemang Dahlia Blok Z no. 12, RT 02/RW 02"
            />
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText primary="Media" />
            <img
              src="https://images2.alphacoders.com/925/thumb-1920-925917.png"
              alt="Media"
              style={{
                maxWidth: "300px",
                width: "100%",
              }}
            />
          </ListItem>
        </List>
      </Box>

      <Box
        component={Paper}
        sx={{
          p: 2,
          background: "white",
          marginTop: 2,
          maxWidth: "100%",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontFamily: "Montserrat" }}
        >
          KETERANGAN ADUAN
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Alasan Pengaduan"
              secondary="Ada orang tidak jelas yang setiap hari keliling keliling depan rumah saya, entah apa tujuan orang tersebut tetapi terlihat mencurigakan"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Keterangan"
              secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default detail;
