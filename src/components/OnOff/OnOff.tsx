import React, {useState} from 'react';
import style from './OnOff.module.css';

type PropsType = {
  // toggle: boolean;
};

const OnOff: React.FC<PropsType> = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={style.wrapper}>
      <div
        onClick={() => !toggle && setToggle(true)}
        className={`${style.toggleButton} ${toggle && style.green}`}>
        On
      </div>
      <div
        onClick={() => toggle && setToggle(false)}
        className={`${style.toggleButton} ${!toggle && style.red}`}>
        Off
      </div>
      <div className={`${style.lamp} ${toggle ? style.green : style.red}`}></div>
    </div>
  );
};

export default OnOff;
