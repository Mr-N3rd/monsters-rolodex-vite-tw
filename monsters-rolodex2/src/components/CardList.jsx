import React from 'react';

import { Card } from './Card';


export const CardList = props => (
  <div className='card-list my-3'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
