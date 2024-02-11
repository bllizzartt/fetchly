import React from 'react';
import { useNavigate } from 'react-router-dom';
import topLogo from './whole-foods.png';
import meatsImage from './meat.png';


function HomePage() {
  let navigate = useNavigate();

  // Updated categories with image sources
  const categoriesFirstRow = [
    { name: 'Meats', imageSrc: meatsImage },
    { name: 'Dairy', imageSrc: meatsImage },
    { name: 'Produce', imageSrc: meatsImage },
    { name: 'Beverages', imageSrc: meatsImage },
    // other categories...
  ];
  const categoriesSecondRow = [
    { name: 'Supplements', imageSrc: meatsImage },
    { name: 'Body Care', imageSrc: meatsImage },
    { name: 'Pet', imageSrc: meatsImage },
    { name: 'Household', imageSrc: meatsImage },
    // other categories...
  ];

  return (
    <div>
      <div className="squareBanner">
        <div className="topCenterLogo">
          <img src={topLogo} alt="Logo" />
        </div>
        <div className="bannerText">Welcome, Let's build your cart.</div>
        <div className="searchBarContainer">
          <input className="searchInput" placeholder="Search Wholefoods Inventory" />
        </div>
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
