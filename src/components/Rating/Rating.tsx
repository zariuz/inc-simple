import React, {useState} from 'react';
import Star from '../Star/Star';

type PropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5;
};

const Rating: React.FC<PropsType> = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Star selected={value > 0} id={1} setValue={setValue} />
      <Star selected={value > 1} id={2} setValue={setValue} />
      <Star selected={value > 2} id={3} setValue={setValue} />
      <Star selected={value > 3} id={4} setValue={setValue} />
      <Star selected={value > 4} id={5} setValue={setValue} />
    </div>
  );
};

export default Rating;
