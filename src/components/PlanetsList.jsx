import { Link } from "react-router-dom";

const PlanetsList = (props) => {
  return (
    <div>
      {props.planets.map((planet) => (
        <div key={planet.url} className="card">
          <Link to={`/planets/${planet._id}`}>{planet.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PlanetsList;
