import React from 'react';
import {SvgProps} from 'react-native-svg';
import Icon from './Icon';

interface InProps extends SvgProps {
  size?: number;
  color?: string;
  tails?: boolean;
}

export const Plus = ({size=14, color, tails, ...oth}: InProps) => (
  <Icon
    {...oth}
    color={color}
    width={size} 
    rotation={tails ? 45 : undefined}
    height={size} 
    viewBox="0 0 14 14"
    path="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
  />
);