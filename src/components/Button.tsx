import React, {  useEffect, useRef } from 'react';
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
import { GestureEvent } from 'react-native-gesture-handler';
import { transform } from '@babel/core';

interface InButton extends PressableProps {
  shadow?: 'primary' | 'normal';
  icon?: JSX.Element;
  to?: string;
  align?: 'flex-bottom';
  type: 'primary' | 'secondary' | 'plain' | 'gradient';
  children?:  string;
  content?:  string;
  inBlank?: string;
  style?: ViewStyle
}

export const Button = (props: InButton) => {
  const size = useRef(new Animated.Value(0)).current;
  const {mode} = useSelector(({setting}:MainState) => setting);

  const {
    children, content,
    type, icon,
    align = '',
    to,
    onPress,
    style,
  } = props;

  let color: undefined | string = colors['dark'].txtEmphasis; 
  const btnText = content ?? children;

  const handleClick = (ev:GestureResponderEvent) => {
    Animated.timing(size, {
      toValue: 150,
      duration: 250,
      useNativeDriver: false 
    }).start();

    setTimeout(() => {
      if (onPress) onPress(ev);

      size.setValue(0)
    } , 250)
  }

  // switch(type) {
  //   case 'secondary': 
  //     color = undefined;  // this mean Text dinamic color
  //     st_button.btn.backgroundColor = colors[mode].button;
  //   case 'plain':
  //     color = undefined;  // this mean Text dinamic color
  //     st_button.btn.backgroundColor = '#0000';
  //   case 'primary':
  //     color = colors['dark'].txtEmphasis;
  //     st_button.btn.backgroundColor = colors['static'].variant; 
  // }

  // if((icon && !btnText))
  //   st_button.btn.width = 32;

  return (
    <Pressable
      onPress={handleClick}
      style={Object.assign(st_button.btn, style)}
    >
      <View style={st_button.content}>
        {icon}

        {btnText &&
          <Text 
            type="button"
            numberOfLines={1}  
            ellipsizeMode="tail"
            color={color}
            style={{
              marginLeft: icon ? 8 : 0
            }}
          >
            {btnText}
          </Text>
        }
      </View>

      <Animated.View 
        style={{...st_button.pressed, width: size, height: size }} 
      />
    </Pressable>
  );
}