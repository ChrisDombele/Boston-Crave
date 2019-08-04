import React from "react";
import "../css/home.css";

// Photos used
import Logo from "../images/LogoOpt.png";

// Import Router for React
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default ({ handleChange, routeChange, handleSubmit, post }) => {
  return (
    <div className="Home">
      <section id="home" background-ratio="0.5">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6.5 col-sm-12">
              <img
                src={Logo}
                className="img-responsive"
                alt="Crave Logo"
                height="390"
                width="600"
              />
              <div className="home-info">
                <form onSubmit={handleSubmit}
                  action="searchResults.html"
                  method="get"
                  className="online-form"
                >
                  <input
                    className="col-12 form-control"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    value={post.term}
                    placeholder="Whats your crave?"
                  />
                    <button
                      type="submit"
                      className="form-control"
                      onClick={routeChange}
                    >
                      Search
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
