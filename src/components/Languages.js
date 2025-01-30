import React from 'react';
import './Languages.css';
import JS from "../assets/js.jpg";
import CS from "../assets/css.jpeg";
import HTM from "../assets/html.png";
import FLU from "../assets/flutter.png";
import REA from "../assets/react-js.png";

const Languages = () => {
  return (
    <section className="languages">
      <h2>Programming languages</h2>
      <div className="icons">
        <img src={JS} alt="JavaScript" />
        <img src={CS} alt="CSS" />
        <img src={HTM} alt="HTML" />
        <img src={FLU} alt="Flutter" />
        <img src={REA} alt="React" />
      </div>
    </section>
  );
};

export default Languages;
