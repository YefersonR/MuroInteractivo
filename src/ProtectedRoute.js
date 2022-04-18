import { useAuth } from "./authContext";
//import { Navigate } from "react-router-dom";
//<Navigate to='/login'/>
export function ProtectedRoute({children}){
    const {user} = useAuth()
    if (!user) return 'Pagina de solo las publicaciones'
    return <>{children}</>
}