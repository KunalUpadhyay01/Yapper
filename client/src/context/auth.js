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
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
    },[])
    return (<AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export {Auth, useAuth};