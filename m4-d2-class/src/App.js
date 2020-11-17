import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import MyJumbotron from "./components/Welcome";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";

import MyFooter from "./components/MyFooter";
import MyCard from "./components/Latest Release";

const App = () => {
  return (
    <>
      <Container>
        <NavBar title="Book Store" />

        <MyJumbotron />
        <MyCard />
        <MyFooter />
      </Container>
    </>
  );
};

export default App;
