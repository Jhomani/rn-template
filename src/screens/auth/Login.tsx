import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Svg, {
  Defs, LinearGradient, 
  Stop, Rect
} from 'react-native-svg';

import {
  Keyboard, 
  TextInput,
  StyleSheet, 
  View, 
  ScrollView, 
} from "react-native";

import { LoginProps } from './types';
import {
  Modal, 
  Button, 
  Title, 
  SubTitle, 
  Text,
  Switch,
} from '@components/main'
import {Plus} from '../../icons'

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },
  status: {
    padding: 10,
    textAlign: "center"
  }
});


export const Login = (props: LoginProps) => {
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {

    return () => {
      console.log('Login unmountes');
    }
  }, []);

  const handleFocus = (ev: any) => {
    // console.log(ev.nativeEvent)
    // Keyboard.dismiss();
  }

  const hideModal = ()  => {
    setRefreshing(false)
  }


  console.log('re-render... into loging')

  return (
    <>
    <ScrollView 
      onScrollEndDrag={handleFocus}
      // stickyHeaderIndices={[]}
      style={{backgroundColor: '#F2F2F2',position: 'relative', overflow: 'scroll'}} 
      // scrollEnabled={false}
      // disableIntervalMomentum={true}
      // disableScrollViewPanResponder={true}
    >
      <Switch checked onChange={val => console.log(val)} />

      <View style={{overflow: 'hidden', borderRadius: 20}}>
        <Svg height="150" width="100%">
          <Defs>
            <LinearGradient id="mygrad" x1={0} x2={0} y1={0} y2={1}>
              <Stop offset={.2} stopColor="#ff0" stopOpacity={1} />
              <Stop offset={1} stopColor="#f00" stopOpacity={1}/>
            </LinearGradient>
          </Defs>
          {/* <Ellipse cx={200} cy={70} rx={85} ry={55} fill="url(#mygrad)" /> */}
          <Rect x="0" y="0"  width="100%" height="100%" fill="url(#mygrad)" />
          {/* <Texting fill="#000" font-size="45" font-family="Verdana" x="150" y="86"></Texting> */}
        </Svg>
      </View>
      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
        onFocus={handleFocus}
      />
        
    </ScrollView>
    <Modal 
      show={refreshing}
      hideModal={hideModal}
    >
      <Text>with funtion maen</Text>
    </Modal>
    </>
  );
};