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
        }
       ]

export default mainRoutes