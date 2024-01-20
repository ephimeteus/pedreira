import SideBar from '../SideBar/SideBar'
import Home from "../Home/Home"
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Contact from "../Contact/Contact";
import Catalog from "../Catalog/Catalog";
import './coffinShop.css'

const CoffinShop = () => {
  return (
    <>
        <div className="container">
          <SideBar/>
          <div className="main-content">
            <Home />
            <WhoWeAre />
            <Catalog />
            <Contact />
          </div>
        </div>
    </>
  );
};

export default CoffinShop;
