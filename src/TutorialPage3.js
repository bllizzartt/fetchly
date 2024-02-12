import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import topLogo from './white-whole-foods.png'; // Make sure the path is correct
import meatsImage from './meat.png';

function TutorialPage2() {
  const navigate = useNavigate();

  // Categories data for the first row, assuming you have different images for each
  const categoriesFirstRow = [
    { name: 'Meats', imageSrc: meatsImage },
    { name: 'Dairy', imageSrc: meatsImage },
    { name: 'Produce', imageSrc: meatsImage },
    { name: 'Beverages', imageSrc: meatsImage },
    // other categories...
  ];

  // Handler for when "Start Tutorial" is clicked
  const startNextTutorialPart = () => {
    console.log('Going to the next part of the tutorial');
    navigate('/tutorial4'); // Assuming you have a TutorialPage3 for the next part of the tutorial
  };

  return (
    <div className="welcomeContainer">
      <div className="logoContainer">
        <img src={topLogo} alt="Whole Foods Market" />
      </div>
      <h1>Welcome to Part 2!</h1>
      {/* ... */}
      {/* Here we add the categories display */}
      <div className="categoriesContainer">
        <div className="categoryRow">
          {categoriesFirstRow.map((category) => (
            <button 
            className="categoryItem" 
            key={category.name} 
            onClick={() => startNextTutorialPart(category.name)}
          >
            <img src={category.imageSrc} alt={category.name} className="categoryImage" />
            <div>{category.name}</div>
          </button>
          ))}
        </div>
      </div>
      <div className="buttonContainer">
        {/* You can add any other buttons if needed */}
      </div>
      <button className="tutorialButton" onClick={startNextTutorialPart}>
        Continue Tutorial
      </button>
    </div>
  );
}

export default TutorialPage2;
