//EWS
import React from "react";
import { Stack, Typography, Box, Container } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataCurahHujan from "./DataCurahHujan";
import DataPompaAir from "./DataPompaAir";
import DataTinggiMukaAir from "./DataTinggiMukaAir";

const WargaEWS = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const now = new Date();

  // Format tanggal
  const hari = now.toLocaleString("id-ID", { weekday: "long" }); // Nama hari
  const tanggal = now.toLocaleString("id-ID", { day: "2-digit" }); // Tanggal
  const bulan = now.toLocaleString("id-ID", { month: "2-digit" }); // Nama bulan
  const tahun = now.getFullYear(); // Tahun

  // Menyusun string tanggal
  const formatTanggal = `${hari}, ${tanggal} / ${bulan} / ${tahun}`;

  return (
    <div>
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
        >
          WARGA
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
          <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
            Dashboard/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Early Warning System
          </Typography>
        </Stack>
        <Container sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              justifyContent: "flex-end",
              display: "flex",
              marginBottom: 3,
            }}
          >
            {formatTanggal}
          </Typography>
          <Box sx={{ marginLeft: "10%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.468432544496!2d106.9707306!3d-6.2811956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8d95bbe353%3A0xc8d70e9ca75b316c!2sBrilyan%20Trimatra%20Utama!5e0!3m2!1sen!2sid!4v1723165266461!5m2!1sen!2sid"
              width="898"
              height="343"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="DATA TINGGI MUKA AIR" value="1" />
                <Tab label="DATA POMPA AIR" value="2" />
                <Tab label="DATA CURAH HUJAN" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DataTinggiMukaAir />
            </TabPanel>
            <TabPanel value="2">
              <DataPompaAir />
            </TabPanel>
            <TabPanel value="3">
              <DataCurahHujan />
            </TabPanel>
          </TabContext>
        </Box>
      </Stack>
    </div>
  );
};

export default WargaEWS;
