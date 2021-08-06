import React, { useReducer, useState } from "react";
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

export type StateType = {
  collapsed: boolean;
};

export type ActionType = {
  type: string;
};

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

const InitialState: StateType = {
  collapsed: false,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [ratingValue, setRatingValue] = useState(0);
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
        state={state}
        setAccordionCollapsed={dispatch}
        clickHandler={clickHandler}
      />
      <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
      <OnOff toggleOnOff={toggleOnOff} setToggleOnOff={setToggleOnOff} />
      <Select items={items} value={value} selectedShow={selectedShow} />
    </div>
  );
};

type PageTitlePropsType = {
  title: string;
};

const PageTitle: React.FC<PageTitlePropsType> = ({ title }) => {
  return <h1>{title}</h1>;
};
