import React from 'react';
import style from './Star.module.css';

type PropsType = {
  selected?: boolean;
  id: number;
  setValue: (value: number) => void;
};

const Star: React.FC<PropsType> = ({selected, id, setValue}) => {
  return selected ? (
    <div className={style.star} onClick={() => setValue(id)}>
      <b>star </b>
    </div>
  ) : (
    <div className={style.star} onClick={() => setValue(id)}>
      star{' '}
    </div>
  );
};

export default Star;
