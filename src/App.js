import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SearchResultsNav from "./SearchResultsNav.js";
import Button from "react-bootstrap/Button";
import Modal from "./Modal.js";
import Apps from "./App.css";

// Import Router for React
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Import Pages
import AboutPage from "./pages/about";
import ResultsPage from "./pages/searchResults";
import HomePage from "./pages/home";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://api.yelp.com/v3/businesses/search";

class App extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  routeChange() {
    <Redirect to="/searchResults" />;
  }

  componentDidMount() {
    axios
      .get(proxyurl + URL, {
        headers: {
          Authorization:
            "Bearer EElj7yTkL-mqWepweO0Pgb-DQa_Yh9hsbvKPAKFB7dyFcDfAM5yn-a-0TH5I0eqbD8CA8RpbaIenoJ-Jw3Q33OOxz4mz6uct9H-ukaO7HpQXYYkV1Qd0TzDI95E4XXYx"
        },
        params: {
          term: this.state.post.name,
          location: "Boston",
          radius: this.state.post.radius,
          rating: this.state.post.rating,
          price: this.state.post.price,
          limit: "15"
        }
      })
      .then(response => {
        this.setState({
          data: response.data.businesses,
          key: response.data.businesses.id
        });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }

  renderMatches() {
    return this.state.data.map(data => {
      return (
        <Col md="auto">
          <Card
            className="text-center"
            style={{ width: "18rem", height: "20rem" }}
          >
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Img
                style={{ width: "10rem", height: "10rem" }}
                variant="top"
                src={data.image_url}
              />
              <Card.Text>{data.display_phone}</Card.Text>
              <Card.Text className="bottomCard">
                Review Count: {data.review_count}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  openSlideMenu() {
    return <div />;
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            exact
            strict
            render={() => {
              return (
                <HomePage
                  handleChange={this.handleChange}
                  post={this.state.post}
                  handleSubmit={this.handleSubmit}
                  routeChange={this.routeChange}
                />
              );
            }}
          />
          <Route
            exact
            path="/searchResults"
            exact
            strict
            render={() => {
              return (
                <div>
                  <SearchResultsNav
                    handleChange={this.handleChange}
                    post={this.state.post}
                    handleSubmit={this.handleSubmit}
                  />
                  <Container>
                    <Row className="justify-content-md-center">
                      {this.renderMatches()}
                    </Row>
                  </Container>
                  <footer>
                    <div className="leftdiv">
                      <a href="/" className="gh">
                        Home
                      </a>
                      <a href="/about" className="gh">
                        About
                      </a>
                      <a href="#" className="gh">
                        Favorites
                      </a>
                    </div>

                    <div className="rightdiv">
                      <a href="http://google.com" className="gh">
                        Prev
                      </a>
                      <a href="http://google.com" className="gh">
                        Next
                      </a>
                    </div>
                  </footer>
                </div>
              );
            }}
          />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
