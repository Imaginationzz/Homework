import items from "../data/books.json";
import React, { Component } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

class MyCard extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <Carousel>
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyCard;
