import React from 'react';
import Header from './components/Header';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Contact from './components/Cont';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Languages />
      <Projects />
      <Contact />
      <Sidebar />
      <Footer />
    </div>
    
  );
};


export default App;

