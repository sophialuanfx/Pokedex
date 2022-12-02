// import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
const url = "https://pokeapi.co/api/v2/pokemon";

const colorMapping = {
  grass: "rgb(222, 253, 224)",
  water: "rgb(222, 243, 253)",
  fire: "rgb(253, 223, 223)",
  bug: "rgb(248, 213, 163)",
  poison: "rgb(152, 215, 165)",
};

// const [backColor, setBackColor] = useState("rgb(222, 253, 224)");
const getType = (indexNum) => {
  const typeName = Object.keys(colorMapping)[(indexNum + 1) % 5];
  return typeName;
};

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  //   const [type, setType] = useState("grass");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((pokemon) => {
        const { results } = pokemon;
        setPokemons(results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleType = () => {};

  return (
    <React.Fragment>
      <div className="container">
        {pokemons.map((obj, index) => {
          const { name } = obj;
          return (
            <>
              <ul
                className="card"
                style={{ background: colorMapping[getType(index)] }}
              >
                <div className="image" />
                <div className="infor"></div>
                <p className="id"> #0{index + 1}</p>
                <h3 className="name">{name}</h3>
                <p>Type: {getType(index)}</p>
              </ul>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Pokedex;
