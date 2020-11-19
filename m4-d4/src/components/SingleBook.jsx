// // // Create a SingleBook component as a function.The component receives a book object as a prop, and displays the cover and the title of the book.Use react - bootstrap Cards to display a book(The book object can be read from the one of the.json book files we gave you yesterday)
import React from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    commentA: false,
  };
  render() {
    return (
      <Card style={{ width: "13rem" }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>$ {this.props.book.price}</Card.Text>
          <Button variant="outline-danger">Buy Now</Button>
          <Button
            variant="outline-info"
            onClick={() => {
              this.setState({ commentA: true });
            }}
          >
            Comment
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
