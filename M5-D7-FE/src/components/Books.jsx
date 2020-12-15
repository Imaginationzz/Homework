import React from "react";
import { Container, Card, Spinner, Row, Col } from "react-bootstrap";

class Books extends React.Component {
  state = {
    books: [],
    loading: true,
  };

  componentDidMount = async () => {
    console.log("Books has finished mounting");
    // this.props.movieTitle is the movie upon loading
    this.fetchBooks();
  };

  fetchBooks = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch("http://localhost:3002/books");

      if (response.ok) {
        let results = await response.json();
        console.log(results);

        this.setState({ books: results, loading: false });
      } else {
        console.log("an error happened!");
        this.setState({ loading: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <div className="mb-5 mt-3">
          <h2>Books</h2>
          {this.state.loading && (
            <div className="font-bold d-flex justify-content-center">
              <span>Feching Books</span>
              <Spinner animation="border" variant="success" />
            </div>
          )}
        </div>
        <div className="font-bold d-flex flex justify-content-center">
          {this.state.books.map((book, index) => (
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body style={{ backgroundColor: "#F0F8FF" }}>
                  <Card.Title>{book.title}</Card.Title>

                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
    );
  }
}

export default Books;
