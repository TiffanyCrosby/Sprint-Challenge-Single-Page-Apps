import React, { useEffect, useState } from "react";
import Axios from "axios";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

import { Container, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState("");

  const handleChange = event => {
    setNameQuery(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data);
        const character = res.data.results.filter(char =>
          char.name.toLowerCase().includes(nameQuery.toLowerCase())
        );
        setCharacters(character);
        console.log(character);
      })
      .catch(error => console.log('Data Not Returned: Error ', error));
  }, [nameQuery]);

  return (
    <Container>
      <SearchForm value={nameQuery} handleChange={handleChange} />
      <Row>
        {characters.map(char => {
          return (
            <CharacterCard
              name={char.name}
              species={char.species}
              image={char.image}
              episode={char.episode}
            />
          );
        })}
      </Row>
    </Container>
  );
}