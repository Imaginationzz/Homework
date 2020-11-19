import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Fantasy from "./data/fantasy.json";
import History from "./data/history.json";
import Horror from "./data/horror.json";
import Romance from "./data/romance.json";
import Scifi from "./data/scifi.json";

import WarningSign from "./components/WarningSign";
import MyBarge from "./components/MyBarge";
import BookList from "./components/BookList";

let books = {
  Fantasy,
  History,
  Horror,
  Romance,
  Scifi,
};

let booksCategories = ["Fantasy", "History", "Horror", "Romance", "Scifi"];

function App() {
  console.log(books);
  return (
    <div className="App">
      <WarningSign text="This is a warning" />
      <MyBarge text="New" color="primary" />
      <BookList books={books} booksCategories={booksCategories} />
    </div>
  );
}

export default App;
