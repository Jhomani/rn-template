import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {Clear} from '../icons';
import {
  Text, 
  View , 
  Pressable,
  StatusBar,
  Dimensions,
  BackHandler
} from "react-native";

import { Session } from '../storage';

let {height: screenHeight} = Dimensions.get("window");

interface InModal  {
  children: JSX.Element;
  show: boolean,
  hideModal: Function
}

interface InModalRoot  {
  // children: JSX.Element;
}

export const Modal = ({children, show, hideModal}: InModal) => {

  Session.modalHider = hideModal;

  useEffect(() => {
    Session.setModalContent(children, show); 
  }, [show])

  return null;
}

const ModalHeader = () => {
  useEffect(() => {
    const backAction = () => {
      Session.modalHider();

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    StatusBar.setBackgroundColor('#40436C');

    return () => {
      backHandler.remove();
      StatusBar.setBackgroundColor('#6A6FB4');
    } 
  }, []);


  return(
    <View 
      style={{
        height: 30, 
        // backgroundColor: '#f00',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>i am into modal</Text>
    </View>
  )
}

export const ModalRoot = ({}: InModalRoot) => {
  const {showModal} = useSelector((store: MainState) => store.global);

  let render = null;


  if(showModal)
    render =  (
      <Pressable 
        onPress={() => Session.modalHider() }
        style={{
          zIndex:1,
          height: screenHeight, 
          width: '100%', 
          backgroundColor: '#0006', 
          position: 'absolute', 
          top: 0, 
          left: 0
        }}
      >
        <Pressable 
          style={{
            width: 250, 
            minWidth: 250,
            height: 350, 
            backgroundColor: '#fff', 
            borderRadius: 20,
            position: 'absolute',
            top: 15,
            right: '50%',
            transform: [{translateX: 125}],
            overflow: 'hidden',
            paddingHorizontal: 10
          }}
        >
          <ModalHeader />
          <View>
            {Session.getModalContent()}
          </View>

          <Pressable 
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={ev => Session.modalHider()}
          >
          <Clear size={12} />
          </Pressable>
        </Pressable>
      </Pressable>
    );

  return render;
}