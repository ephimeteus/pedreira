import "./whoWeAre.css"
import whoAreWeImage from '../../assets/small-girl.jpg';

const WhoWeAre = () => {
    return (
        <section id="who-we-are">
            <aside>
                <h2>Who Are We</h2>
                <p>Learn about our company and our commitment to providing the best coffins for our customers.</p>
            </aside>
            <img src={whoAreWeImage} alt="Who Are We Image" />
        </section>
    )
};

export default WhoWeAre;