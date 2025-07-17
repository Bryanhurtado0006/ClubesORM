import React, { use } from "react";



type DataProps = {
  nombre: string;
    setNombre: (nombre: string) => {};
}

const Details: React.FC<DataProps> = ({ nombre, setNombre }) => {

    const navigate=useNavigate();

     const irData = () => {
        navigate("/data");

    
     }

  return (
    <div>
      <p>Este es el componente Details</p>
      <p>Nombre escrito es: {nombre}</p>
      <input type="text" onChange={(event) => setNombre(event.target.value)} />
      <button onClick={irData}> Data</button>
    </div>
  );
};

export default Details;
