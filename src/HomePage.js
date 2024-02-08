import React from 'react';
import { useNavigate } from 'react-router-dom';
import topLogo from './whole-foods.png';
import meatsImage from './meat.png';


function HomePage() {
  let navigate = useNavigate();

  // Updated categories with image sources
  const categoriesFirstRow = [
    { name: 'Essentials', imageSrc: meatsImage },
    // other categories...
  ];
  const categoriesSecondRow = [
    { name: 'Category 5', imageSrc: 'path/to/category5-image.png' },
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
            </div>
          ))}
        </div>
        <div className="categoryRow">
          {categoriesSecondRow.map((category) => (
            <div className="categoryItem" key={category.name}>
              <img src={category.imageSrc} alt={category.name} className="categoryImage" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
