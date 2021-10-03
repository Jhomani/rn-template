import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Login, Register} from "@screens/index";

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStackScreen() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}