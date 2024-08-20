import React from "react"

export interface Warga {
    id: number;
    nama: string;
    alamat: string;
    waktu_pengaduan: string;
    tanggal: Date | null;
    tanggapan: string;
    catatan: string;
  }

 interface petugas {
    nama: string;
    jabantan: string;
    waktu_masuk: string;
    waktu_selesai?: string;
    media?: string;
    catatan?: string
  }

export const LaporanWarga = (): Warga[] => {
    return [{
        id: 1,
        nama: "kautsar Hakam",
        alamat: "kemang pratama 1",
        waktu_pengaduan: "10:10",
        tanggal: new Date("2024-01-01"),
        tanggapan: "Belum Ditanggapi",
        catatan: "Terdapat farrel di depan rumah saya"
      },
      {
        id: 2,
        nama: "Muhammad Rifaldo",
        alamat: "kemang pratama 2",
        waktu_pengaduan: "15:22",
        tanggal: new Date("2024-01-01"),
        tanggapan: "Selesai",
        catatan:"terdapat kucing yang menyangkut di pohon depan rumah saya"
      },
      {
        id: 3,
        nama: "Bintang Fathurahman",
        alamat: "kemang pratama 3",
        waktu_pengaduan: "17:20",
        tanggal: new Date("2024-01-01"),
        tanggapan: "Selesai",
        catatan:'Adanya pencurian dan kucing saya sedang di sekap'
      },
      {
        id: 4,
        nama: "Rafif Muhammad",
        alamat: "kemang pratama 4",
        waktu_pengaduan: "15:12",
        tanggal: new Date("2024-01-01"),
        tanggapan: "Belum Ditanggapi",
        catatan:'Saya di duga sedang menyekap kucing tetangga saya, padahal saya hanya memberinya makan saja'
      },
      {
        id: 5,
        nama: "Farrel Savero",
        alamat: "kemang pratama 5",
        waktu_pengaduan: "01:01",
        tanggal: new Date("2024-01-01"),
        tanggapan: "Selesai",
        catatan:"kucing saya menghilang"
      },
    ]
  }

  export const currentPertugas = (): petugas[] => {
    return [{
      nama:'Rafif Yulistian',jabantan:'Kepalan Keamanan', waktu_masuk:'10:45'
    }]
  }

  export const getColor = (tanggap: string): React.CSSProperties => {
    switch (tanggap) {
      case "Selesai":
        return {
          color: "#2ECC71",
          fontSize: 12,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
        };
      case "Belum Ditanggapi":
        return {
          color: "#CE1305",
          fontSize: 12,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
        };
    case "Sedang Ditanggap":
        return {
         color: "#FF9F0A",
        fontSize: 12,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
     }
      default:
        return {};
    }
  };
