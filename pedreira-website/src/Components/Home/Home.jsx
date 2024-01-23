import './Home.css'

const Home = ({ onNavClick }) => {
    return (
        <section id="home">
            <h2>Welcome to Coffin Shop</h2>
            <p>Your source for high-quality coffins.</p>
            <button onClick={() => onNavClick('Catalog')}>Shop Now</button>
        </section>
    )
};

export default Home;