import React, { KeyboardEvent, useState } from "react";
import { ItemType } from "../../App";
import style from "./Select.module.css";

export type SelectPropsType = {
  items: ItemType[];
  selectedShow: (value: string) => void;
  value: string;
};

export const Select: React.FC<SelectPropsType> = ({
  items,
  value,
  selectedShow,
}) => {
  const [active, setActive] = useState(false);

  const selectedItem = items.find((i) => i.value === value);
  const onItemClick = (value: string) => {
    selectedShow(value);
    setActive(false);
  };
  const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) =>
    console.log("Event - ", event);

  return (
    <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={style.title} onClick={() => setActive(!active)}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={style.items}>
          {items.map((i) => (
            <div
              key={i.value}
              onClick={() => onItemClick(i.value)}
              className={`${style.item} ${
                selectedItem === i ? style.selected : ""
              }`}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
