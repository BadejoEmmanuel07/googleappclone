import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from "react-router-dom";
import API from './Components/Api';
import Resultapi from './Components/Resultapi';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<API />} />
          <Route path="/results" element={<Resultapi />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;

