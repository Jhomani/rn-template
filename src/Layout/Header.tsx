import React, {useState} from 'react';
import {
  View , 
  Pressable,
} from "react-native";

import {Menu} from '@src/icons';
import {Text, Title, Modal} from '@src/components';
import {colors} from '@styles/variables';

import {Button} from '@src/components';

const Header = () => {
  // const {currentScreen} = useSelector((state: MainState)=> state.global);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    const people = {name: 'carlos', last: 'Mamani'};
    setOpenModal(true);
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
        <Title level={6} color={colors['dark'].txtEmphasis} >
          Matrixer
        </Title>

        <Button 
          icon={<Menu color={colors['dark'].txtEmphasis} />} 
          onPress={handleClick}
          type='lightPlain'
        />

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