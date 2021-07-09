import React from 'react';
import style from './Star.module.css';

type PropsType = {
  selected?: boolean;
  id: number;
  setRatingValue: (value: number) => void;
};

const Star: React.FC<PropsType> = ({selected, id, setRatingValue}) => {
  return (
    <div className={style.star} onClick={() => setRatingValue(id)}>
      {selected ? <b>star </b> : 'star'}
    </div>
  );
};

export default Star;
