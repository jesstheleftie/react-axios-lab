import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmPage = (props) => {
  const [singleFilm, setSingleFilm] = useState({});

  const { filmId } = useParams();
  useEffect(() => {
    setSingleFilm(
      props.films.find((film) => Number(film._id) === Number(filmId))
    );
  }, []);
  return (
    <>
      <h2>{singleFilm.title}</h2>
      <dl>
        <dt>Episode:</dt>
        <dd>{singleFilm.episode_id}</dd>
        <dt>Opening Crawl:</dt>
        <dd>{singleFilm.opening_crawl}</dd>
        <dt>Director:</dt>
        <dd>{singleFilm.director}</dd>
        <dt>Producer:</dt>
        <dd>{singleFilm.producer}</dd>
        <dt>Release Date:</dt>
        <dd>{singleFilm.release_date}</dd>
      </dl>
    </>
  );
};

export default FilmPage;
