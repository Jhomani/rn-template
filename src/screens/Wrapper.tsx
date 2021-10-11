import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';

import {View} from "react-native";
import {colors} from '@styles/variables';

interface InProps {
  children: JSX.Element,
  background?: string, 
}

const Wrapper = (props: InProps ) => {
  const {mode} = useSelector(({setting}:MainState) => setting);
  let background = props.background; 

  if(!background) {
    background = colors[mode].background;
  }

  return (
    <View style={{
      backgroundColor: background,
      height: '100%' 
    }}>
      {props.children}
    </View>
  );
};

export default Wrapper;