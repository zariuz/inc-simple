import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion, AccordionPropsType } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (
  args: AccordionPropsType
) => <Accordion {...args} />;

export const CollapsedOn = Template.bind({});
CollapsedOn.args = {
  title: "React!!!",
  accordionCollapsed: false,
  setAccordionCollapsed: () => {},
};

export const CollapsedOff = Template.bind({});
CollapsedOff.args = {
  title: "React!!!",
  accordionCollapsed: true,
  setAccordionCollapsed: () => {},
};

// export const CollapsedMod = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <Accordion
//       items={items}
//       title={"React!!!"}
//       accordionCollapsed={collapsed}
//       setAccordionCollapsed={() => setCollapsed(!collapsed)}
//     />
//   );
// };
