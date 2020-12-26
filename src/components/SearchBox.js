import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      type="search"
      className="pa3 ba b--green"
      placeholder="Search robo friends"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;