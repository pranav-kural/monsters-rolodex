import { Component } from "react";
import Card from "../card/card-component";
import "./card-list-styles.css";

export default class CardList extends Component {
  render() {
    const { monsters: monstersToDisplay } = this.props;
    return (
      <div className="card-list">
        {monstersToDisplay &&
          monstersToDisplay.map((monster) => (
            <Card monster={monster} key={monster.id} />
          ))}
      </div>
    );
  }
}
