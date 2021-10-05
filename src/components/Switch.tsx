import React, {useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {View, Animated, Pressable} from 'react-native';

interface InSwitch {
  onChange: (k: boolean) => void;
  checked?: boolean;
}

const pressInst = new Animated.Value(0);

export const Switch = (props: InSwitch) => {
  const {onChange, checked} = props;
  const [state, setState] = useState(checked ?? false);

  const circleIns = new Animated.Value(checked ? 10 : -2);
  const circle = useRef(circleIns).current;
  const pressed = useRef(pressInst).current;

  const handlePress = () => {
    let toValue = 10;

    if(state) toValue = -2;

    Animated.timing(circle,{
      toValue,
      duration: 200,
      useNativeDriver: false 
    }).start();

    Animated.timing(pressed, {
      toValue: 26,
      duration: 270,
      useNativeDriver: false 
    }).start();

    setTimeout(() => pressed.setValue(0), 320)

    setState(!state);
    onChange(!state);
  }

  return (
    <View style={{
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Pressable style={{
        height: 12, 
        width: 24, 
        margin: 9,
        borderRadius: 6,
          backgroundColor: state ? '#33888853' : '#E1E1E1'
      }}
      onPress={handlePress}
      >
        <Animated.View style={{
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: circle,
          height: 16, 
          width: 16, 
          borderRadius: 8,
          backgroundColor: state ? '#388' : '#9E9E9E'
        }} />

      </Pressable>

      <Animated.View style={{
        position: 'absolute',
        borderRadius: 70,
        height: pressed, 
        width: pressed.interpolate({
          inputRange: [0, 26],
          outputRange: [0, 39]
        }), 
        backgroundColor: state ? '#3388881C' : '#0000000C',
        zIndex: -1,
      }} />
    </View>
  );
}