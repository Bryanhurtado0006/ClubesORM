import { createContext,useContext,useState, type ReactNode } from "react";



//variables globales 
type UserContextType={
    nombre:string;
    setNombre:(nuevonombre:string)
}


//crear contexto
const UserContext=createContext<UserContextType>

//provider = toma las rutas 
export const UserProvider=({children}:{children:ReactNode})=>{
    const [nombre,setNombre]=useState('')
    return(

        <UserContext.Provider value= [{nombre,setnombre}]>
            {children}
        </UserContext.Provider>

    )
    }

    //uso de contexto
    export const UserUser=()=>{
        const context=useContext(UserContext);
        return context
    
    }

export default UserContext