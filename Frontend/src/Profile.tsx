import React from "react";
import { UseUser } from "./UserContext";

const Profile: React.FC = () => {
  const { nombre, setNombre } = UseUser();

  return (
    <div>
      <h1>Profile Component</h1>
      <p>nombre: {nombre}</p>
      <input
        type="text"
        onChange={(event) => setNombre(event.target.value)}
      />
    </div>
  );
};

export default Profile;
