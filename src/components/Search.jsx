import React from 'react';
import '../styles/Search.css'

export function Search(props) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder='Busca un personaje!!'
        ref={props.searchInput}
        value={props.search}
        onChange={props.handleSearch}
      />
    </div>
  );
}
