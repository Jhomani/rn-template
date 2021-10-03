import Svg, {Path} from 'react-native-svg';
import React from 'react'

export const Menu = ({ size = 24, color = '#fff' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 16"
  >
    <Path d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z" fill={color} />
  </Svg>
);