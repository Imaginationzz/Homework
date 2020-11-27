import Album from "./Album";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    loading: true,
    Albums: ["eminem", "2pac", "drdre", "jayz", "queen", "Drake"],
    Albums1: [
      "michael jackson",
      "jennifer lopez",
      "nas",
      "jayz",
      "scarface",
      "snoop dogg",
    ],
  };

  //   componentDidUpdate = (props, state) => {
  //     if (state.Albums !== this.state.Albums) {
  //       this.fetcher();
  //     }
  //   };

  render() {
    return (
      <Container>
        <div>
          <Row>
            <Col className="mb-2 felx-column  d-flex flex-row">
              {this.state.Albums.map((album) => (
                <Album query={album} />
              ))}
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 felx-column  d-flex flex-row">
              {this.state.Albums1.map((album) => (
                <Album query={album} />
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default withRouter(Home);
