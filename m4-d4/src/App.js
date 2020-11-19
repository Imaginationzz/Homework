import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
