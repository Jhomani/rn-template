import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {st_typography, TypografyTypes} from '@styles/components'

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
  width?: number;
}

export const Text = (props: InText) => {
  const {children, style,color, type, width, ...others} = props;

  const nameStyle = type ?? 'body';

  return (
    <RNText 
      {...others}
      style={[st_typography[nameStyle], {color, width}, style]} 
    >
      {children}
    </RNText>
  );
}
