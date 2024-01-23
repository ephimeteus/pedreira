import "./AboutUs.css"
import aboutUsImg from '../../assets/small-girl.jpg';

const AboutUs = () => {
    return (
        <section id="about-us">
            <aside>
                <h2>About us</h2>
                <p>Learn about our company and our commitment to providing the best coffins for our customers.</p>
            </aside>
            <img src={aboutUsImg} alt="About Us img" />
        </section>
    )
};

export default AboutUs;