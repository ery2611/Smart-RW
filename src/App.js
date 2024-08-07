import React from "react";
import { CssBaseline, Container } from "@mui/material";
import DashBoard from "./Pages/EWS/Index";
import SmartCity from "./Pages/Form_tambah/SmartCity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OGS from "./Pages/OGS/Index";
import Panggilan from "./Pages/Panggilan/Index";
import WargaEWS from "./Pages/WargaEWS/Index";
import WargaKebersihan from "./Pages/WargaKebersihan/Index";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Container style={{ marginLeft: 240, marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="Tambah" element={<SmartCity />} />
          <Route path="OGS" element={<OGS />} />
          <Route path="Panggilan" element={<Panggilan />} />
          <Route path="WargaEWS" element={<WargaEWS />} />
          <Route path="WargaKebersihan" element={<WargaKebersihan />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
