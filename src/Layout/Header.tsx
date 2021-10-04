import React from 'react';
import {
  Text, 
  View , 
  Pressable,
} from "react-native";

import {Session} from '@src/storage';
import {Menu} from '@src/icons';
import { useSelector } from 'react-redux';


const Header = () => {
  const {currentScreen} = useSelector((state: MainState)=> state.global);
  const handleClick = () => {
    const people = {name: 'carlos', last: 'Mamani'};
    // console.log(people);
    // dispatch(loginStart(people));

    Session.navigateTo('Register');
  }

  console.log('current');

  return (
      <View 
        style={{
          width: '100%', 
          height: 50, 
          display: 'flex', 
          justifyContent: 'space-between', 
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Pressable onPress={handleClick} >
          <Menu />
        </Pressable>

        <Text style={{fontFamily: 'TisaMedium', fontSize: 16, color: '#fff'}}>Matrixer - {currentScreen}</Text>

        <Pressable 
          onPress={handleClick}
        >
          <Menu />
        </Pressable>

      </View>
  );
}

export default Header