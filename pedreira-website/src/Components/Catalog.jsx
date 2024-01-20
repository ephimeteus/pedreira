import Card from "./Card";
import "./catalog.css"

const inventory = [
    { name: "Coffin 1", description: "This is the cheapest option available.", price: "100" }, 
    { name: "Coffin 2", description: "The Honda Civic of Coffins.", price: "200" },
    { name: "Coffin 3", description: "This is not a coffin, this is a statement.", price: "300" }
];

const Catalog = () => {
    return (
        <>
            <section id="catalog">
                <h2>Catalog</h2>
                <p>Explore our catalog to find the perfect coffin for your needs.</p>
            </section>
            <div className="catalog-container">
                {inventory.map((item, index) => (
                    <div key={index}>
                        <Card name={item.name} description={item.description} price={item.price} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Catalog;
