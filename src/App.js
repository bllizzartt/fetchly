import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import TutorialPage1 from './TutorialPage1'; // Import your TutorialPage1 component
import HomePage from './HomePage';
import HomePage2 from './HomePage2';
import HomePage3 from './HomePage3';
import OpenAi from './OpenAi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TutorialPage1 />} /> {/* Make TutorialPage1 the root path */}
        <Route path="/home" element={<HomePage />} /> {/* Changed from "/" to "/home" */}
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/home3" element={<HomePage3 />} />
        <Route path="/openai" element={<OpenAi />} />
      </Routes>
    </Router>
  );
}

export default App;
