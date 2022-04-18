import { useState } from "react"
import { collection, onSnapshot, addDoc,getDocs } from "firebase/firestore"; 
import {db} from '../firebase-config'
import { useAuth } from "../authContext";

export function Publicar(){
    const [publi,setPubli] = useState({
        id:'',
        publicacion:''
    })
    const {user} = useAuth()
    const handleChange=({target})=>{
        setPubli(target.value)
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{

            await addDoc(collection(db,"publicaciones"),{
                publicacion:publi
            })
            console.log('se envio')
        }catch(err){
            console.log(err.message)
        }

    }

    return(
        <div>
        { user &&
        <form onSubmit={handleSubmit}>
        <textarea type="textarea" placeholder="Que estas pensando?" onChange={handleChange}/>
        <button className="post">Publicar</button>
        </form>
        }
        </div>
    )
}