import React, { lazy, Suspense } from "react";

const Loadable = (Component) => (props) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../pages/pagesCommand/Dashboard")));
const EWS = Loadable(lazy(() => import("../pages/pagesCommand/Ews/index")));
const Tambah = Loadable(lazy(() => import("../pages/pagesCommand/Ews/tambah")));
const DEws = Loadable(lazy(() => import("../pages/pagesCommand/Ews/detail")));
const Ogs = Loadable(lazy(() => import("../pages/pagesCommand/Ogs/index")));
const Ogsdetail = Loadable(
  lazy(() => import("../pages/pagesCommand/Ogs/detail"))
);
const TambahOgs = Loadable(
  lazy(() => import("../pages/pagesCommand/Ogs/tambah"))
);
const Notif = Loadable(lazy(() => import("../pages/pagesCommand/Notif")));
const Keamanan = Loadable(
  lazy(() => import("../pages/pagesCommand/Keamanan/index"))
);
const DeKeamanan = Loadable(
  lazy(() => import("../pages/pagesCommand/Keamanan/deKeamanan"))
);
const Laporan = Loadable(
  lazy(() => import("../pages/pagesCommand/LaporanDeteksi/index"))
);
const TLaporan = Loadable(
  lazy(() => import("../pages/pagesCommand/LaporanDeteksi/tambah"))
);
const DObjekLaporan = Loadable(
  lazy(() => import("../pages/pagesCommand/LaporanDeteksi/detail"))
);
const Panggilan = Loadable(
  lazy(() => import("../pages/pagesCommand/Panggilan/index"))
);
const Dpanggilan = Loadable(
  lazy(() => import("../pages/pagesCommand/Panggilan/detail"))
);
const Rpanggilan = Loadable(
  lazy(() => import("../pages/pagesCommand/Panggilan/riwayat"))
);
const DRpanggilan = Loadable(
  lazy(() => import("../pages/pagesCommand/Panggilan/detailriwayat"))
);

// Const Warga

const DashboardWarga = Loadable(
  lazy(() => import("../pages/pagesWarga/Dashboard"))
);

const Ikk = Loadable(lazy(() => import("../pages/pagesWarga/Ikk/index.tsx")));

const OgsWarga = Loadable(lazy(() => import("../pages/pagesWarga/Ogs")));
const DKegiatan = Loadable(
  lazy(() => import("../pages/pagesWarga/Kegiatan/detail"))
);
const DPengumuman = Loadable(
  lazy(() => import("../pages/pagesWarga/Pengumuman/detail"))
);
const EwsWarga = Loadable(lazy(() => import("../pages/pagesWarga/Ews/index")));
const Gallery = Loadable(
  lazy(() => import("../pages/pagesWarga/Galeri/index.js"))
);
const PanggilanWarga = Loadable(
  lazy(() => import("../pages/pagesWarga/PanggilanDarurat/index"))
);
const Kebersihan = Loadable(
  lazy(() => import("../pages/pagesWarga/Kebersihan/index"))
);
const JadwalKebersihan = Loadable(
  lazy(() => import("../pages/pagesWarga/Kebersihan/jadwal"))
);
const FormKebersihan = Loadable(
  lazy(() => import("../pages/pagesWarga/Kebersihan/form"))
);
const Kegiatan = Loadable(
  lazy(() => import("../pages/pagesWarga/Kegiatan/index"))
);
const Berita = Loadable(lazy(() => import("../pages/pagesWarga/Berita/index")));
const PengumumanWarga = Loadable(
  lazy(() => import("../pages/pagesWarga/Pengumuman/index"))
);
const DetailBerita = Loadable(
  lazy(() => import("../pages/pagesWarga/Berita/lihat.js"))
);
const KeamananWarga = Loadable(
  lazy(() => import("../pages/pagesWarga/Keamanan/Index"))
);
const FormKeamanan = Loadable(
  lazy(() => import("../pages/pagesWarga/Keamanan/Form"))
);

const PanggilanKeamanan = Loadable(
  lazy(() => import("../pages/pagesWarga/PanggilanDarurat/keamanan"))
);
const FormWargaKeamanan = Loadable(
  lazy(() => import("../pages/pagesWarga/PanggilanDarurat/tambahKeamanan"))
);

const RiwayatPanggilanDaruratWarga = Loadable(
  lazy(() =>
    import("../pages/pagesWarga/PanggilanDarurat/Riwayat/panggilanUtama")
  )
);
const DPanggilanWarga = Loadable(
  lazy(() => import("../pages/pagesWarga/PanggilanDarurat/detailPanggilan"))
);

// Routes Kebersihan
const DashKebersihan = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Dashboard/index"))
);
const JadwalKebersihanPetugas = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Jadwal/index"))
);
const LaporanKebersihan = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Laporan/index"))
);
const FormJadwalKebersihanPetugas = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Jadwal/form"))
);

const DetailJadwalKebersihanPetugas = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Jadwal/detail"))
);
const Cuti = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Cuti/index"))
);
const Reschedule = Loadable(
  lazy(() => import("../pages/pagesKebersihan/Jadwal/reschedule"))
);

// ROUTES MOBILE KEAMANAN
const MobileKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Dashboard/index"))
);
const NotifikasiKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Notifikasi/index"))
);
const OgsKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/OGS/index"))
);
const PosKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Pos/index"))
);
const KeamananJadwal = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Jadwal/index"))
);
const PengaduanKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Pengaduan/index.tsx"))
);
const DetailPengaduanKeamanan = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Pengaduan/detail.tsx"))
);
const DetailJadwal = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Jadwal/jadwalOngoing.js"))
);
const FormOngoing = Loadable(
  lazy(() => import("../pages/PagesKeamananMobile/Jadwal/OngoingEmpat.js"))
);

// Kebersihan Mobile
const KebersihanMobile = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Dashboard/index.js"))
);
const LaporanKebersihanMobile = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Laporan/index.js"))
);
const JadwalKebersihanMobile = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Jadwal/index.js"))
);
const DetailJadwalKebersihanMobile = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Jadwal/detail.js"))
);
const FormDetailKebersihan = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Jadwal/form.js"))
);
const NotifKebersihan = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Notifikasi/index.js"))
);
const PengaduanKebersihan = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Pengaduan/index.tsx"))
);
const DetailPengaduanKebersihan = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Pengaduan/detail.tsx"))
);
const LaporanKebersihanDetail = Loadable(
  lazy(() => import("../pages/PagesKebersihanMobile/Laporan/detail.tsx"))
);

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Ews",
    element: <EWS />,
  },
  {
    path: "/Ews/Tambah",
    element: <Tambah />,
  },
  {
    path: "/Ogs/Detail",
    element: <Ogsdetail />,
  },
  {
    path: "/Notif",
    element: <Notif />,
  },
  {
    path: "/Ogs",
    element: <Ogs />,
  },
  {
    path: "/Ogs/Tambah",
    element: <TambahOgs />,
  },
  {
    path: "/Keamanan",
    element: <Keamanan />,
  },
  {
    path: "/Keamanan/Detail",
    element: <DeKeamanan />,
  },
  {
    path: "/LaporanHasilDeteksi",
    element: <Laporan />,
  },
  {
    path: "/LaporanHasilDeteksi/Tambah",
    element: <TLaporan />,
  },
  {
    path: "/LaporanHasilDeteksi/Detail",
    element: <DObjekLaporan />,
  },
  {
    path: "/Panggilan/Detail",
    element: <Dpanggilan />,
  },
  {
    path: "/Ews/Detail",
    element: <DEws />,
  },
  {
    path: "/Panggilan",
    element: <Panggilan />,
  },
  {
    path: "/Panggilan/Riwayat",
    element: <Rpanggilan />,
  },
  {
    path: "/Panggilan/Riwayat/DetailRiwayat",
    element: <DRpanggilan />,
  },

  // path warga
  {
    path: "/Warga",
    element: <DashboardWarga />,
  },
  {
    path: "/DetailKegiatan",
    element: <DKegiatan />,
  },
  {
    path: "/Warga/Kegiatan",
    element: <Kegiatan />,
  },
  {
    path: "/Warga/Berita",
    element: <Berita />,
  },
  {
    path: "/Warga/Pengumuman",
    element: <PengumumanWarga />,
  },
  {
    path: "/DetailPengumuman",
    element: <DPengumuman />,
  },
  {
    path: "/Warga/Ews",
    element: <EwsWarga />,
  },
  {
    path: "/Warga/Ogs",
    element: <OgsWarga />,
  },
  {
    path: "/Warga/Ikk",
    element: <Ikk />,
  },
  {
    path: "/Warga/Panggilan",
    element: <PanggilanWarga />,
  },
  {
    path: "/Warga/Kebersihan/JadwalKebersihan",
    element: <JadwalKebersihan />,
  },
  {
    path: "/Warga/Kebersihan",
    element: <Kebersihan />,
  },
  {
    path: "/Warga/Kebersihan/FormKebersihan",
    element: <FormKebersihan />,
  },
  {
    path: "/DetailBerita",
    element: <DetailBerita />,
  },
  {
    path: "/Warga/Gallery",
    element: <Gallery />,
  },
  {
    path: "/Warga/Keamanan",
    element: <KeamananWarga />,
  },
  {
    path: "/Warga/Keamanan/FormKeamanan",
    element: <FormKeamanan />,
  },
  {
    path: "/Warga/Panggilan/Keamanan",
    element: <PanggilanKeamanan />,
  },
  {
    path: "/Warga/Panggilan/Keamanan/Form",
    element: <FormWargaKeamanan />,
  },
  {
    path: "/Warga/PanggilanDarurat/Riwayat",
    element: <RiwayatPanggilanDaruratWarga />,
  },
  {
    path: "/Warga/PanggilanDarurat/DetailPanggilanDarurat",
    element: <DPanggilanWarga />,
  },

  //
  {
    path: "/DashboardKebersihan",
    element: <DashKebersihan />,
  },
  {
    path: "/JadwalKebersihan",
    element: <JadwalKebersihanPetugas />,
  },
  {
    path: "/LaporanKebersihan",
    element: <LaporanKebersihan />,
  },
  {
    path: "/JadwalKebersihan/Form",
    element: <FormJadwalKebersihanPetugas />,
  },
  {
    path: "/CutiKebersihan",
    element: <Cuti />,
  },
  {
    path: "/JadwalKebersihan/Detail",
    element: <DetailJadwalKebersihanPetugas />,
  },
  {
    path: "/JadwalKebersihan/Reschedule",
    element: <Reschedule />,
  },
  // PAGES KEAMANAN MOBILE

  {
    path: "/KeamananMobile",
    element: <MobileKeamanan />,
  },
  {
    path: "/KeamananMobile/Notifikasi",
    element: <NotifikasiKeamanan />,
  },
  {
    path: "/KeamananMobile/Ogs",
    element: <OgsKeamanan />,
  },
  {
    path: "/KeamananMobile/Pos",
    element: <PosKeamanan />,
  },
  {
    path: "/KeamananMobile/Jadwal",
    element: <KeamananJadwal />,
  },
  {
    path: "/KeamananMobile/Pengaduan",
    element: <PengaduanKeamanan />,
  },
  {
    path: "/KeamananMobile/Pengaduan/Detail/:id",
    element: <DetailPengaduanKeamanan />,
  },
  {
    path: "/KeamananMobile/Jadwal/DetailOngoing",
    element: <DetailJadwal />,
  },
  {
    path: "/KeamananMobile/Jadwal/FormOngoing",
    element: <FormOngoing />,
  },

  // Kebersihan Mobile

  {
    path: "/KebersihanMobile",
    element: <KebersihanMobile />,
  },
  {
    path: "/KebersihanMobile/Notifikasi",
    element: <NotifKebersihan />,
  },
  {
    path: "/KebersihanMobile/Laporan",
    element: <LaporanKebersihanMobile />,
  },
  {
    path: "/KebersihanMobile/Laporan/Detail",
    element: <LaporanKebersihanDetail />,
  },
  {
    path: "/KebersihanMobile/Jadwal",
    element: <JadwalKebersihanMobile />,
  },
  {
    path: "/KebersihanMobile/Jadwal/Detail",
    element: <DetailJadwalKebersihanMobile />,
  },
  {
    path: "/KebersihanMobile/Jadwal/Detail/Form",
    element: <FormDetailKebersihan />,
  },
  {
    path: "/KebersihanMobile/Pengaduan",
    element: <PengaduanKebersihan />,
  },
  {
    path: "/KebersihanMobile/Pengaduan/Detail/:id",
    element: <DetailPengaduanKebersihan />,
  },
];

export default mainRoutes;
