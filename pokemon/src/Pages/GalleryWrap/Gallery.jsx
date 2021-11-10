/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';
import PokeCard from '../../components/PokeCardWrap/PokeCard';

const Gallery = () => {
  const [allPokes, setAllPokes] = useState([]);
  const [LoadMore, setLoadMore] = useState([
    'https://pokeapi.co/api/v2/pokemon?limit=24',
  ]);

  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
  });

  const fetchPokemon = async () => {
    const res = await api.get('/pokemon?limit=24');
    const data = await res.data;

    setLoadMore(data.next);

    retrievePokeObj(data.results);
  };

  const retrievePokeObj = async (result) => {
    result.forEach(async (pokemon) => {
      try {
        const res = await axios.get(`${pokemon.url}`);
        setAllPokes((currentList) => [...currentList, res.data]);
      } catch (error) {
        console.log(error);
      }
    });

    console.log(allPokes);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const loadPoke = async () => {
    const res = await axios.get(LoadMore);
    const data = await res.data;

    setLoadMore(data.next);

    retrievePokeObj(data.results);
  };

  return (
    <div className="gallery">
      <div className="heading">
        <h1>Exciting Gallery of Pokemons!!</h1>
        {/* search input */}
      </div>

      <div className="list-group">
        {allPokes
          .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
          .map((poke) => (
            <PokeCard
              key={poke.name}
              name={poke.name}
              image={poke.sprites.other.dream_world.front_default}
              id={poke.id}
              type={poke.types[0].type.name}
            />
          ))}
      </div>

      <button onClick={loadPoke}>Load More</button>
    </div>
  );
};

export default Gallery;
