import React from "react";
import "../css/home.css";

// Photos used
import Logo from "../images/LogoOpt.png";

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
    this.state = {
        data: [],
        post: {
          name: "",
          radius: "",
          rating: "",
          price: "1",
          limit: "15"
        },
        jobs: []
      };
    this.routeChange = this.routeChange.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  routeChange() {
    let path = "/searchResults";
    this.props.history.push(path);
  }

  render() {
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
                  <form
                    action="searchResults.html"
                    method="get"
                    className="online-form"
                  >
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="What's Your Crave?"
                      required
                    />
                    <button
                      type="submit"
                      className="form-control"
                      onClick={this.routeChange}
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
  }
}

export default HomePage;
