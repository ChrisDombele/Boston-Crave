import React from "react";
import '../css/home.css';

// Photos used
import Logo from '../images/LogoOpt.png';

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="Home">
            <section id="home" background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6.5 col-sm-12">
                            <img src={Logo} className="img-responsive" alt="Crave Logo" height="390" width="600"/>
                            <div className="home-info">
                                <form action="searchResults.html" method="get" className="online-form" >
                                    <input type="text" name="text"className="form-control" placeholder="What's Your Crave?" required />
                                    <Link to="/searchResults">
                                        <button type="submit" className="form-control">Search</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomePage;