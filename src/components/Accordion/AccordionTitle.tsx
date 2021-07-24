import React from "react";

type PropsType = {
  title: string;
  accordionCollapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void;
};

export const AccordionTitle: React.FC<PropsType> = ({
  title,
  setAccordionCollapsed,
  accordionCollapsed,
}) => {
  const changeAccordion = (): void => {
    setAccordionCollapsed(!accordionCollapsed);
  };

  return <h3 onClick={changeAccordion}>{title}</h3>;
};
