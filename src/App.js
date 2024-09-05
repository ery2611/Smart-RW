import React from "react";
import { CssBaseline, Container } from "@mui/material";
import DashBoard from "./Pages/EWS/Index";
import SmartCity from "./Pages/Form_tambah/SmartCity";
import { Routes, Route } from "react-router-dom";
import OGS from "./Pages/OGS/Index";
import Panggilan from "./Pages/Panggilan/Index";
import WargaEWS from "./Pages/WargaEWS/Index";
import WargaKebersihan from "./Pages/WargaKebersihan/Index";
import IndexKegiatan from "./Pages/IKKdetail/Index";
import TransferCodeQR from "./Pages/QR/Index";
import KebersihanJadwal from "./Pages/KebersihanJadwal/Index";
import KeamananPos from "./Pages/KeamananPos/Index";
import KeamananJadwal from "./Pages/KeamananJadwalMobile/Index";
import KebersihanJadwalMobile from "./Pages/KebersihanJadwalMobile/Index";
import PemotonganRumput from "./Pages/RiwayatIKK/PemotonganRumput";
import PengambilanSampah from "./Pages/RiwayatIKK/PengambilanSampah";
import SapuJalan from "./Pages/RiwayatIKK/SapuJalan";
import FormPemotonganRumput from "./Pages/FormPengaduan/PemotonganRumput";
import RiwayatPengaduan from "./Pages/RiwayatIKK/RiwayatPengaduan";
import FormPengambilanSampah from "./Pages/FormPengaduan/PengambilanSampah";
import FormSapuJalan from "./Pages/FormPengaduan/Sapujalan";
import FormPengaduan from "./Pages/FormPengaduan/FormPengaduan";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="Tambah" element={<SmartCity />} />
          <Route path="OGS" element={<OGS />} />
          <Route path="Panggilan" element={<Panggilan />} />
          <Route path="WargaEWS" element={<WargaEWS />} />
          <Route path="WargaKebersihan" element={<WargaKebersihan />} />
          <Route path="detil" element={<IndexKegiatan />} />
          <Route path="qr" element={<TransferCodeQR />} />
          <Route path="KebersihanJadwal" element={<KebersihanJadwal />} />
          <Route path="KeamananPos" element={<KeamananPos />} />
          <Route path="KeamananJadwal" element={<KeamananJadwal />} />
          <Route path="PemotonganRumput" element={<PemotonganRumput />} />
          <Route path="PengambilanSampah" element={<PengambilanSampah />} />
          <Route
            path="FormPemotonganRumput"
            element={<FormPemotonganRumput />}
          />
          <Route
            path="FormPengambilanSampah"
            element={<FormPengambilanSampah />}
          />
          <Route path="FormSapuJalan" element={<FormSapuJalan />} />
          <Route path="FormPengaduan" element={<FormPengaduan />} />
          <Route path="SapuJalan" element={<SapuJalan />} />
          <Route
            path="KebersihanJadwalMobile"
            element={<KebersihanJadwalMobile />}
          />
          <Route path="RiwayatPengaduan" element={<RiwayatPengaduan />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
