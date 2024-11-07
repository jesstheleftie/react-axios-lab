// src/App.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../globals";
import StarshipList from "./StarshipList";
import Home from "./Home";
import StarshipPage from "./StarshipPage";
import FilmsList from "./FilmsList";
import CharactersList from "./CharactersList";
import PlanetsList from "./PlanetsList";
import PlanetPage from "./PlanetPage";
import FilmPage from "./FilmPage";
import CharacterPage from "./CharacterPage";

const Main = () => {
  const [starships, setStarships] = useState([]);
  const [selectedStarshipId, setSelectedStarshipId] = useState({});
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState({});
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState({});
  const [planets, setPlanets] = useState([]);
  const [selectedPlanetId, setSelectedPlanetId] = useState({});

  useEffect(() => {
    //Starship
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`);
      response.data.results.forEach((eachShip, idx) => {
        eachShip._id = idx;
      });
      setStarships(response.data.results);
    };
    getStarships();
    //Film
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`);
      response.data.results.forEach((eachShip, idx) => {
        eachShip._id = idx;
      });
      setFilms(response.data.results);
    };
    getFilms();
    //Characters
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people`);
      response.data.results.forEach((eachShip, idx) => {
        eachShip._id = idx;
      });
      setCharacters(response.data.results);
    };
    getCharacters();
    //Planet
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`);
      response.data.results.forEach((eachShip, idx) => {
        eachShip._id = idx;
      });
      setPlanets(response.data.results);
    };
    getPlanets();
  }, []);

  console.log(
    "starships:",
    starships,
    "film:",
    films,
    "characters:",
    characters,
    "planets:",
    planets
  );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* film */}
      <Route
        path="/films"
        element={
          <FilmsList films={films} setSelectedFilmId={setSelectedFilmId} />
        }
      />
      <Route
        path="/films/:filmId"
        element={<FilmPage films={films} selectedFilmId={selectedFilmId} />}
      />
      {/* characters */}
      <Route
        path="/characters"
        element={
          <CharactersList
            characters={characters}
            setSelectedCharacterId={setSelectedCharacterId}
          />
        }
      />
      <Route
        path="/characters/:characterId"
        element={
          <CharacterPage
            characters={characters}
            selectedCharacterId={selectedCharacterId}
          />
        }
      />
      {/* planets */}
      <Route
        path="/planets"
        element={
          <PlanetsList
            planets={planets}
            setSelectedPlanetId={setSelectedPlanetId}
          />
        }
      />
      <Route
        path="/planets/:planetId"
        element={
          <PlanetPage planets={planets} selectedPlanetId={selectedPlanetId} />
        }
      />
      <Route
        path="/starships"
        element={
          <StarshipList
            starships={starships}
            setSelectedStarshipId={setSelectedStarshipId}
          />
        }
      />
      <Route
        path="/starshipships/:starshipId"
        element={
          <StarshipPage
            starships={starships}
            selectedStarshipId={selectedStarshipId}
          />
        }
      />
    </Routes>
  );
};

export default Main;
