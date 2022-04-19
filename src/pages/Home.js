import { useAuth } from "../authContext"
import { Publications } from "../components/Publications"
import { Publicar } from "../components/Publicar"
import { useState } from "react"
import {db} from '../firebase-config'
import { collection, onSnapshot, addDoc,doc,getDocs,setDoc, QuerySnapshot } from "firebase/firestore"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from '../user.png'


import './Home.css'


export function Home(){

    const {user,logOut} = useAuth()
    const [publi,setPubli] = useState([])
    const navigate = useNavigate();
    

    const handleLogOut=async()=>{
        await logOut()
    }
    const handleLogin=()=>{
        navigate('/login')
    }

    const getpubli=async()=>{
         const querySnapshot = collection(db, `publicaciones`);
         const Snapshot = await getDocs(querySnapshot)
         const result = Snapshot.docs.map(doc=> doc.data())
         setPubli(result)

    }

    useEffect(()=>{
        getpubli()
    },[])
    console.log(user)
    return (
    <div>
        <header>
            <div  className="header-home">

            <div className="userinfo">
            {
                
                user && user.photoURL ?
                <img src={user.photoURL} alt="" />
                :
                 <img src={image} alt=""/> 
            }
            <h3>{user ? user.displayName ||user.email : "Bienvenido"}</h3>
            </div>            
            {
                user ? <button className="logout" onClick={handleLogOut}>Cerrar Session</button>
                : <button className="login" onClick={handleLogin}>iniciar Session</button>
            }

            </div>
        </header>
        <Publicar />
        <div className="publicaciones" >
            <Publications posts={publi}/>
        </div>
    
    </div>
    )
} 