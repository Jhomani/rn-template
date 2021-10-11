import React, { useEffect } from 'react';
import Svg, {
  Defs, LinearGradient, 
  Stop, Rect
} from 'react-native-svg';

import Wrapper from '@screens/Wrapper';

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
} from '@src/components'
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
    <Wrapper>
    <ScrollView 
      onScrollEndDrag={handleFocus}
      // stickyHeaderIndices={[]}
      style={{position: 'relative', overflow: 'scroll'}} 
      // scrollEnabled={false}
      // disableIntervalMomentum={true}
      // disableScrollViewPanResponder={true}
    >
      <View style={{overflow: 'hidden', borderRadius: 20}}>
        <Svg height="150" width="100%">
          <Defs>
            <LinearGradient id="mygrad" x1={0} x2={0} y1={0} y2={1}>
              <Stop offset={.2} stopColor="#ff0" stopOpacity={1} />
              <Stop offset={1} stopColor="#f00" stopOpacity={1}/>
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0"  width="100%" height="100%" fill="url(#mygrad)" />
        </Svg>
      </View>

      <Button 
        onPress={() => props.navigation.navigate('Setting')}
        type="primary" 
        content='To Setting'
      />

      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
        onFocus={handleFocus}
      />

      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores pariatur nihil architecto corporis aliquid impedit voluptatum, voluptatem ab, temporibus quas odio. Temporibus, error. Ex, fugit! Consequuntur, aut dolor at facilis veritatis assumenda accusantium ipsa culpa similique ex vel molestiae.</Text>
        
    </ScrollView>
    </Wrapper>
  );
};