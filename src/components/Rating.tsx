import React from 'react';
import Star from './Star';

type PropsType = {
  value: number;
};

const Rating: React.FC<PropsType> = ({value}) => {
  switch (value) {
    case 1:
      return (
        <div>
          <Star selected />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
    case 2:
      return (
        <div>
          <Star selected />
          <Star selected />
          <Star />
          <Star />
          <Star />
        </div>
      );
    case 3:
      return (
        <div>
          <Star selected />
          <Star selected />
          <Star selected />
          <Star />
          <Star />
        </div>
      );
    case 4:
      return (
        <div>
          <Star selected />
          <Star selected />
          <Star selected />
          <Star selected />
          <Star />
        </div>
      );
    case 5:
      return (
        <div>
          <Star selected />
          <Star selected />
          <Star selected />
          <Star selected />
          <Star selected />
        </div>
      );
    default:
      return (
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
  }
};

export default Rating;
