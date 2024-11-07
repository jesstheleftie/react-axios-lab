import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlanetPage = (props) => {
  const [singlePlanet, setSinglePlanet] = useState({});

  const { planetId } = useParams();
  useEffect(() => {
    setSinglePlanet(
      props.planets.find((planet) => Number(planet._id) === Number(planetId))
    );
  }, []);
  return (
    <>
      <h2>{singlePlanet.name}</h2>
      <dl>
        <dt>Rotation Period:</dt>
        <dd>{singlePlanet.rotation_period}</dd>
        <dt>Orbital Period:</dt>
        <dd>{singlePlanet.orbital_period}</dd>
        <dt>Diameter:</dt>
        <dd>{singlePlanet.diameter}</dd>
        <dt>Climate:</dt>
        <dd>{singlePlanet.climate}</dd>
        <dt>Gravity:</dt>
        <dd>{singlePlanet.gravity}</dd>
        <dt>Terrain:</dt>
        <dd>{singlePlanet.terrain}</dd>
        <dt>Surface Water:</dt>
        <dd>{singlePlanet.surface_water}</dd>
        <dt>Population:</dt>
        <dd>{singlePlanet.population}</dd>
      </dl>
    </>
  );
};

export default PlanetPage;
