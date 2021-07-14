import React, {useState} from 'react';
import style from './App.module.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';

export function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [accordionСollapsed, setAccordionCollapsed] = useState(false);
  const [toggleOnOff, setToggleOnOff] = useState(false);

  return (
    <div className={style.app}>
      <PageTitle title={'This is App component!'} />
      <Accordion
        title={'Accordion Menu'}
        accordionСollapsed={accordionСollapsed}
        setAccordionCollapsed={setAccordionCollapsed}
      />
      <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
      <OnOff toggleOnOff={toggleOnOff} setToggleOnOff={setToggleOnOff} />
    </div>
  );
}

type PageTitlePropsTupe = {
  title: string;
};

const PageTitle: React.FC<PageTitlePropsTupe> = ({title}) => {
  return <h1>{title}</h1>;
};
