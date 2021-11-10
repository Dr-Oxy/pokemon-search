/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import Pokemon from '../../Assets/Pokemon.png';
import PokemonResult from '../../components/PokemonWrap/Pokemon';

const LandingPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
  });

  console.log(pokemon);

  const getPokemon = async () => {
    if (name === '') {
      setIsError(true);
    } else {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await api.get(`pokemon/${name}`);
        setPokemon(res.data);
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      {isError && (
        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'red',
          }}
        >
          <p>Oops!!! Something went wrong.</p>
          <ul style={{ color: '#111', fontSize: '14px' }}>
            <li>Try refreshing your browser.</li>
            <li>Check the search keywords</li>
          </ul>
        </div>
      )}
      {isLoading ? (
        <div className="preloader">
          <h1>This will take a few moments..</h1>
        </div>
      ) : (
        <main>
          <section
            style={{ backgroundImage: `url(${Pokemon})` }}
            className="landing-page"
          >
            <h1>Find Your Favourite Pokemon Characters</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, nobis amet vel repellendus ullam consequuntur natus
              qui deserunt ad vitae.
            </p>

            <div className="search-group">
              <input
                placeholder="e.g pikachu, eevee, charmamander etc"
                type="search"
                name="search"
                id="search"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaSearch onClick={getPokemon} style={{ cursor: 'pointer' }} />
            </div>
          </section>

          {pokemon === null ? null : <PokemonResult pokemon={pokemon} />}
        </main>
      )}
    </React.Fragment>
  );
};
export default LandingPage;
