//EWS
import React from "react";
import {
  Stack,
  Typography,
  Box,
  Container,
  Paper,
  Button,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CodeQR from "../../Assets/QRCode.png";
import ShowQRIcon from "../../Assets/ShowQRCode.png";
import DownloadIcon from "../../Assets/Download.png";

const TransferCodeQR = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Dashboard/ IKK/
          </Typography>
          <Typography variant="h9" sx={{ color: "black", fontWeight: "bold" }}>
            Transfer
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#00A9AD",
                    height: 3,
                  },
                  "& .MuiTab-root.Mui-selected": {
                    color: "#00A9AD",
                  },
                }}
              >
                <Tab label="KEBERSIHAN" value="1" />
                <Tab label="SAMPAH" value="2" />
                <Tab label="AIR" value="3" />
                <Tab label="PBB" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4"></TabPanel>
          </TabContext>
        </Box>
        <Container sx={{ marginBottom: 2 }}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={30}
              fontWeight={"bold"}
              fontFamily={"montserrat"}
            >
              Scan QR Code di bawah ini:
            </Typography>
            <img
              src={CodeQR}
              alt="CodeQR"
              style={{ width: "387px", height: "387px" }}
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Stack direction={"column"} alignItems={"center"}>
              <Box
                component={Paper}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "88px",
                  height: "88px",
                  borderRadius: "10px",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              >
                <Box sx={{ displlay: "fluid" }}>
                  <img
                    src={ShowQRIcon}
                    alt="ShowQRIcon"
                    sx={{
                      alignItems: "center",
                      width: "64px",
                      height: "64px",
                      color: "#000000",
                    }}
                  />
                </Box>
              </Box>
              <Typography textAlign={"center"} fontSize={11} fontWeight={600}>
                SHOW <br /> QR
              </Typography>
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <Box
                component={Paper}
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "88px",
                  height: "88px",
                  borderRadius: "10px",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              >
                <Box sx={{ displlay: "fluid" }}>
                  <img
                    src={DownloadIcon}
                    alt="DownloadIcon"
                    sx={{
                      alignItems: "center",
                      width: "64px",
                      height: "64px",
                      color: "#000000",
                    }}
                  />
                </Box>
              </Box>
              <Typography textAlign={"center"} fontSize={11} fontWeight={600}>
                DOWNLOAD <br /> QR
              </Typography>
            </Stack>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                width: "90%",
                mt: 3,
              }}
            >
              <Box sx={{ width: "100%", textAlign: "end", mb: 5 }}>
                <Button
                  variant="outlined"
                  sx={{ height: 38, color: "#00A9AD", fontWeight: "bold" }}
                >
                  KEMBALI
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Stack>
    </div>
  );
};

export default TransferCodeQR;
