import { useState } from "react"
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";


export function Login(){
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const {login, signGoogle} = useAuth()
    const navigate = useNavigate();
    const [error,setError] = useState();
    
    const handleChange = ({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await login(user.email,user.password) 
            navigate("/")
        }catch(err){
            setError(err.message)
        }
    }
    const handleGoogle= async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await signGoogle()
            navigate("/")
        }catch(err){
            setError(err.message)
        }

    }
    return(
    <div>
        {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
           <input type="email" name="email" placeholder="Ingrese su email" onChange={handleChange}/>
           <input type="password" name="password" placeholder="Ingrese su contraseña" onChange={handleChange}/>
           <a href="/recoverpassword">Forgot password?</a>
           <button>Ingresar</button>
       </form> 
           <button onClick={handleGoogle}>Ingresar con google</button>
    </div>
    )
}