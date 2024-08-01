import React from "react";
import { CssBaseline, Container } from "@mui/material";
import DashBoard from "./Pages/EWS/Index";
import SmartCity from './Pages/Form_tambah/SmartCity'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Container style={{ marginLeft: 240, marginTop: 20 }}>
        <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="Tambah" element={<SmartCity/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
