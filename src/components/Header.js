import React from 'react';
import './Header.css'; // Creamos un archivo de CSS para estilizar el header
import profilePic from "../assets/profile.jpg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={profilePic} alt="Enrique Cueva" className="profile-img" />
        <h1>Enrique Cueva</h1>
      </div>
    </header>
  );
};

export default Header;