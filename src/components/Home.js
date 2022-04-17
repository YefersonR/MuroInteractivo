import { useAuth } from "../authContext"

export function Home(){

    const {user,logOut} = useAuth()

    console.log(user)
    const handleLogOut=async()=>{
        await logOut()
    }
    return (
    <div>
        <p>Hola {user.displayName ? user.displayName:user.email} </p>
        <button onClick={handleLogOut}>Cerrar Session</button>
    </div>
    )
}