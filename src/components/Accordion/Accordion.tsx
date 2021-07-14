import React, {useState} from 'react';
import {AccordionBody} from './AccordionBody';
import {AccordionTitle} from './AccordionTitle';

export type AccordionPropsType = {
  title: string;
  accordionСollapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
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
