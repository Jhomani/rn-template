import { colors } from '@styles/variables';
import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useSelector} from 'react-redux';

interface InProps extends SvgProps {
  height: number;
  width: number; 
  color?: string;
  path: string;
  viewBox?: string;
}

const Icon = ({viewBox, path, color, ...oth}: InProps) => {
  const {mode} = useSelector(({setting}:MainState) => setting);

  if(!color)
    color = colors[mode].txtEmphasis;

  return (
    <Svg
      {...oth}
      viewBox={viewBox ?? "0 0 14 14"}
    >
      <Path d={path} fill={color}/>
    </Svg>
  );
} 

export default  Icon;