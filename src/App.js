import React from "react";
import { CssBaseline, Container } from "@mui/material";
import DashBoard from "./Pages/EWS/Index";
<<<<<<< HEAD
import SmartCity from "./Pages/Form_tambah/SmartCity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OGS from "./Pages/OGS/Index";
=======
import SmartCity from './Pages/Form_tambah/SmartCity'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
>>>>>>> 6ec6d03659c19e4203f66a9b9a2b6cafc66a0061

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Container style={{ marginLeft: 240, marginTop: 20 }}>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<DashBoard />} />
          <Route path="Tambah" element={<SmartCity />} />
          <Route path="OGS" element={<OGS />} />
=======
        <Route path="/" element={<DashBoard/>}/>
        <Route path="Tambah" element={<SmartCity/>}/>
>>>>>>> 6ec6d03659c19e4203f66a9b9a2b6cafc66a0061
        </Routes>
      </Container>
    </div>
  );
}

export default App;
