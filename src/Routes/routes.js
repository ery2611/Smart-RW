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


]

export default mainRoutes