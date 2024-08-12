import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PanggilanKeamanan from "../Riwayat/panggilanKeamanan";
import PanggilanBencana from "../Riwayat/panggilanBencana";
import PanggilanKebakaran from "../Riwayat/panggilanKebakaran";
import PanggilanKesehatan from "../Riwayat/panggilanKesehatan";
import { Container, Stack, Typography } from "@mui/material";
import Bar from "../../../../components/WargaComponents/Navbar";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Bar />
      <Container
        sx={{
          maxWidth: "1200px",
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{
              marginBottom: 0,
              color: "#00A9AD",
              fontSize: 18,
              textAlign: "left",
            }}
          >
            WARGA
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/ Panggilan Darurat/
            </Typography>
            <Typography
              variant="h9"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Riwayat Panggilan
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  "& .MuiTab-root": {
                    color: "#a0a1a4", // Default color for unselected
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    "&.Mui-selected": {
                      color: "#00a9ad", // Color for selected tab
                    },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#00a9ad", // Color for the indicator (underline)
                  },
                }}
              >
                <Tab label="KESEHATAN" value="1" />
                <Tab label="KEBAKARAN" value="2" />
                <Tab label="BENCANA" value="3" />
                <Tab label="KEAMANAN" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PanggilanKesehatan />
            </TabPanel>
            <TabPanel value="2">
              <PanggilanKebakaran />
            </TabPanel>
            <TabPanel value="3">
              <PanggilanBencana />
            </TabPanel>
            <TabPanel value="4">
              <PanggilanKeamanan />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
}
