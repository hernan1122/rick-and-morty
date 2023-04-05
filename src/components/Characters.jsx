import React, { useState, useEffect } from 'react';
import '../styles/Characters.css'

export function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    //llamamos la api
    fetch('http://rickandmortyapi.com/api/character/')
      //convertimos la respuesta o informacion a JSON
      .then(res => res.json())
      //pasamos la informacion a setCharacters
      .then(data => setCharacters(data.results))
    console.log(characters);
  }, [])

  return (
    <article className='Characters'>
      {characters.map(character => (
        <div className='Characters-container'>
          <img src={character.image} alt="" />
          <div className='Characters-description'>
            <h2>{character.name}</h2>
            <p>{'Gender: ' + character.gender}</p>
            <p>{'Species: ' + character.species}</p>
            <p>{'Status: ' + character.status}</p>
          </div>
        </div>
      ))}
    </article>
  );
}
