import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import topLogo from './images/white-whole-foods.png';
import pantry from './images/pantry.png';
import meats from './images/meats.png';
import produce from './images/produce.png';
import beverages from './images/beverages.png';
import supplements from './images/supplements.png';
import body from './images/body.png';
import pet from './images/pet.png';
import household from './images/household.png';
import vector from './images/vector.png';
import trvector from './images/trvector.png';
import slide1 from './images/slide1.png'
import logout from './images/logout.png'
import group from './images/Group.png'
import arrow from './images/arrowback.png'



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

  const menuItems = [
    { text: 'Current List', imgSrc: slide1 },
    { text: 'Pickup Orders', imgSrc: group },
    { text: 'Call Attendant', imgSrc: slide1 },
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
        <button onClick={() => setIsMenuOpen(false)} className="menuBackButton">
          {/* Add an image holder for the arrow icon to the left of the "Back" text */}
        <img src={arrow} alt="Back" className="backArrowIcon" />
        <span className="backButtonText">Back</span> {/* Encapsulate "Back" text for better styling and control */}
        </button>
        {/* Add the rest of your menu items here */}

        {/* Menu item with image and text */}
        {/* Dynamically create a menu item for each item in the array */}
        {menuItems.map((item, index) => (
          <div className="menuItem" key={index}>
            <button className="menuItem" key={index} onClick={() => {/* handle menu item click */}}>
            <img src={item.imgSrc} alt={item.name} className="menuItemImage" />
            <div className="menuItemText">{item.text}</div>
            </button>
          </div>
        ))}
        <button className="loginButton" onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the menuItemButton's onClick
          // Handle login click
        }}>
          <div className="loginSection">
            <img src={logout} alt="Log in" className="loginIcon" />
            <div className="menuItemLoginText">Log in</div>
          </div>
        </button>
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
