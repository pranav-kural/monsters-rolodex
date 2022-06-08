import { Component } from "react";
import "./card-styles.css";

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
