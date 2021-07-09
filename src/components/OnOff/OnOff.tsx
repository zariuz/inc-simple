import React, {useState} from 'react';
import style from './OnOff.module.css';

type PropsType = {
  toggleOnOff: boolean;
  setToggleOnOff: (toggleOnOff: boolean) => void;
};

const OnOff: React.FC<PropsType> = ({toggleOnOff, setToggleOnOff}) => {
  const onClicked = () => !toggleOnOff && setToggleOnOff(true);
  const offClicked = () => toggleOnOff && setToggleOnOff(false);

  return (
    <div className={style.wrapper}>
      <div
        onClick={onClicked}
        className={`${style.toggleOnOffButton} ${toggleOnOff && style.green}`}>
        On
      </div>
      <div
        onClick={offClicked}
        className={`${style.toggleOnOffButton} ${!toggleOnOff && style.red}`}>
        Off
      </div>
      <div className={`${style.lamp} ${toggleOnOff ? style.green : style.red}`}></div>
    </div>
  );
};

export default OnOff;
