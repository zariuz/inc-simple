import React, { Dispatch } from "react";
import { ActionType, TOGGLE_COLLAPSED } from "../../App";

type PropsType = {
  title: string;
  setAccordionCollapsed: Dispatch<ActionType>;
};

export const AccordionTitle: React.FC<PropsType> = ({
  title,
  setAccordionCollapsed,
}) => {
  const changeAccordion = (): void => {
    setAccordionCollapsed({ type: TOGGLE_COLLAPSED });
  };

  return <h3 onClick={changeAccordion}>{title}</h3>;
};
