import React from 'react';
import './Sidebar.css';
import TEC1 from "../assets/tec1.png";
import TEC2 from "../assets/tec2.png";
import TEC3 from "../assets/tec3.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>¿What do you think about the technology and IA?</h2>
      <img src={TEC1} alt="Tecnología 1" />
      <img src={TEC2} alt="Tecnología 2" />
      <img src={TEC3} alt="Tecnología 3" />
    </aside>
  );
};

export default Sidebar;
