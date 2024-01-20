import './SideBar.css';

const SideBar = () => {
    return(
        <nav className="sidebar">
            <h1>Coffin Shop</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#who-we-are">Who we are</a></li>
                <li><a href="#catalog">Catalog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideBar;