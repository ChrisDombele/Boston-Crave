import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchResultsNav(props) {
  return (
    <nav>
      <Container>
        <form>
          <Row className="justify-content-md-center">
            <Col>
              <div id="searchBar" className="col-lg text-center">
                <input
                  type="text"
                  classnName={props.value}
                  placeholder="Search your craving"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="col-lg text-center">
              <span>Distance:</span>
              <br />
              <input type="text" name="distance" placeholder="15mi" />
            </Col>
            <Col className="col-lg text-center">
              <span>Rating:</span>
              <br />
              <select className="drop">
                <option value="1">✭</option>
                <option value="2">✭✭</option>
                <option value="3">✭✭✭</option>
                <option value="4">✭✭✭✭</option>
                <option value="5">✭✭✭✭✭</option>
              </select>
            </Col>
            <Col className="col-lg text-center">
              <span>Price:</span>
              <br />
              <select className="drop">
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </Col>
          </Row>
          <button />
        </form>
      </Container>
    </nav>
  );
}
