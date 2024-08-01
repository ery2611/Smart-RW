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
const Ogs = Loadable(lazy(()=>import('../pages/Ogs')))

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
    path:'/Ogs',
    element:<Ogs />
}]

export default mainRoutes