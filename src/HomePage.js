import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import the image; make sure the path matches where you've saved the image
import topLogo from './logo.png';

function HomePage() {
  let navigate = useNavigate();

  const navigateToHomePage2 = () => {
    navigate('/home2');
  };

  return (
    <div>
      {/* Square banner with image and text */}
      <div className="squareBanner">
        {/* Top center image inside the square banner */}
        <div className="topCenterLogo">
          <img src={topLogo} alt="Whole Foods Market" />
        </div>
        {/* Banner text */}
        <div className="bannerText">Welcome, Let's build a list.</div>
        {/* Search bar input */}
        <div className="searchBarContainer">
          <input className="searchInput" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
