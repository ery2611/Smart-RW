import React, { createContext, useContext, useState } from 'react';

const KebersihanContext = createContext();

export const useKebersihanContext = () => useContext(KebersihanContext);

export const KebersihanProvider = ({ children }) => {
  const [Data, setData] = useState([
    {
        id: 1,
        nama: "Kautsar Hakam",
        tanggal_pengajuan: "24/08/2024",
        jam_pengajuan: "08:00",
        status: "DITERIMA",
      },
      {
        id: 2,
        nama: "Bintang Fathurahman",
        tanggal_pengajuan: "16/08/2024",
        jam_pengajuan: "09:00",
        status: "DITERIMA",
      },
      {
        id: 3,
        nama: "Rafif Muhammad Faiz",
        tanggal_pengajuan: "14/08/2024",
        jam_pengajuan: "23:00",
        status: "DITOLAK",
      },
      {
        id: 4,
        nama: "Farrel Savero Suta",
        tanggal_pengajuan: "30/08/2024",
        jam_pengajuan: "12:00",
        status: "BELUM DITERIMA",
      },
      {
        id: 5,
        nama: "Muhammad Parsya",
        tanggal_pengajuan: "15/08/2024",
        jam_pengajuan: "08:00",
        status: "BELUM DITERIMA",
      },
      {
        id: 6,
        nama: "Galih Simantung",
        tanggal_pengajuan: "20/08/2024",
        jam_pengajuan: "10:00",
        status: "DITERIMA",
      },
      {
        id: 7,
        nama: "Kautsar Hakamu",
        tanggal_pengajuan: "24/08/2024",
        jam_pengajuan: "08:00",
        status: "DITOLAK",
      },
  ]);

  return (
    <KebersihanContext.Provider value={{ Data, setData }}>
      {children}
    </KebersihanContext.Provider>
  );
};