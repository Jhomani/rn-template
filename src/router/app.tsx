import React, { memo } from "react";
import { 
  createNativeStackNavigator, 
} from "@react-navigation/native-stack";

import {Login, Register, Settings} from "@screens/index";
import {Session} from '@src/storage';
import { changeScreen } from '@redux/global/accions';
import storage from '@redux/config';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

const config = {
  animation: 'sprbing',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function AuthStackScreen() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={({navigation}) => {
        Session.setNav(navigation);

        return ({
          headerShown: false,
          animationEnabled: false,
          animation: 'none',
        })
      }}
      screenListeners={{
        state: ({data}: any) => {
          let current;

          if(data) {
            current = data.state.routes[data.state.index].name;
            storage.dispatch(changeScreen(current))
          }
        }
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Setting" component={Settings} />
    </Navigator>
  );
}

export default memo(AuthStackScreen);