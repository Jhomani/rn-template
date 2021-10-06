import React from 'react';
import {
  View , 
  Pressable,
} from "react-native";

import {Session} from '@src/storage';
import {Menu} from '@src/icons';
import {useSelector} from 'react-redux';
import {Text, Title} from '@src/components';


const Header = () => {
  const {currentScreen} = useSelector((state: MainState)=> state.global);
  const handleClick = () => {
    const people = {name: 'carlos', last: 'Mamani'};
    // console.log(people);
    // dispatch(loginStart(people));

    Session.navigateTo('Register');
  }

  return (
      <View 
        style={{
          width: '100%', 
          height: 50, 
          justifyContent: 'space-between', 
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Title level={6}>
          Matrixer
        </Title>


        <Pressable 
          onPress={handleClick}
        >
          <Menu />
        </Pressable>

      </View>
  );
}

export default Header