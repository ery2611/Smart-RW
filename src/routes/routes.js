import React, {lazy, Suspense} from 'react'


const Loadable = Component => props => {
    return(
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}
const Home = Loadable(lazy(()=>import('../pages/Dashboard')))
const EWS = Loadable(lazy(()=>import('../pages/Ews')))
const Tambah = Loadable(lazy(()=>import('../pages/Tews')))
const Ogs = Loadable(lazy(()=>import('../pages/Ogs/index')))
const Ogsdetail = Loadable(lazy(()=>import('../pages/Ogs/detail')))
const TambahOgs = Loadable(lazy(()=>import('../pages/Ogs/tambah')))
const Notif = Loadable(lazy(()=>import('../pages/Notif')))
const Keamanan = Loadable(lazy(()=>import('../pages/Keamanan/index')))
const DeKeamanan = Loadable(lazy(()=>import('../pages/Keamanan/deKeamanan')))
const Laporan = Loadable(lazy(()=>import('../pages/LaporanDeteksi/index')))
const TLaporan = Loadable(lazy(()=>import('../pages/LaporanDeteksi/tambah')))

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
   }]

export default mainRoutes