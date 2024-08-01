import mainRoutes from "./routes"
import { useRoutes } from "react-router-dom"


export default function Routes(){
    const routing = useRoutes(mainRoutes)
    return <>{routing}</>
}