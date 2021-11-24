import React, {useRef} from 'react';
import {
  Pressable, 
  View, 
  Animated, 
  PressableProps,
  ViewStyle,
  GestureResponderEvent
} from 'react-native';
import {useSelector} from 'react-redux';

import {Text} from '@src/components'
import {st_button} from '../../styles/components';
import {colors} from '@styles/variables';

interface InButton extends PressableProps {
  shadow?: 'primary' | 'normal';
  icon?: JSX.Element;
  to?: string;
  align?: 'flex-bottom';
  type: 'primary' | 'secondary' | 'plain' | 'gradient' | 'lightPlain';
  children?:  string;
  content?:  string;
  inBlank?: string;
  style?: ViewStyle
}

export const Button = (props: InButton) => {
  const size = useRef(new Animated.Value(0)).current;
  const {mode} = useSelector(({setting}:MainState) => setting);
  let backgroundColor = colors['static'].variant;
  let color = colors['dark'].txtEmphasis;
  let pressedColor = colors['dark'].pressed;
  let width = 120;

  const {
    children, content,
    type, icon,
    align = '',
    to,
    onPress,
    style,
  } = props;

  const btnText = content ?? children;

  const handleClick = (ev:GestureResponderEvent) => {
    Animated.timing(size, {
      toValue: 150,
      duration: 250,
      useNativeDriver: false 
    }).start();

    if(onPress) {
      ev.preventDefault();
      setTimeout(() => onPress(ev), 150);
    }

    setTimeout(() => size.setValue(0), 250);
  }

  switch(type) {
    case 'secondary': 
      color = '';  // this mean Text dinamic color
      backgroundColor = colors[mode].button;
      pressedColor = colors[mode].pressed;
      break;
    case 'plain':
      color = '';  // this mean Text dinamic color
      pressedColor = colors[mode].pressed;
      backgroundColor = '#0000';
      break;
    case 'lightPlain':
      backgroundColor = '#0000';
      break;
  }

  if(icon && !btnText)
    width = 32;

  return (
    <Pressable
      onPress={handleClick}
      style={{
        ...st_button.btn, 
        ...style,
        backgroundColor,
        width
      }}
    >
      <View style={st_button.content}>
        {icon}

        {btnText &&
          <Text 
            type="button"
            numberOfLines={1}  
            ellipsizeMode="tail"
            color={color}
            style={{marginLeft: icon ? 8 : 0}}
          >
            {btnText}
          </Text>
        }
      </View>

      <Animated.View 
        style={{
          ...st_button.pressed, 
          width: size, 
          height: size, 
          backgroundColor: pressedColor,
        }} 
      />
    </Pressable>
  );
}