import React, {useEffect, useRef} from 'react';
import {
  Text, 
  View , 
  Pressable,
  StatusBar,
  BackHandler,
  Animated,
} from "react-native";

import {useSelector} from 'react-redux';

import {colors} from '@styles/variables';
import {Plus} from '@src/icons';
import {Button} from '@src/components';
import {OpenModal} from '@src/storage';
import {dimension} from '@utils/global';
import {st_modal} from '@styles/components';

export const ModalBox = () => {
  const boxtop = useRef(
    new Animated.Value(dimension.height + 10)
  ).current;
  const {mode} = useSelector(({setting}:MainState) => setting);

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
    }).start(() => OpenModal.onCancel());
  }

  return (
      <Pressable 
        onPress={closeModal}
        style={st_modal.cover} 
      >
        <Animated.View style={{
          ...st_modal.box,
          top: boxtop,
          backgroundColor: colors[mode].card,
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
              style={st_modal.header}>
              <Text>i am into modal</Text>
            </View>
            {/* body */}

            <View >
              {OpenModal.children}
            </View>

            {/* footer */}
            <Button 
              icon={<Plus tails size={10} />} 
              onPress={closeModal}
              type='plain'
              style={{
              position: 'absolute', bottom: -18, right: 2
              }}
            />
          </Pressable>
        </Animated.View>
      </Pressable>
  )
}
