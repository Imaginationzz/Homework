import React, { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Spinner,
  Container,
} from "react-bootstrap";

const labelStyle = {
  color: "white",
  backgroundColor: "#8B0000",
  fontSize: 20,
  fontFamily: "Arial",
  borderRadius: 5,
};

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      birth: "",
      address: "",
      city: "",
      postalCode: "",
      creditCard: "",
    },
    errMessage: "",
    loading: false,
  };

  updateRegistrationField = (e) => {
    let registration = { ...this.state.registration };
    let currentId = e.currentTarget.id;

    registration[currentId] = e.currentTarget.value;

    this.setState({ registration: registration });
  };
  submitRegistration = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    alert("You are submitting " + this.state.registration.name);

    this.props.history.push(
      "/RegistrationData?" + this.state.registration.name
    );
  };

  render() {
    return (
      <Container>
        <div>
          {this.state.errMessage && (
            <Alert variant="danger">
              We encountered a problem with your request
              {this.state.errMessage}
            </Alert>
          )}
          {this.state.loading && (
            <div className="d-flex justify-content-center my-5">
              Preparing the Form, please wait
              <div className="ml-2">
                <Spinner animation="border" variant="success" />
              </div>
            </div>
          )}
          <Form className="w-100 mb-5" onSubmit={this.submitRegistration}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="name" style={labelStyle}>
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    value={this.state.registration.name}
                    onChange={this.updateregistrationField}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="surname" style={labelStyle}>
                    Surname
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Your surname"
                    required
                    value={this.state.registration.surname}
                    onChange={this.updateRegistrationField}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="email" style={labelStyle}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={this.state.registration.email}
                    onChange={this.updateRegistrationField}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} className="flex flex-column align-self-end">
                <Form.Group>
                  <Form.Label htmlFor="password" style={labelStyle}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    value={this.state.registration.password}
                    onChange={this.updateRegistrationField}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="birth" style={labelStyle}>
                    Birth Date
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="birth"
                    id="birth"
                    placeholder="Birth Date"
                    value={this.state.registration.birth}
                    onChange={this.updateRegistrationField}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="adress" style={labelStyle}>
                    Adress
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="adress"
                    id="adress"
                    placeholder="Adress"
                    value={this.state.registration.adress}
                    onChange={this.updateRegistrationField}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label htmlFor="city" style={labelStyle}>
                    City
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    value={this.state.registration.city}
                    onChange={this.updateRegistrationField}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label htmlFor="postalCode" style={labelStyle}>
                    Postal Code
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="postalCode"
                    id="postalCode"
                    placeholder="postalCode"
                    value={this.state.registration.postalCode}
                    onChange={this.updateRegistrationField}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label htmlFor="creditCard" style={labelStyle}>
                    Credit Card
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="creditCard"
                    id="creditCard"
                    placeholder="creditCard"
                    value={this.state.registration.creditCard}
                    onChange={this.updateRegistrationField}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Registration;
