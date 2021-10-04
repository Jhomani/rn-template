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
import {Modal, Button, Title, SubTitle, Text} from '@components/main'
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
      style={{position: 'relative', overflow: 'scroll'}} 
      // scrollEnabled={false}
      // disableIntervalMomentum={true}
      // disableScrollViewPanResponder={true}
    >
    <Title>Title 1</Title>
    <Title level={2}>Title 2</Title>
    <Title level={3}>Title 3 </Title>
    <Title level={4}>Title 4</Title>
    <Title level={5}>Title 5</Title>
    <Title level={6}>Title 6 y</Title>

    <SubTitle >SubTitle 1</SubTitle>
    <SubTitle level={2}>SubTitle 2</SubTitle>

    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, lab eligendi do veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at. &nbsp; .&perp; &#36; yy 
    </Text>

    <Text type='smallBody'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, lab eligendi do veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at. &nbsp; .&perp; &#36; yy 
    </Text>

    <Text type="caption">Caption</Text>
    <Text type="overline">overline</Text>

      <Button
        type='primary'
        icon={<Plus size={12} />}
        onPress={() => setRefreshing(true)}
        content="te afgua mean with you"
      />
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