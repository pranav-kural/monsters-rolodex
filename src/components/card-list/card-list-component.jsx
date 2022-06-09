import Card from "../card/card-component";
import "./card-list-styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters &&
      monsters.map((monster) => <Card monster={monster} key={monster.id} />)}
  </div>
);
export default CardList;
