import React, {useEffect, useRef} from 'react';
import {Clear} from '../icons';
import {
  Text, 
  View , 
  Pressable,
  StatusBar,
  BackHandler,
  Animated,
} from "react-native";

import { Session } from '../storage';
import {dimension} from '@utils/global';
import {st_modal} from '@styles/components';

export const ModalBox = () => {
  const boxtop = useRef(
    new Animated.Value(dimension.height + 10)
  ).current;

  useEffect(() => {
    const backAction = () => {
      closeModal();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress", backAction
    );

    StatusBar.setBackgroundColor('#40436C');

    Animated.timing(boxtop, {
      duration: 400,
      toValue: 15, 
      useNativeDriver: false,
    }).start();
    
    return () => {
      backHandler.remove();
      StatusBar.setBackgroundColor('#6A6FB4');
    } 
  }, []);

  const closeModal = () => {
    Animated.timing(boxtop, {
      duration: 400,
      toValue: dimension.height + 10, 
      useNativeDriver: false,
    }).start(() => Session.modalHider());
  }

  return (
      <Pressable 
        onPress={closeModal}
        style={[st_modal.cover]} 
      >
        <Animated.View style={{
          ...st_modal.box,
          top: boxtop,
          alignSelf: 'center'
        }}>
          <Pressable 
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {/* header */}
            <View 
              style={{
                height: 30, 
                // backgroundColor: '#f00',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text>i am into modal</Text>
            </View>
            {/* body */}

            <View >
              {Session.getModalContent()}
            </View>

            {/* footer */}

            <Pressable 
              style={{position: 'absolute', top: 10, right: 10}}
              onPress={closeModal}
            >
              <Clear size={12} />
            </Pressable>
          </Pressable>

        </Animated.View>
      </Pressable>
  )
}
