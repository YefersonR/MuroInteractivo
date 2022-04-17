import { createContext,useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase'

export const authContext = createContext();

export const useAuth = ()=> {
    const context = useContext(authContext)
    if(!context) throw new Error("There")
    return context
}

export function AuthProvider({children}){
    const signUp = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
    }
    return(
        <authContext.Provider value={{signUp,login}}>
            {children}
        </authContext.Provider>
    )
}