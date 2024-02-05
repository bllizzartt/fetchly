// HomePage2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage2() {
  let navigate = useNavigate();

  const navigateToHomePage3 = () => {
    navigate('/home3');
  }

  return (
    <div>
      <h1>Welcome to HomePage2!</h1>
      <p>This is the second home page.</p>
      <button onClick={navigateToHomePage3}>Go to HomePage3</button>
    </div>
  );
}

export default HomePage2;
