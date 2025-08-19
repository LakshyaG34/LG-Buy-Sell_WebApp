"use client"

import { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        async function checkLogin(){
            try{
                const res = await fetch("/api/me");
                const data = await res.json();
                setIsLoggedIn(data.isLoggedIn);
            }catch(error){
                setIsLoggedIn(false);
            }
        }
        checkLogin();
    },[]);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return(
        <AuthContext.Provider value ={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
