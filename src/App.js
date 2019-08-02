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
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.display_phone}
              </Card.Subtitle>
              <Card.Text>Review Count: {data.review_count}</Card.Text>
              <Card.Link target="_blank" href={data.url}>
                URL
              </Card.Link>
              <Card.Link target="_blank" href="#">
                Another Link
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return (
      <Container>
        <Row>{this.renderMatches()}</Row>
      </Container>
    );
  }
}
export default App;
