import React, {useState} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type PropsType = {
  title: string;
  accordionСollapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void;
};

const Accordion: React.FC<PropsType> = ({
  title,
  accordionСollapsed,
  setAccordionCollapsed,
}) => {
  return (
    <div>
      <AccordionTitle
        title={title}
        accordionСollapsed={accordionСollapsed}
        setAccordionCollapsed={setAccordionCollapsed}
      />
      {!accordionСollapsed && <AccordionBody />}
    </div>
  );
};

export default Accordion;
