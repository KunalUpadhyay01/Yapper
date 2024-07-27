import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext()

const Auth = ({children}) =>{
    const [auth, setAuth] = useState({
        user:"",
        token: null,
    });
    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            setAuth({
                ...auth,
                user: data.user,
                token: data.token
            })
        }
    },[auth])
    return (<AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export {Auth, useAuth};