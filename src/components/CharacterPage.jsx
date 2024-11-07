import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterPage = (props) => {
  const [singleCharacter, setSingleCharacter] = useState({});

  const { characterId } = useParams();
  useEffect(() => {
    setSingleCharacter(
      props.characters.find(
        (character) => Number(character._id) === Number(characterId)
      )
    );
  }, []);
  return (
    <>
      <h2>{singleCharacter.name}</h2>
      <dl>
        <dt>Height:</dt>
        <dd>{singleCharacter.height} cm</dd>
        <dt>Mass:</dt>
        <dd>{singleCharacter.mass} kg</dd>
        <dt>Hair Color:</dt>
        <dd>{singleCharacter.hair_color}</dd>
        <dt>Skin Color:</dt>
        <dd>{singleCharacter.skin_color}</dd>
        <dt>Eye Color:</dt>
        <dd>{singleCharacter.eye_color}</dd>
        <dt>Birth Year:</dt>
        <dd>{singleCharacter.birth_year}</dd>
        <dt>Gender:</dt>
        <dd>{singleCharacter.gender}</dd>
      </dl>
    </>
  );
};

export default CharacterPage;
