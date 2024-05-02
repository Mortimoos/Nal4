import React from 'react';

type PlayerProps = {
  name: string;
  number: number;
};

const PlayerComponent: React.FC<PlayerProps> = ({ name, number }) => {
  return (
    <div style={{ border: '1px dashed white' }}>
      <h2>Name: {name}</h2>
      <p>Number: {number}</p>
    </div>
  );
};

export default PlayerComponent;
