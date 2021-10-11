import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {st_typography, TypografyTypes} from '@styles/components'
import { useSelector } from 'react-redux';
import {colors} from '@styles/variables';

interface InTypography extends TextProps {
  children: string | JSX.Element[] | string[] | JSX.Element;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = (props: InTypography) => {
  const {children, style, level ,...others} = props;
  const nameStyle: keyof TypografyTypes = `header${level ?? 1}`;

  return (
    <RNText 
      {...others}
      style={[st_typography[nameStyle], style]} 
    >
      {children}
    </RNText>
  );
}

export const SubTitle = (props: InTypography) => {
  const {children, style, level ,...others} = props;

  const validRange = (level == 2) ? 2 : 1;
  const nameStyle: keyof TypografyTypes = `subTitle${validRange}`;

  return (
    <RNText style={st_typography[nameStyle]} {...others}>
      {children}
    </RNText>
  );
}
interface InText extends TextProps {
  children: string | JSX.Element[] | string[] | JSX.Element;
  type?: 'body' | 'smallBody' | 'button' | 'caption' | 'overline';
  color?: string;
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
      style={[st_typography[nameStyle], {color}, style]} 
    >
      {children}
    </RNText>
  );
}
