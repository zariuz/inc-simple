import React from 'react';

type PropsType = {
  title: string;
  collapsed: boolean;
  setCollapsed: any;
};

const AccordionTitle: React.FC<PropsType> = ({title, setCollapsed, collapsed}) => {
  const changeAccordion = (): void => {
    setCollapsed(!collapsed);
  };

  return <h3 onClick={changeAccordion}>{title}</h3>;
};

export default AccordionTitle;
