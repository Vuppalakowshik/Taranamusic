import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner}  from './webcomponents/Banner';
import { Homepage } from './webcomponents/homepage';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;