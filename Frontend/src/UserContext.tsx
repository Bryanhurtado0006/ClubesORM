import React, { createContext, useContext, useState, ReactNode } from "react";


// Tipado del contexto
type UserContextType = {
  nombre: string;
  setNombre: (nombre: string) => void;
};

// Crear el contexto con valores por defecto (pueden ser falsos pero del tipo correcto)
const UserContext = createContext<UserContextType>({
  nombre: '',
  setNombre: () => {},
});

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [nombre, setNombre] = useState('');

  return (
    <UserContext.Provider value={{ nombre, setNombre }}>
      {children}

    
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const UseUser = () => {
  return useContext(UserContext);
};

export default UserContext;
