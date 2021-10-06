import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface InTheme extends SvgProps {
  size?: number;
  color?: string;
}

export const Theme = (
    {size=20, color='#000', ...other}: InTheme
  ) => (
    <Svg
      {...other}
      width={size}
      height={size}
      viewBox="0 0 20 20"
    >
      <Path d="M16.6667 12.7583L19.425 9.99995L16.6667 7.24162V3.33328H12.7583L10 0.574951L7.24166 3.33328H3.33333V7.24162L0.574997 9.99995L3.33333 12.7583V16.6666H7.24166L10 19.4249L12.7583 16.6666H16.6667V12.7583ZM10 15V4.99995C12.7583 4.99995 15 7.24162 15 9.99995C15 12.7583 12.7583 15 10 15Z" fill={color}/>
    </Svg>
  );