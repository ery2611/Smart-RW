import mainRoutes from "../src/routes/routes";
import "./App.css";
import Header from "./components/CommandComponents/Header";
import SmHeader from "./components/ComponentKeamananMobile/Header/index";
import Bar from "./components/CommandComponents/Navbar";
import { Box } from "@mui/material";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import React from "react";

function App() {
  const location = useLocation();

  //memberikan title pada s=navbar xs
  const getTitleAndBackButton = (pathname) => {
    const detailMatch =
      pathname.match(/^\/KeamananMobile\/Pengaduan\/Detail\/(\d+)$/) ||
      pathname.match(/^\/KebersihanMobile\/Pengaduan\/Detail\/(\d+)$/);

    if (detailMatch) {
      const id = detailMatch[1]; // Mengambil ID dari path
      return { title: `DETAIL PENGADUAN`, showBackButton: true };
    }

    switch (pathname) {
      case "/KeamananMobile":
        return { title: "SMART RW", showBackButton: false };
      case "/KebersihanMobile":
        return { title: "SMART RW", showBackButton: false };
      case "/KeamananMobile/Notifikasi":
        return { title: "NOTIFIKASI", showBackButton: true };
      case "/KeamananMobile/Ogs":
        return { title: "ONE GATE SYSTEM", showBackButton: true };
      case "/KeamananMobile/Pos":
        return { title: "POS", showBackButton: true };
      case "/KeamananMobile/Jadwal":
        return { title: "JADWAL", showBackButton: true };
      case "/KeamananMobile/Pengaduan":
        return { title: "PENGADUAN", showBackButton: true };
      case "/KeamananMobile/Jadwal/DetailOngoing":
        return { title: "DETAIL JADWAL", showBackButton: true };

      case "/KeamananMobile/Jadwal/FormOngoing":
        return { title: "DETAIL JADWAL", showBackButton: true };
      case "/KebersihanMobile/Laporan":
        return { title: "LAPORAN SAYA", showBackButton: true };
      case "/KebersihanMobile/Laporan/Detail":
        return { title: "DETAIL LAPORAN", showBackButton: true };
      case "/KebersihanMobile/Jadwal":
        return { title: "JADWAL", showBackButton: true };
      case "/KebersihanMobile/Jadwal/Detail":
        return { title: "DETAIL JADWAL", showBackButton: true };
      case "/KebersihanMobile/Jadwal/Detail/Form":
        return { title: "DETAIL JADWAL", showBackButton: true };
      case "/KebersihanMobile/Notifikasi":
        return { title: "NOTIFIKASI", showBackButton: true };
      case "/KebersihanMobile/Pengaduan":
        return { title: "PENGADUAN", showBackButton: true };

      default:
        return { title: "Smart RW", showBackButton: true }; // Default value
    }
  };

  const { title, showBackButton } = getTitleAndBackButton(location.pathname);
  return (
    <Box>
      <SmHeader title={title} showBackButton={showBackButton} />
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "row", // Arrange children in a row
          // Optional: add some padding around the content
        }}
      >
        <Box
          sx={{
            flex: 1, // Allow Routes to take up the remaining space
            // Optional: add some space between the sidebar and the main content
            marginTop: "20px",
            maxHeight: "700px",
            marginBottom: "10px",
          }}
        >
          <Routes>
            {mainRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
