import React from "react";
import { createContext, useState, ReactNode, useContext } from "react";
import { UseUser } from "./UserContext";

const Dash: React.FC = () => {
    const { nombre } = UseUser(); 
    return(
        <div>
            <p>componente dash</p>
            <p>nombre:{nombre}</p>
        </div>
    )
}

export default Dash;