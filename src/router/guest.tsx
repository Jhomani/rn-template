import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Welcome} from '@screens/index';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export default function GuestStack() {
  return (
    <Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
