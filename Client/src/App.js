import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import PatientDetails from './components/PatientDetails';
import CurrentPat from './components/CPatient/CurrentPat';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PatientDetails" element={<PatientDetails/>} />
          <Route path="/CurrentPat" element={<CurrentPat/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
