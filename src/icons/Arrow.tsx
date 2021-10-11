import React from 'react';
import {SvgProps} from 'react-native-svg';
import Icon from './Icon';

interface InProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Arrow = ({size=10, color, ...oth}: InProps) => (
  <Icon
    {...oth}
    color={color}
    width={size} 
    height={(10/6)*size} 
    viewBox="0 0 6 10"
    path="M0.266515 0.26308C-0.0888383 0.612347 -0.0888383 1.17655 0.266515 1.52581L3.80182 5.00056L0.266515 8.47532C-0.0888383 8.82458 -0.0888383 9.38878 0.266515 9.73805C0.621868 10.0873 1.1959 10.0873 1.55125 9.73805L5.73349 5.62745C6.08884 5.27819 6.08884 4.71399 5.73349 4.36472L1.55125 0.254124C1.20501 -0.0861863 0.621868 -0.0861861 0.266515 0.26308Z"
  />
);