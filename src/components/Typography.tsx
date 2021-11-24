import React from 'react';
import {Text as RNText, TextProps, ViewStyle} from 'react-native';
import {st_typography, TypografyTypes} from '@styles/components'
import {useSelector} from 'react-redux';
import {colors} from '@styles/variables';

interface CommonTypes extends TextProps {
  children: string | JSX.Element[] | string[] | JSX.Element;
  color?: string;
  style?: ViewStyle 
}

interface InTypography extends CommonTypes {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface InText extends CommonTypes {
  type?: 'body' | 'smallBody' | 'button' | 'caption' | 'overline';
}

export const Title = (props: InTypography) => {
  let {children, color, style, level ,...others} = props;
  const nameStyle: keyof TypografyTypes = `header${level ?? 1}`;
  const {mode} = useSelector(({setting}:MainState) => setting);

  if(!color)
    color = colors[mode].txtEmphasis;

  return (
    <RNText 
      {...others}
      style={{
        ...style,
        ...st_typography[nameStyle],
        color
      }} 
    >
      {children}
    </RNText>
  );
}

export const SubTitle = (props: InTypography) => {
  let {children, color, style, level ,...others} = props;
  const {mode} = useSelector(({setting}:MainState) => setting);

  if(!color)
    color = colors[mode].txtEmphasis;

  const validRange = (level == 2) ? 2 : 1;
  const nameStyle: keyof TypografyTypes = `subTitle${validRange}`;

  return (
    <RNText 
      {...others}
      style={{
        ...style,
        ...st_typography[nameStyle],
        color
      }} 
    >
      {children}
    </RNText>
  );
}

export const Text = (props: InText) => {
  let {children, style,color, type, ...others} = props;
  const {mode} = useSelector(({setting}:MainState) => setting);
  const nameStyle = type ?? 'body';

  if(!color)
    color = colors[mode].txtEmphasis;

  return (
    <RNText 
      {...others}
      style={{
        ...style,
        ...st_typography[nameStyle],
        color
      }} 
    >
      {children}
    </RNText>
  );
}
