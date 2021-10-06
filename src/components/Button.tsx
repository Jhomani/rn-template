import React, {  useRef } from 'react';
import {Pressable, View, Animated} from 'react-native';
import { style } from 'src/Layout/styles';
import {Text} from '@src/components'

import {st_button} from '../../styles/components';

interface InButton {
  shadow?: 'primary' | 'normal';
  icon?: JSX.Element;
  shape?: 'round';
  to?: string;
  align?: 'flex-bottom';
  type: 'primary' | 'secondary' | 'transparent' | 'gradient';
  children?:  string;
  content?:  string;
  onPress?: Function;
  inBlank?: string
}

export const Button = (props: InButton) => {
  const btn = useRef(null);
  const pressed = useRef(new Animated.Value(0)).current;
  const {
    children, content,
    type, icon,
    shape = '',
    align = '',
    onPress, inBlank,
    to
  } = props;

  const handleClick = () => {
    Animated.timing(pressed, {
      toValue: 150,
      duration: 320,
      useNativeDriver: false 
    }).start();

    setTimeout(() => pressed.setValue(0), 320)

    if (onPress) onPress();
  }

  return (
    <Pressable
      onPress={handleClick}
      ref={btn}
      style={st_button.btn}
    >

      <View style={st_button.content}>
        {icon}

        {children || content &&
          <Text 
            type="button"
            style={{...st_button.text, ...{marginLeft: icon ? 8 : 0}}}
            numberOfLines={1}  
            ellipsizeMode="tail"
          >
            {content ?? children}
          </Text>
        }
      </View>

      <Animated.View style={[st_button.pressed, { width: pressed, height: pressed } ]} />
    </Pressable>
  );
}