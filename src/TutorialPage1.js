import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure to import your CSS file

function TutorialPage1() {
  const navigate = useNavigate(); // This hook provides the navigation function

  const handlePickUp = () => {
    console.log('Pick Up option selected');
    // Add your navigation logic here for the Pick Up option if needed
  };

  const handleBuildList = () => {
    console.log('Build List option selected');
    navigate('/home'); // Use navigate to change the route
  };

  const startTutorial = () => {
    console.log('Tutorial started');
    // Add your navigation logic here for starting the tutorial if needed
  };

  return (
    <div className="welcomeContainer">
      <div className="logoContainer">
        {/* Assuming you have the logo saved locally */}
        <img src="/path-to-your-logo.png" alt="Whole Foods Market" />
      </div>
      <h1>Welcome!</h1>
      <h2>Select one to get started</h2>
      <div className="buttonContainer">
        <button onClick={handlePickUp}>Pick Up</button>
        <button onClick={handleBuildList}>Build List</button>
      </div>
      <button className="tutorialButton" onClick={startTutorial}>
        Start Tutorial
      </button>
    </div>
  );
}

export default TutorialPage1;
