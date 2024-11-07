import { Link } from "react-router-dom";

const CharactersList = (props) => {
  return (
    <div>
      {props.characters.map((character) => (
        <div key={character.url} className="card">
          <Link to={`/characters/${character._id}`}>{character.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
