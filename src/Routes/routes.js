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
const ProgressDarurat = Loadable(lazy(()=>import('../Pages/ProgressPanggilanDarurat/index')))
const ForumLihat = Loadable(lazy(()=>import('../Pages/ForumLihat/index')))

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
    path:'/ProgressDarurat',
    element: <ProgressDarurat/>
},
{
    path:'/ForumLihat',
    element: <ForumLihat/>
},


]

export default mainRoutes