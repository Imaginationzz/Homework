import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/Main";
import AccountPage from "./components/Account";
import PaymentPage from "./components/Payment";
import movieDetails from "./components/movieDetails";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/payment" component={PaymentPage} exact />
        <Route path="/details/:Title" component={movieDetails} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
