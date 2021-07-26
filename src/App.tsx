import React, { useState } from "react";
import style from "./App.module.css";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/Rating/Rating";
import { Select } from "./components/Select/Select";

export type ItemType = {
  title: string;
  value: string;
};

export const items: ItemType[] = [
  { title: "Evgeniy", value: "1" },
  { title: "Alexandra", value: "2" },
  { title: "Olga", value: "3" },
];

export function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const [value, setValue] = useState(items[0].value);

  const selectedShow = (value: string) => {
    setValue(value);
  };

  const clickHandler = (value: string) => {
    console.log(value);
  };

  return (
    <div className={style.app}>
      <PageTitle title={"This is App component!"} />
      <Accordion
        items={items}
        title={"Accordion Menu"}
        accordionCollapsed={accordionCollapsed}
        setAccordionCollapsed={setAccordionCollapsed}
        clickHandler={clickHandler}
      />
      <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
      <OnOff toggleOnOff={toggleOnOff} setToggleOnOff={setToggleOnOff} />
      <Select items={items} value={value} selectedShow={selectedShow} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

const PageTitle: React.FC<PageTitlePropsType> = ({ title }) => {
  return <h1>{title}</h1>;
};
