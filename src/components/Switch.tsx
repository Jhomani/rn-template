import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Animated, Pressable} from 'react-native';

interface InSwitch {
  onChange: (k: boolean) => void;
  checked?: boolean;
}

export const Switch = ({onChange, checked}: InSwitch) => {
  let check = Boolean(checked);
  const [state, setStatus] = useState(check);
  const circleIns = new Animated.Value(check ? 10 : -2);
  const pressInst = new Animated.Value(0);

  useEffect(() => {
    animate(false);

    setStatus(check);
  }, [checked]);

  const animate = (condition:boolean) => {
    let toValue = 10;

    check = condition ? state : check;

    if(check == condition) toValue = -2;
    Animated.timing(circle,{
      toValue,
      duration: 200,
      useNativeDriver: false 
    }).start();
  }

  const circle = useRef(circleIns).current;
  const pressed = useRef(pressInst).current;

  const handlePress = () => {

    animate(true);

    Animated.timing(pressed, {
      toValue: 26,
      duration: 270,
      useNativeDriver: false 
    }).start();

    setTimeout(() => pressed.setValue(0), 320)

    setStatus(!state);
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
        margin: 2,
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