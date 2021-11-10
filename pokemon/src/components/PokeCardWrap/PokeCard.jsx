import React from 'react';
import './PokeCard.css';

const PokeCard = ({ id, name, type, image }) => {
  const pokeBG = `poke-card ${type}`;

  return (
    <div className={pokeBG}>
      <div className="pokie-image">
        <img src={image} alt={image} />
      </div>

      <div className="card-title">
        <small>#{id}</small>

        <p className="name">{name}</p>

        <p className="type"> {type}</p>
      </div>
    </div>
  );
};

export default PokeCard;
