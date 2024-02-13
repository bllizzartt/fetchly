import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import topLogo from './white-whole-foods.png';
import pantry from './pantry.png';
import meats from './meats.png';
import produce from './produce.png';
import beverages from './beverages.png';
import supplements from './supplements.png';
import body from './body.png';
import pet from './pet.png';
import household from './household.png';
import vector from './vector.png';
import trvector from './trvector.png';



function HomePage() {
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleTrvectorClick = () => {
    // Define what should happen when the button is clicked
    setIsMenuOpen(!isMenuOpen); // Toggles the state of the menu
    console.log('Icon clicked'); // For example, log to the console or navigate to another route
  };

  // Updated categories with image sources
  const categoriesFirstRow = [
    { name: 'Pantry Essentials', imageSrc: pantry },
    { name: 'Meats', imageSrc: meats },
    { name: 'Produce', imageSrc: produce },
    { name: 'Beverages', imageSrc: beverages },
    // other categories...
  ];
  const categoriesSecondRow = [
    { name: 'Supplements', imageSrc: supplements },
    { name: 'Body Care', imageSrc: body },
    { name: 'Pet', imageSrc: pet },
    { name: 'Households', imageSrc: household },
    // other categories...
  ];

  return (
    <div>
      <div className="squareBanner">
        <button onClick={handleTrvectorClick} className="iconButton" type="button">
          <img src={trvector} alt="Menu Icon" className="burgerIcon" />
        </button>
        <div className="topCenterLogo">
          <img src={topLogo} alt="Logo" />
        </div>
        <div className="bannerText">Welcome, Let's build your cart.</div>
        <div className="searchBarContainer">
          <input className="searchInput" placeholder="Search Wholefoods Inventory" />
          <img src={vector} alt="Search Icon" className="searchIcon" />
        </div>
      </div>
      
       {/* Slide-out menu */}
       <div className={`slideOutMenu ${isMenuOpen ? 'open' : ''}`}>
        {/* Menu content goes here */}
        <button onClick={() => setIsMenuOpen(false)}>Close Menu</button>
        {/* You can add menu items here */}
      </div>

      <div className="categoryHeading">Browse by category</div>
      <div className="categoriesContainer">
        <div className="categoryRow">
          {categoriesFirstRow.map((category) => (
            <div className="categoryItem" key={category.name}>
              <img src={category.imageSrc} alt={category.name} className="categoryImage" />
              <div>{category.name}</div>
            </div>
          ))}
        </div>
        <div className="categoryRow">
          {categoriesSecondRow.map((category) => (
            <div className="categoryItem" key={category.name}>
              <img src={category.imageSrc} alt={category.name} className="categoryImage" />
              <div>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
