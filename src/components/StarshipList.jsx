import { Link } from "react-router-dom";

const StarshipList = (props) => {
  return (
    <div>
      {props.starships.map((starship) => (
        <div key={starship.url} className="card">
          <Link to={`/starshipships/${starship._id}`}>{starship.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
