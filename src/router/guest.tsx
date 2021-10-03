import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Welcome, Home} from '@screens/index';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export default function GuestStack() {
  return (
    <Navigator
      screenOptions={{
        // headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}