import { useState, useEffect } from "react";
import "./App.css";
import { fetch_data } from "./helpers";
import { JSON_PLACEHOLDER_API_URL } from "./config";

import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    getMonsters();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name?.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  const searchEventHandler = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  const getMonsters = () => {
    fetch_data(JSON_PLACEHOLDER_API_URL)
      .then((apiResponse) => setMonsters(apiResponse))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        searchEventHandler={searchEventHandler}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
