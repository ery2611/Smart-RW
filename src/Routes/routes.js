import React, {lazy, Suspense} from 'react'


const Loadable = Component => props => {
    return(
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}
const Keamanan = Loadable(lazy(()=>import('../Pages/Keamanan')))
const Detail = Loadable(lazy(()=>import('../Pages/DetailKeamanan')))
const Laporan = Loadable(lazy(()=>import('../Pages/LaporanDeteksi')))
const DetailRiwayat = Loadable(lazy(()=>import('../Pages/DetailRiwayat')))
const Kegiatan = Loadable(lazy(()=>import('../Pages/Kegiatan/kegiatan')))
const Pengumuman = Loadable(lazy(()=>import('../Pages/DetailPengumuman/index')))
const FormPengaduan = Loadable(lazy(()=>import('../Pages/FormPengaduanWarga/form')))
const FormJadwalPetugas = Loadable(lazy(()=>import('../Pages/FormJadwalPetugas/index')))
const ProgressDarurat = Loadable(lazy(()=>import('../Pages/ProgressPanggilanDarurat/index')))
const ForumLihat = Loadable(lazy(()=>import('../Pages/ForumLihat/index')))
const DetailTinggiMukaAir = Loadable(lazy(()=>import('../Pages/DetailTinggiMukaAir/index')))
const DetailTagihanLunas = Loadable(lazy(()=>import('../Pages/DetailTagihanLunas/index')))
const DetailJadwalPetugas = Loadable(lazy(()=>import('../Pages/DetailJadwalPetugas/index')))
const DetailLaporan = Loadable(lazy(()=>import('../Pages/DetailLaporan/index')))
const RiwayatPanggilan = Loadable(lazy(()=>import('../Pages/RiwayatPanggilanUtama/panggilanUtama')))
const KeamananNotifikasi = Loadable(lazy(()=>import('../Pages/KeamananNotifikasi/index')))
const KeamananOnGoing4 = Loadable(lazy(()=>import('../Pages/KeamananOngoing4/index')))
const KeamananUpcoming = Loadable(lazy(()=>import('../Pages/KeamananOngoing4/upcoming')))
const KebersihanDetail = Loadable(lazy(()=>import('../Pages/KebersihanDetail/index')))
const KebersihanDetail2 = Loadable(lazy(()=>import('../Pages/KebersihanDetail/detail2')))
const WargaEWS = Loadable(lazy(()=>import('../Pages/Warga/WargaEWS/index')))

const mainRoutes =[{
    path: '',
    element: <Keamanan />
},
{
    path:'/detail',
    element: <Detail />
},
{
    path:'/laporan',
    element: <Laporan />
},
{
    path:'/detailriwayatpanggilan',
    element: <DetailRiwayat />
},
{
    path:'/kegiatan',
    element: <Kegiatan/>
},
{
    path:'/pengumuman',
    element: <Pengumuman/>
},
{
    path:'/FormPengaduan',
    element: <FormPengaduan/>
},
{
    path:'/FormJadwalPetugas',
    element: <FormJadwalPetugas/>
},
{
    path:'/ProgressDarurat',
    element: <ProgressDarurat/>
},
{
    path:'/ForumLihat',
    element: <ForumLihat/>
},
{
    path:'/DetailTinggiMukaAir',
    element: <DetailTinggiMukaAir/>
},
{
    path:'/DetailJadwalPetugas',
    element: <DetailJadwalPetugas/>
},
{
    path:'/DetailLaporan',
    element: <DetailLaporan/>
},
{
    path:'/Tagihan',
    element: <DetailTagihanLunas/>
},    
{
    path:'/RiwayatPanggilan',
    element: <RiwayatPanggilan/>
},
{
    path:'/KeamananNotifikasi',
    element: <KeamananNotifikasi/>
},
{
    path:'/KeamananOnGoing4',
    element: <KeamananOnGoing4/>
},
{
    path:'/KeamananUpcoming',
    element: <KeamananUpcoming/>
},
{
    path:'/KebersihanDetail',
    element: <KebersihanDetail/>
},
{
    path:'/KebersihanDetail/BuatLaporan',
    element: <KebersihanDetail2/>
},
{
    path:'/WargaEWS',
    element: <WargaEWS/>
},


]

export default mainRoutes