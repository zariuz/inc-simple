import React from 'react';

type PropsType = {
  selected?: boolean;
};

const Star: React.FC<PropsType> = ({selected}) => {
  return selected ? (
    <span>
      <b>star </b>
    </span>
  ) : (
    <span>star </span>
  );
};

export default Star;
