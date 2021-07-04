import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="app">
      <PageTitle title={'This is App component!'} />
      <Rating value={0} />
      <Accordion
        title={'Accordion Menu'}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Rating value={3} />
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
