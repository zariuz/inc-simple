import React from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";
import { ItemType } from "../../App";

export type AccordionPropsType = {
  title: string;
  accordionCollapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void;
  items: ItemType[];
  clickHandler: (value: number) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
  title,
  items,
  accordionCollapsed,
  setAccordionCollapsed,
  clickHandler,
}) => {
  return (
    <div>
      <AccordionTitle
        title={title}
        accordionCollapsed={accordionCollapsed}
        setAccordionCollapsed={setAccordionCollapsed}
      />
      {!accordionCollapsed && (
        <AccordionBody items={items} clickHandler={clickHandler} />
      )}
    </div>
  );
};
