import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const MyJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>The BookStore </h1>
          <p>Welcome to our Humble BookStore</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;
