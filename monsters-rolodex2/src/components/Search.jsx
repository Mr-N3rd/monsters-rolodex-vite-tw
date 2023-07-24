import React from 'react';

export const Search = props => (
  <input
    className='search-box input input-bordered w-full max-w-xs'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);
