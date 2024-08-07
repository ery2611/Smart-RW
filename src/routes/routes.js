import React, {lazy, Suspense} from 'react'




const Loadable = Component => props => {
   
  
    return(
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}
const Home = Loadable(lazy(()=>import('../pages/pagesCommand/Dashboard')))
const EWS = Loadable(lazy(()=>import('../pages/pagesCommand/Ews/index')))
const Tambah = Loadable(lazy(()=>import('../pages/pagesCommand/Ews/tambah')))
const DEws = Loadable(lazy(()=>import('../pages/pagesCommand/Ews/detail')))
const Ogs = Loadable(lazy(()=>import('../pages/pagesCommand/Ogs/index')))
const Ogsdetail = Loadable(lazy(()=>import('../pages/pagesCommand/Ogs/detail')))
const TambahOgs = Loadable(lazy(()=>import('../pages/pagesCommand/Ogs/tambah')))
const Notif = Loadable(lazy(()=>import('../pages/pagesCommand/Notif')))
const Keamanan = Loadable(lazy(()=>import('../pages/pagesCommand/Keamanan/index')))
const DeKeamanan = Loadable(lazy(()=>import('../pages/pagesCommand/Keamanan/deKeamanan')))
const Laporan = Loadable(lazy(()=>import('../pages/pagesCommand/LaporanDeteksi/index')))
const TLaporan = Loadable(lazy(()=>import('../pages/pagesCommand/LaporanDeteksi/tambah')))
const DObjekLaporan = Loadable(lazy(()=>import('../pages/pagesCommand/LaporanDeteksi/detail')))
const Panggilan  = Loadable(lazy(()=>import('../pages/pagesCommand/Panggilan/index')))
const Dpanggilan = Loadable(lazy(()=>import('../pages/pagesCommand/Panggilan/detail')))
const Rpanggilan = Loadable(lazy(()=>import('../pages/pagesCommand/Panggilan/riwayat')))
const DRpanggilan = Loadable(lazy(()=>import('../pages/pagesCommand/Panggilan/detailriwayat')))

// Const Wrga
const DashboardWarga = Loadable(lazy(()=>import('../pages/pagesWarga/Dashboard')))
const DKegiatan = Loadable(lazy(()=>import('../pages/pagesWarga/Kegiatan/detail')))
const DPengumuman = Loadable(lazy(()=>import('../pages/pagesWarga/Pengumuman/detail')))
const EwsWarga = Loadable(lazy(()=>import('../pages/pagesWarga/Ews/index')))
const PanggilanWarga = Loadable(lazy(()=>import('../pages/pagesWarga/PanggilanDarurat/index')))
const Kebersihan = Loadable(lazy(()=>import('../pages/pagesWarga/Kebersihan/index')))
const JadwalKebersihan = Loadable(lazy(()=>import('../pages/pagesWarga/Kebersihan/jadwal')))
const FormKebersihan = Loadable(lazy(()=>import('../pages/pagesWarga/Kebersihan/form')))

const Kegiatan = Loadable(lazy(()=>import('../pages/pagesWarga/Kegiatan/index')))
const LihatForum = Loadable(lazy(()=>import('../pages/pagesWarga/Forum/lihat')))
const KeamananWarga = Loadable(lazy(()=>import('../pages/pagesWarga/Keamanan/Index')))
const FormKeamanan = Loadable(lazy(()=>import('../pages/pagesWarga/Keamanan/Form')))

const mainRoutes =[{
    path: '',
    element: <Home />
},
{
    path:'/Ews',
    element: <EWS />
},
{
    path:'/Ews/Tambah',
    element:<Tambah />
},
{
    path:'/Ogs/Detail',
    element:<Ogsdetail />
},
{
    path:'/Notif',
    element:<Notif />
},
{
    path:'/Ogs',
    element:<Ogs />
},
{
    path:'/Ogs/Tambah',
    element:<TambahOgs />
},
{
    path:'/Keamanan',
    element:<Keamanan />
},
{
    path:'/Keamanan/Detail',
    element:<DeKeamanan />
 },
 {
     path:'/LaporanHasilDeteksi',
     element:<Laporan />
  },
  {
      path:'/LaporanHasilDeteksi/Tambah',
      element:<TLaporan />
   },
   {
       path:'/LaporanHasilDeteksi/Detail',
       element:<DObjekLaporan />
    },
   {
       path:'/Panggilan/Detail',
       element:<Dpanggilan />
    },
    {
        path:'/Ews/Detail',
        element:<DEws />
     },
     {
         path:'/Panggilan',
         element:<Panggilan />
      },
      {
          path:'/Panggilan/Riwayat',
          element:<Rpanggilan />
       },
       {
           path:'/Panggilan/Riwayat/DetailRiwayat',
           element:<DRpanggilan />
        },
        // path warga
        {
            path:'/Warga',
            element:<DashboardWarga /> 
        },{
            path:'/DetailKegiatan',
            element:<DKegiatan />
        },{
            path:'/Warga/Kegiatan',
            element:<Kegiatan />
        }
        ,{
            path:'/DetailPengumuman',
            element:<DPengumuman />
        },{
            path:'/Warga/Ews',
            element:<EwsWarga />
        },{
            path:'/Warga/Panggilan',
            element:<PanggilanWarga />
        },{
            path:'/Warga/Kebersihan/JadwalKebersihan',
            element:<JadwalKebersihan />
        },{
            path:'/Warga/Kebersihan',
            element:<Kebersihan />
        },{
            path:'/Warga/Kebersihan/FormKebersihan',
            element:<FormKebersihan />
        },{
            path:'/Forum/Lihat',
            element:<LihatForum />
        },{
            path:'/Warga/Keamanan',
            element:<KeamananWarga />
        },{
            path:'/Warga/Keamanan/FormKeamanan',
            element:<FormKeamanan />
        }
       ]

export default mainRoutes