import React from "react";
import '../css/home.css';

// Photos used
import Logo from '../images/LogoOpt.png';

// Import Router for React
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render ()
    {
        return (
            <div className="Home">
                <section id="home" background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6.5 col-sm-12">
                                <img src={Logo} className="img-responsive" alt="Crave Logo" height="390" width="600"/>
                                <div className="home-info">
                                    <form action="searchResults.html" method="get" className="online-form" onSubmit={this.handleSubmit}>
                                        <input value={this.state.value} onChange={this.handleChange} type="text" name="text"className="form-control" placeholder="What's Your Crave?" required />
                                        <button type="submit" className="form-control">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </section>
            </div>
        );
    }
};

export default HomePage;