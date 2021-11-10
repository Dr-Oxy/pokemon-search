import React from 'react';
import './Pokemon.css';

const Pokemon = ({ pokemon }) => {
  const name = pokemon.name;
  const image = pokemon.sprites.other.dream_world.front_default;
  const type = pokemon.types[0].type.name;
  const weight = pokemon.weight;
  const height = pokemon.height;
  // const ability = pokemon.id;

  const pokeBG = `poke-image ${type}`;
  const wrapColor = `wrap ${type}`;

  return (
    <section className="pokemon-wrapper">
      <h1>Your Search is Ready...</h1>
      <article className={wrapColor}>
        <article className={pokeBG}>
          <img src={image} alt={image} />
        </article>

        <article className="poke-details">
          <ul>
            <li>
              <span>name:</span> {name}
            </li>
            <li>
              <span>type:</span> {type}
            </li>
            <li>
              <span>weight:</span> {weight}
            </li>
            <li>
              {' '}
              <span>height:</span> {height}
            </li>
          </ul>
        </article>
      </article>
    </section>
  );
};

export default Pokemon;
