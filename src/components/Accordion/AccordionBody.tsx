import React from "react";
import { ItemType } from "../../App";

type PropsTypes = {
  items: ItemType[];
  clickHandler: (value: string) => void;
};

export const AccordionBody: React.FC<PropsTypes> = ({
  items,
  clickHandler,
}) => {
  const itemsList = items.map((i) => (
    <li
      onClick={() => {
        clickHandler(i.value);
      }}
      key={i.value}
    >
      {i.title}
    </li>
  ));

  return <ul>{itemsList}</ul>;
};
