import React from 'react';
import {SvgProps} from 'react-native-svg';
import Icon from './Icon';

interface InProps extends SvgProps {
  size?: number;
  color?: string;
}

export const Menu = ({size=14, color, ...oth}: InProps) => (
  <Icon
    {...oth}
    color={color}
    width={size} 
    height={size} 
    viewBox="0 0 24 16"
    path="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
  />
);