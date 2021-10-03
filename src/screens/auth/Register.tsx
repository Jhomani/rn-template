import React, { useEffect } from 'react';
import {Text, View, Button} from 'react-native';
import { RegisterProps } from './types';
import {NavigationContext} from '@react-navigation/native';

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const navigation = React.useContext(NavigationContext);

  useEffect(() => {
  }, [])

  const handlePress = async () => {
    // const encode = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const datas = await encode.json();

  // console.log(navigation?.getState());
    
    
    props.navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Hello, you are in login</Text>
      <Button
        title="Go Login"
        onPress={handlePress}
      />
    </View>
  );
};