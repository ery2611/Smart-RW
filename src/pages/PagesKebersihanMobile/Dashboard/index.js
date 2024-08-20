// /src/pages/Dashboard.js
import React from "react";
import { Container, Grid, Box, Card, Typography } from "@mui/material";
import ScheduleCard from "../../../components/ComponentKebersihanMobile/Dashboard/schedule";
import ComplaintSummary from "../../../components/ComponentKebersihanMobile/Dashboard/pengaduan";
import OneGateSystemSummary from "../../../components/ComponentKebersihanMobile/Dashboard/Laporan";
import logo from "../../../assets/keamanan.png";
import Bar from "../../../components/ComponentKebersihanMobile/BottomBar";
import Header from "../../../components/ComponentKeamananMobile/Header/index";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();

  return (
    <Box sx={{ paddingBottom: 4 }}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          marginBottom: 2,
        }}
      >
        {/* BOX ATAS SAMPE BAWAH */}
        <Box
          sx={{
            display: "fluid",
            justifyContent: "flex-start",
            marginBottom: 1,
          }}
        >
          {/* BOX CARD MENU */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "100%",
              marginBottom: "20px",
              marginTop: "5px",
            }}
          >
            {/* CARD POS */}
            <Box
              sx={{
                display: "fluid",
                justifyContent: "flex-start",
              }}
            >
              <Card
                onClick={() => Navigate("/KeamananMobile/Pos")}
                sx={{
                  width: "70px",
                  height: "70px",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: 5,
                  margin: "auto",
                  paddingBottom: "20px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={logo}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "70px",
                    height: "70px",
                    color: "#000000",
                  }}
                />
              </Card>
              <Typography textAlign="center" fontSize="10px">
                JADWAL
              </Typography>
            </Box>
            {/* CARD JADWAL */}
            <Box
              sx={{
                display: "fluid",
                justifyContent: "flex-start",
              }}
            >
              <Card
                onClick={() => Navigate("/KeamananMobile/Jadwal")}
                sx={{
                  width: "70px",
                  height: "70px",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: 5,
                  margin: "auto",
                  paddingBottom: "20px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={logo}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "70px",
                    height: "70px",
                    color: "#000000",
                  }}
                />
              </Card>
              <Typography fontSize="10px" textAlign="center">
                LAPORAN
              </Typography>
            </Box>
            {/* cARD PENGADUAN */}
            <Box
              sx={{
                display: "fluid",
                justifyContent: "flex-start",
              }}
            >
              <Card
                onClick={() => Navigate("/KeamananMobile/Pengaduan")}
                sx={{
                  width: "70px",
                  height: "70Px",
                  justifyContent: "center",
                  alignContent: "center",
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: 5,
                  margin: "auto",
                  paddingBottom: "20px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={logo}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "70px",
                    height: "70px",
                    color: "#000000",
                  }}
                />
              </Card>
              <Typography fontSize="10px" textAlign="center">
                PENGADUAN
              </Typography>
            </Box>
            {/* CARD OGS */}
          </Box>
          <Box display="fluid" justifyContent="center" width="100%">
            <Box marginBottom="20px">
              <ScheduleCard />
            </Box>
            <Box marginBottom="20px">
              <ComplaintSummary />
            </Box>
            <Box marginBottom="20px">
              <OneGateSystemSummary />
            </Box>
          </Box>
          <Bar />
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
