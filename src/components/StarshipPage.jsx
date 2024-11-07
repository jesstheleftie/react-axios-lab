import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StarshipPage = (props) => {
  const [singleStarship, setSingleStarship] = useState({});

  const { starshipId } = useParams();
  useEffect(() => {
    setSingleStarship(
      props.starships.find(
        (starship) => Number(starship._id) === Number(starshipId)
      )
    );
  }, []);
  return (
    <>
      <h2>{singleStarship.name}</h2>
      <dl>
        <dt>Model:</dt>
        <dd>{singleStarship.model}</dd>
        <dt>Manufacturer:</dt>
        <dd>{singleStarship.manufacturer}</dd>
        <dt>Cost in Credits:</dt>
        <dd>{singleStarship.cost_in_credits}</dd>
        <dt>Length:</dt>
        <dd>{singleStarship.length}</dd>
        <dt>Crew:</dt>
        <dd>{singleStarship.crew}</dd>
        <dt>Passengers:</dt>
        <dd>{singleStarship.passengers}</dd>
        <dt>Max Atmosphering Speed:</dt>
        <dd>{singleStarship.max_atmosphering_speed}</dd>
        <dt>Hyperdrive Rating:</dt>
        <dd>{singleStarship.hyperdrive_rating}</dd>
        <dt>MGLT:</dt>
        <dd>{singleStarship.MGLT}</dd>
        <dt>Cargo Capacity:</dt>
        <dd>{singleStarship.cargo_capacity}</dd>
        <dt>Consumables:</dt>
        <dd>{singleStarship.consumables}</dd>
      </dl>
    </>
  );
};

export default StarshipPage;
