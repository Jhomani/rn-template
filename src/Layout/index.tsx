import React, { memo, useEffect, useState } from 'react';
import {
  View , 
  Keyboard,
} from "react-native";

import {ModalRoot} from '../components';
import {dimension} from '@utils/global';

import {style} from './styles';
import Header from './Header';

interface InLayout {
  children: JSX.Element | string,
}

const Layout = (props: InLayout) => {
  const [keysize, setKeysize] = useState(0);
  console.log('on Lauyout <= 37 layout');

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow', 
      ev => setKeysize(ev.endCoordinates.height)
    );

    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide', 
      () => setKeysize(0)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [])

  return (
    <View style={style.container}>
      <Header/>

      <View 
        style={{
          width: '100%', 
          height: dimension.body() - keysize,
          overflow: 'hidden',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#0f0'
        }}>
        {props.children}
      </View>

      <ModalRoot /> 
    </View>
  )
}

export default memo(Layout, (prev, next) => {
  return true;
});