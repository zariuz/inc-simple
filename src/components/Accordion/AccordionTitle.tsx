import React from 'react';

type PropsType = {
  title: string;
  accordionСollapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void;
};

export const AccordionTitle: React.FC<PropsType> = ({
  title,
  setAccordionCollapsed,
  accordionСollapsed,
}) => {
  const changeAccordion = (): void => {
    setAccordionCollapsed(!accordionСollapsed);
  };

  return <h3 onClick={changeAccordion}>{title}</h3>;
};
