import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner}  from './webcomponents/Banner';
import { Homepage } from './webcomponents/homepage';
import { Footer } from  './webcomponents/footer';
import {Download} from './webcomponents/Download';
import { DownloadRedirect } from './webcomponents/DownloadRedirect';
import {Navbar} from './webcomponents/Navbar';
import { Demo } from './webcomponents/Demo';
import {Aboutus} from './webcomponents/About';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/download" element={<Download />} />
          <Route path="/redirect" element={<DownloadRedirect />} />
          <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;