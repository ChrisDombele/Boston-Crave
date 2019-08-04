import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ({ handleChange, handleSubmit, post }) => {
  return (
    <nav>
      <Container>
        <form>
          <Row className="justify-content-md-center">
            <Col>
              <div id="searchBar" className="col-lg text-center">
                <input
                  className="col-12 form-control"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={post.term}
                  placeholder="Whats your crave?"
                />
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="col-lg text-center">
              <span>Distance:</span>
              <br />
              <input
                className="col-12 form-control"
                name="radius"
                onChange={handleChange}
                type="number"
                value={post.radius}
                placeholder="Distance"
              />
            </Col>
            <Col className="col-lg text-center">
              <span>Rating:</span>
              <br />
              <select
                className="form-control"
                onChange={handleChange}
                name="rating"
                value={post.rating}
              >
                <option value="1.0">✭</option>
                <option value="2.0">✭✭</option>
                <option value="3.0">✭✭✭</option>
                <option value="4.0">✭✭✭✭</option>
                <option value="5.0">✭✭✭✭✭</option>
              </select>
            </Col>
            <Col className="col-lg text-center">
              <span>Price:</span>
              <br />
              <select
                className="form-control"
                onChange={handleChange}
                name="price"
                value={post.price}
              >
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </Col>
          </Row>
        </form>
      </Container>
    </nav>
  );
};
