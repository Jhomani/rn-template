import React, { memo, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text, 
  View , 
  Keyboard,
  Dimensions,
  StatusBar,
} from "react-native";

import {ModalRoot} from '../components/main';
import {dimensions} from '@utils/global';

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
          height: dimensions.body() - keysize,
          overflow: 'hidden',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        {props.children}
      </View>

      {/* <View accessibilityLabel="footer">
        <Text>this is other content</Text>
      </View> */}

      {/* my global Componetns */}
      <ModalRoot /> 
    </View>
  )
}

export default memo(Layout, (prev, next) => {
  return true;
});