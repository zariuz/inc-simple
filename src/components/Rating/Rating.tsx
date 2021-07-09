import React, {useState} from 'react';
import Star from '../Star/Star';

type PropsType = {
  ratingValue: number;
  setRatingValue: (value: number) => void;
};

const Rating: React.FC<PropsType> = ({ratingValue, setRatingValue}) => {
  return (
    <div>
      <Star selected={ratingValue > 0} id={1} setRatingValue={setRatingValue} />
      <Star selected={ratingValue > 1} id={2} setRatingValue={setRatingValue} />
      <Star selected={ratingValue > 2} id={3} setRatingValue={setRatingValue} />
      <Star selected={ratingValue > 3} id={4} setRatingValue={setRatingValue} />
      <Star selected={ratingValue > 4} id={5} setRatingValue={setRatingValue} />
    </div>
  );
};

export default Rating;
