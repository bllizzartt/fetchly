import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the path as necessary
import HomePage2 from './HomePage2';
import HomePage3 from './HomePage3'; // Import HomePage3
import OpenAi from './OpenAi'; // Import the component but name it OpenAi
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/home3" element={<HomePage3 />} />
        <Route path="/openai" element={<OpenAi />} /> {/* Updated the path name */}
      </Routes>
    </Router>
  );
}

export default App;
