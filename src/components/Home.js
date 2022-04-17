import { useAuth } from "../authContext"

export function Home(){
    const authContext = useAuth();
    console.log(authContext)
    return <h2>HOME</h2>
}