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
    };
  }

  getMonsters() {
    fetch_data(JSON_PLACEHOLDER_API_URL)
      .then((apiResponse) =>
        this.setState(() => {
          return { monsters: apiResponse };
        })
      )
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getMonsters();
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
