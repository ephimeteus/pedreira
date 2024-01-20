import SideBar from "./Sidebar";
import Home from "./Home";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import Catalog from "./Catalog";
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
