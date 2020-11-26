import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import Registration from "./Registration";

const RegistrationData = (props) => {
  const params = new URLSearchParams(props.location.search);
  const name = params.get("name");
  const email = params.get("email");
  const birth = params.get("birth");
  return (
    <div className="mb-5">
      <h2>Registration Data</h2>
      {this.state.loading && (
        <div className="font-bold d-flex justify-content-center">
          <span>Getting Data</span>
          <Spinner animation="border" variant="success" />
        </div>
      )}

      <ListGroup>
        <ListGroup.Item>
          Name: {name}, Email {email}
          Born: {birth}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RegistrationData;
