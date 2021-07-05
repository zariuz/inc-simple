import React from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type PropsType = {
  title: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Accordion: React.FC<PropsType> = ({title, collapsed, setCollapsed}) => {
  return (
    <div>
      <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed} />
      {!collapsed && <AccordionBody />}
    </div>
  );
};

export default Accordion;
