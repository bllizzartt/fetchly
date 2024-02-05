// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  let navigate = useNavigate();

  const navigateToHomePage2 = () => {
    navigate('/home2');
  }

  return (
    <div>
      <h1>Welcome to My React Home Page!</h1>
      <p>This is a simple home page built with React.</p>
      <button onClick={navigateToHomePage2}>Go to HomePage2</button>
    </div>
  );
}

export default HomePage;

