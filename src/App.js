import { Component } from "react";
import "./App.css";
import { fetch_data } from "./helpers";
import { JSON_PLACEHOLDER_API_URL } from "./config";

import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();
    // instantiate state
    this.state = {
      monsters: [],
      currentSearchQuery: "",
    };
  }

  getMonsters() {
    fetch_data(JSON_PLACEHOLDER_API_URL)
      .then((apiResponse) =>
        this.setState({
          monsters: apiResponse,
          monstersBeingDisplay: apiResponse,
        })
      )
      .catch((err) => console.error(err));
  }

  getMonstersToDisplay() {
    return this.state.monsters.filter((monster) =>
      monster.name
        ?.toLowerCase()
        .includes(this.state.currentSearchQuery?.toLowerCase())
    );
  }

  componentDidMount() {
    this.getMonsters();
  }

  searchEventHandler = (event) => {
    this.setState({
      currentSearchQuery: event.target.value,
    });
  };

  render() {
    const monstersToDisplay = this.state?.monsters
      ? this.getMonstersToDisplay()
      : [];

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
        className='search-box'
        placeholder='search monsters'
        searchEventHandler={this.searchEventHandler} />
        <CardList monsters={monstersToDisplay} />
      </div>
    );
  }
}

export default App;
