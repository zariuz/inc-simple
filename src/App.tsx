import React, {useState} from 'react';
import style from './App.module.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={style.app}>
      <PageTitle title={'This is App component!'} />
      <Accordion
        title={'Accordion Menu'}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Rating />

      <OnOff />
    </div>
  );
}

type PageTitlePropsTupe = {
  title: string;
};

const PageTitle: React.FC<PageTitlePropsTupe> = ({title}) => {
  return <h1>{title}</h1>;
};

export default App;
