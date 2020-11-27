import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/Navbar";
import Home from "./component/Home";
import Detail from "./component/Detail";
//import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { React } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />

        <Route path="/Detail" exact component={Detail} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
