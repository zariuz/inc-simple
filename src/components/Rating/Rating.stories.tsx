import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Rating, RatingPropsType} from './Rating';

export default {
  title: 'Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args: RatingPropsType) => (
  <Rating {...args} />
);

export const EmptyRating = Template.bind({});
EmptyRating.args = {
  ratingValue: 0,
  setRatingValue: () => {},
};

export const Rating1 = Template.bind({});
Rating1.args = {
  ratingValue: 1,
  setRatingValue: () => {},
};

export const Rating2 = Template.bind({});
Rating2.args = {
  ratingValue: 2,
  setRatingValue: () => {},
};

export const Rating3 = Template.bind({});
Rating3.args = {
  ratingValue: 3,
  setRatingValue: () => {},
};

export const Rating4 = Template.bind({});
Rating4.args = {
  ratingValue: 4,
  setRatingValue: () => {},
};

export const Rating5 = Template.bind({});
Rating5.args = {
  ratingValue: 5,
  setRatingValue: () => {},
};

export const ChangeRating = () => {
  const [rating, setRating] = useState(3);
  return <Rating ratingValue={rating} setRatingValue={setRating} />;
};
