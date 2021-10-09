import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface InProps extends SvgProps {
  size?: number;
  color?: string;
  direction?: string;
}

export const Arrow = ({size=15, color='#000', ...oth}: InProps) => (
  <Svg
    {...oth}
    width={size} 
    height={size} 
    viewBox="0 0 8 12"
  >
    <Path d="M1.29 0.710022C0.899998 1.10002 0.899998 1.73002 1.29 2.12002L5.17 6.00002L1.29 9.88002C0.899998 10.27 0.899998 10.9 1.29 11.29C1.68 11.68 2.31 11.68 2.7 11.29L7.29 6.70002C7.68 6.31002 7.68 5.68002 7.29 5.29002L2.7 0.700022C2.32 0.320022 1.68 0.320022 1.29 0.710022Z" fill={color}/>
  </Svg>
);