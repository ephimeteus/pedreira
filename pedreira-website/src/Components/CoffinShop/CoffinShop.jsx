import SideBar from '../SideBar/SideBar'
import Home from "../Home/Home"
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Catalog from "../Catalog/Catalog";
import './coffinShop.css'
import { useState } from 'react';

const CoffinShop = () => {
  
  const [ activePage, setActivePage] = useState('Home') ;
  
  const handleNavClick = (pageName) => setActivePage(pageName);
  
  const renderPage = () => {
    return (
    activePage === 'Home' 
    ? <Home onNavClick= {handleNavClick}/>
    : activePage ==='AboutUs'
    ? <AboutUs/>
    : activePage === 'Catalog'
    ? <Catalog/>
    : activePage === 'Contact'
    ? <Contact/>
    : null
  )};

  return (
    <>
        <div className="container">
          <SideBar onNavClick= {handleNavClick}/>
          <div className="main-content">
           { renderPage() }
          </div>
        </div>
    </>
  );
};

export default CoffinShop;
