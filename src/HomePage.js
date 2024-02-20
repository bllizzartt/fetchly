import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from './MenuContext'; // Adjust the import path as necessary
import { MenuContext } from './MenuContext';
import SwipeableViews from 'react-swipeable-views';
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
import page from './images/logout.png'


function HomePage() {
  let navigate = useNavigate();
  const {isMenuOpen, setIsMenuOpen} = useMenu();



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
    { text: 'Current List', imgSrc: slide1, path: '/home2' },
    { text: 'Pickup Orders', imgSrc: slide1, path:'/home3' },
    { text: 'Call Attendant', imgSrc: slide1 },
  ];

  // Example meals data structure
  const meals = [
    { name: 'Chicken Fried Rice Bowl', imageSrc: slide1 },
    { name: 'Classic Steak and Fries', imageSrc: slide1 },
    { name: 'Katsu Ramen w/ Egg Miso Base', imageSrc: slide1 },
    { name: 'Burger', imageSrc: slide1 },
    { name: 'Lasagna', imageSrc: slide1 },
    { name: 'chicken burrito', imageSrc: slide1 },
    // Add more meals as needed
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
        <div className="bannerText">Welcome, Let's build your list.</div>
        <div className="searchBarContainer">
          <input className="searchInput" placeholder="Search Wholefoods Inventory" />
          <img src={vector} alt="Search Icon" className="searchIcon" />
        </div>
      </div>
      

       {/* Slide-out menu */}
      <div className={`slideOutMenu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setIsMenuOpen(false)}  className="menuBackButton">Back</button>
        <div className="menuTitle">Menu</div>
        {/* Add the rest of your menu items here */}
      </div>

       {/* Swipeable Start with Meals Section */}
       <section className="startWithMeals">
        <h2>Start with Meals</h2>
        <SwipeableViews enableMouseEvents>
          {meals.map((meal, index) => (
            <div key={index} className="mealItem">
              <img src={meal.imageSrc} alt={meal.name} className="mealImage" />
              <div>{meal.name}</div>
            </div>
          ))}
        </SwipeableViews>
      </section>

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
