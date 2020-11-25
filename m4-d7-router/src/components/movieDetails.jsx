import React from "react";

import { Badge, Card, Col, Container, Row } from "react-bootstrap";

class movieDetails extends React.Component {
  state = {
    movie: null,
    fetching: true,
  };

  fetchMovies = async () => {
    const movieID = this.props.match.params.id;
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=ad2a416a&s=" + movieID
      );

      const result = await response.json();

      this.setState({ movie: result, fetching: false });

      console.log(result, "ddddd");
    } catch (e) {
      console.log(e);
      this.setState({ fetching: false });
    }
  };

  componentDidMount() {
    //console.log(this.props.match.params, "ggggggggg");
    this.fetchMovies();
  }

  render() {
    return (
      <Container>
        {this.state.movie && (
          <div>
            <Row className="my-2">
              <Col md={3}>
                <img
                  src={this.state.movie.Poster}
                  alt="movie"
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.movie.Title}</Card.Title>
                    <Card.Subtitle>
                      <Badge variant="danger">{this.state.movie.Title}</Badge>
                    </Card.Subtitle>
                    <Card.Text>{this.state.movie.imdbID}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        )}
        {!this.state.movie && <h1>LOADING</h1>}
      </Container>
    );
  }
}

export default movieDetails;
