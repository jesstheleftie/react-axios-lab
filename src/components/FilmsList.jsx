import { Link } from "react-router-dom";

const FilmsList = (props) => {
  return (
    <div>
      {props.films.map((film) => (
        <div key={film.url} className="card">
          <Link to={`/films/${film._id}`}>{film.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default FilmsList;
