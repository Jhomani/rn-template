import React, {useState} from 'react';
import {
  View , 
  Pressable,
} from "react-native";

import {Session} from '@src/storage';
import {Menu} from '@src/icons';
import {useSelector} from 'react-redux';
import {Text, Title, Modal} from '@src/components';


const Header = () => {
  // const {currentScreen} = useSelector((state: MainState)=> state.global);
  const [openModal, setOpenModal] = useState(false);


  const handleClick = () => {
    const people = {name: 'carlos', last: 'Mamani'};
    // console.log(people);
    // dispatch(loginStart(people));
    setOpenModal(true);

    // Session.navigateTo('Register');
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

        <Modal 
          show={openModal} 
          onCancel={() => setOpenModal(false)}
        >
          <Text>This is text</Text>
        </Modal>

      </View>
  );
}

export default Header