import React from 'react';


export const Card = props => (

  <div className="card w-96 my-3 bg-gray-600 shadow-xl">
  <figure>    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    </figure>
  <div className="card-body">
    <h2 className="card-title">   {props.monster.name} </h2>
      <p> {props.monster.email} </p>
  </div>
</div>

);
