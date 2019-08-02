import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://api.yelp.com/v3/businesses/search";

const config = {
  headers: {
    Authorization:
      "Bearer EElj7yTkL-mqWepweO0Pgb-DQa_Yh9hsbvKPAKFB7dyFcDfAM5yn-a-0TH5I0eqbD8CA8RpbaIenoJ-Jw3Q33OOxz4mz6uct9H-ukaO7HpQXYYkV1Qd0TzDI95E4XXYx"
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
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(proxyurl + URL, config)
      .then(response => {
        this.setState({ data: response.data.businesses });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }

  render() {
    return (
      <Container>
        {this.state.data.map(data => (
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}
export default App;
