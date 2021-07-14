import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Accordion, AccordionPropsType} from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => (
  <Accordion {...args} />
);

export const CollapsedOn = Template.bind({});
CollapsedOn.args = {
  title: 'React!!!',
  accordionСollapsed: false,
  setAccordionCollapsed: () => {},
};

export const CollapsedOff = Template.bind({});
CollapsedOff.args = {
  title: 'React!!!',
  accordionСollapsed: true,
  setAccordionCollapsed: () => {},
};

export const CollapsedMod = () => {
  const [collapsed, setСollapsed] = useState(false);
  return (
    <Accordion
      title={'React!!!'}
      accordionСollapsed={collapsed}
      setAccordionCollapsed={() => setСollapsed(!collapsed)}
    />
  );
};
