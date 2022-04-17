import { useState } from "react"
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";

export  function Register(){
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const {signUp} = useAuth()
    const navigate = useNavigate();
    const [error,setError] = useState();

    
    const handleChange = ({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
           await signUp(user.email,user.password)
           navigate("/login");

        }catch(error){
            setError(error.message)
        }
    };
    return(
    <div>
        {error && <p>{error}</p>}
            
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange}></input>
            <input name="password" placeholder="Password" onChange={handleChange}></input>
            <button >Register</button>
        </form>
    </div>

    )
}