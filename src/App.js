import { Component } from "react";
import "./App.css";
import { fetch_data } from "./helpers";
import { JSON_PLACEHOLDER_API_URL } from "./config";

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

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) =>
            this.setState({
              currentSearchQuery: event.target.value,
            })
          }
        />
        {this.state?.monsters &&
          this.getMonstersToDisplay().map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default App;
