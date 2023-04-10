import React from 'react';

export function Search(props) {
  return (
    <div className="Search">
      <input
        type="text"
        ref={props.searchInput}
        value={props.search}
        onChange={props.handleSearch}
      />
    </div>
  );
}
