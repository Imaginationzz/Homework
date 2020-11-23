import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPersons: 1,
      amoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };
  render() {
    return ()
  }
}
