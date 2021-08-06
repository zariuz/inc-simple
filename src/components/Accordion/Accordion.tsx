import React, { Dispatch } from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";
import { ActionType, ItemType, StateType } from "../../App";

export type AccordionPropsType = {
  title: string;
  state: StateType;
  setAccordionCollapsed: Dispatch<ActionType>;
  items: ItemType[];
  clickHandler: (value: string) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
  title,
  items,
  state,
  setAccordionCollapsed,
  clickHandler,
}) => {
  return (
    <div>
      <AccordionTitle
        title={title}
        setAccordionCollapsed={setAccordionCollapsed}
      />

      {!state.collapsed && (
        <AccordionBody items={items} clickHandler={clickHandler} />
      )}
    </div>
  );
};
