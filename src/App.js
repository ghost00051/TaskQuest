import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Убедитесь, что вы импортируете только Route и Routes
import Entr from './component/entrance/entrance';
import Registration from './component/registration/registration';
import './App.css';
import Mai from './component/main/main'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Entr />} /> {/* Страница Entrance */}
        <Route path="/registration" element={<Registration />} /> {/* Страница Registration */}
      </Routes>
    </div>
  );
};

export default App;