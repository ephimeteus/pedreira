import SideBar from "./Sidebar";
import Home from "./Home";
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import Catalog from "./Catalog";

const CoffinShop = () => {
  return (
    <>
        <div className="container">
          <div className="main-content">
            <SideBar/>
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
