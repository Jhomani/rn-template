import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Svg, {
  Defs, LinearGradient, Stop, Rect
} from 'react-native-svg';
import {
  Keyboard, 
  Text, 
  TextInput,
  StyleSheet, 
  View , 
  ScrollView, 
} from "react-native";

import { LoginProps } from './types';
import {loginStart} from '@redux/auth/accions';
import {Modal, Button} from '@components/main'
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
  const dispatch = useDispatch();
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
      
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, labore similique eius, mollitia quasi iste magni cumque eligendi dolorem, quos nobis excepturi tempora veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at. &nbsp; .&perp; &#36; 
      </Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, labore similique eius, mollitia quasi iste magni cumque eligendi dolorem, quos nobis excepturi tempora veniam explicabo quas distinctio{'\n'} officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, labore similique eius, mollitia quasi iste magni cumque eligendi dolorem, quos nobis excepturi tempora veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, labore similique eius, mollitia quasi iste magni cumque eligendi dolorem, quos nobis excepturi tempora veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta aliquam, labore similique eius, mollitia quasi iste magni cumque eligendi dolorem, quos nobis excepturi tempora veniam explicabo quas distinctio officiis error vel. Ducimus nemo illum reiciendis architecto voluptatibus ullam magnam libero error non eveniet, reprehenderit dolorem saepe enim nobis at.</Text>
      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
        onFocus={handleFocus}
      />
      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
        onFocus={handleFocus}
      />
      <Button
        type='primary'
        icon={<Plus />}
        onPress={() => setRefreshing(true)}
        content="te agua mean with you"
      />
        
      {/* <Button
        title="Go register"
        onPress={() => props.navigation.navigate('Register')}
      /> */}
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