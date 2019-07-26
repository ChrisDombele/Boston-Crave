import React, { Component } from "react";
import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const URL = "api.yelp.com/v3/businesses/search";

const config = {
  headers: {
    Authorization:
      "EElj7yTkL-mqWepweO0Pgb-DQa_Yh9hsbvKPAKFB7dyFcDfAM5yn-a-0TH5I0eqbD8CA8RpbaIenoJ-Jw3Q33OOxz4mz6uct9H-ukaO7HpQXYYkV1Qd0TzDI95E4XXYx"
  },
  params: {
    term: "tacos",
    location: "Boston"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleClick() {
    axios
      .get(proxyurl + URL, config)
      .then(response => {
        // If request is good...
        console.log(response.data);
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}
export default App;
