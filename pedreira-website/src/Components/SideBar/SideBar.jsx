import './SideBar.css';

const SideBar = ({ onNavClick }) => {
    return(
        <nav className="sidebar">
            <h1>Coffin Shop</h1>
            <ul>
                <li onClick={() => onNavClick('Home')}>Home</li>
                <li onClick={() => onNavClick('AboutUs')}>About Us</li>
                <li onClick={() => onNavClick('Catalog')}>Catalog</li>
                <li onClick={() => onNavClick('Contact')}>Contact</li>
            </ul>
        </nav>
    )
}

export default SideBar;