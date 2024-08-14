import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Laporanbulanan from "./bulanan";
import Laporanpengaduan from "./pengaduan";
import Laporanharian from "./harian";

export default function Pagedashboardlaporan() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Divider = styled("hr")({
    border: 0,
    height: 1,
    backgroundColor: "#C5BDBD",
    margin: "10px 0",
  });

  return (
    <Box>
      <Box
        sx={{
          marginBottom: "5px",
          display: "flex",
          height: "3%",
          width: "100%",
        }}
      >
        <Stack direction="column" textAlign="left">
          <Typography
            variant="h5"
            sx={{
              marginBottom: 0,
              color: "#00A9AD",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            KEBERSIHAN
          </Typography>
          <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
            <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
              Dashboard/
            </Typography>
            <Typography
              variant="h9"
              align="center"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Notifikasi
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%",}}>
              <Box
                sx={{
                  color: "black",
                  marginBottom: "20px",
                  width: "100%",
                  textAlign: "end",
                }}
              >
                Senin, 01/02/2024
              </Box>
            </Box>
            </Box>

      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          typography: "body1",
          backgroundColor: "#FEFEFE",
        }}
      >
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Semua" value="1" />
              <Tab label="Belum Terbaca" value="2" />
              <Tab label="Sudah Terbaca" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Laporanharian />
          </TabPanel>

          <TabPanel value="2">
            <Laporanbulanan />
          </TabPanel>

          <TabPanel value="3">
            <Laporanpengaduan />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
