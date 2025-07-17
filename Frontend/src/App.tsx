import React from 'react';
import Profile from './Profile';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dash from './Dash';

const App: React.FC = () => {
  return (
    <div>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </Router>
      
        
        

      </UserProvider>
    </div>
  );
};

export default App;








/*import React, { useState } from "react";
import Details from "./assets/Details";
import Data from "./assets/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const [nombre, setNombre] = useState("");

  return (
  <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Details nombre={nombre} setNombre={setNombre} />} />
        <Route path="/data" element={<Data nombre={nombre} />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
*/
