import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOff, OnOffPropsType} from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args: OnOffPropsType) => (
  <OnOff {...args} />
);

export const OneMod = Template.bind({});
OneMod.args = {
  toggleOnOff: true,
  setToggleOnOff: () => {},
};

export const OffMod = Template.bind({});
OffMod.args = {
  toggleOnOff: false,
  setToggleOnOff: () => {},
};

export const ChangeMod = () => {
  const [toggle, setToggle] = useState(false);
  return <OnOff toggleOnOff={toggle} setToggleOnOff={() => setToggle(!toggle)} />;
};
