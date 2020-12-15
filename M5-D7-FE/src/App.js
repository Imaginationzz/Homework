import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Books from "./components/Books";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Route path="/" component={Books} exact />
        </Router>
      </>
    );
  }
}

export default App;
