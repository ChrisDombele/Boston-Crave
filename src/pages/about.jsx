import React from "react";
import '../css/about.css';

import defaultDev from '../images/dev_default.png';

const AboutPage = () => {
    return (
    <div className="aboutPage">
        <header>
        <h1>About Us</h1>
        </header>

        <div id="view">
            <div id="view-image"></div>
            <h2 id="crave-title">Keeping you satisfied</h2>
        </div>

        <main>
            <br/>
            <div id="crave">
                <p id="crave-desc">At Boston Crave our goal is to satisfy your appetite, wherever and whenever.
                Our team of developers are located in Boston, and we understand how difficult
                it can be to decide where you want to eat or drink. In this great city, the options
                are so diverse, and we want to help you find the right restaurant and bar that will
                satisfy you. With our service you’ll be able to find the closest bars and restaurants
                in Boston that satisfy your craving. Let us know what you’re in the mood for, and
                we’ll do the work to find you exactly what you want and nothing less.</p>
                <br/>
                <hr/>
            </div>

            <br/>

            <div id="dev-desc">
                <h2 id="dev-title">Developers</h2>

                <div id="developer">
                    <div className="dev-card">
                        <img src={defaultDev}/>
                        <h3>Chris Dombele</h3>
                    </div>

                    <div className="dev-card">
                        <img src={defaultDev}/>
                        <h3>Charlie Plukfangpanya</h3>
                    </div>

                    <div className="dev-card">
                        <img src={defaultDev}/>
                        <h3>Deni Pasholli</h3>
                    </div>
                </div>
                <br/>
            </div>
        </main>

        <footer>
            <a href="/"><button class="circleButton">Home</button></a>
        </footer>
    </div>
    );
};

export default AboutPage;