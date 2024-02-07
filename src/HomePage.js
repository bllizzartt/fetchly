import React from 'react';
import { useNavigate } from 'react-router-dom';
import topLogo from './whole-foods.png';

function HomePage() {
  let navigate = useNavigate();

  const navigateToHomePage2 = () => {
    navigate('/home2');
  };

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
      
      {/* "Browse by category" text */}
      <div className="categoryHeading">Browse by category</div>
      
      <div className="itemsSection">
        {[...Array(8)].map((_, index) => (
          <div className="item" key={index}>
            <img src={topLogo} alt={`Item ${index + 1}`} className="itemImage" />
            <div className="itemText">Item {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
