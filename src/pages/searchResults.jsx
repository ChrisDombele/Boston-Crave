import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SearchResultsNav from "../SearchResultsNav.js";

const ResultsPage = () => {
    return (
        <div className="Results">
            <SearchResultsNav />
            <Container>
                <Row className="justify-content-md-center">
                    {this.renderMatches()}
                </Row>
            </Container>
        </div>
    );
};

export default ResultsPage;