import React, { memo } from "react";
import { 
  createNativeStackNavigator, 
  // TransitionSpecs,
} from "@react-navigation/native-stack";

import {Login, Register} from "@screens/index";
import {Session} from '../storage';
import {useDispatch, useSelector} from "react-redux";
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
          animation: 'fade'
        })
      }}
      screenListeners={{
        state: ({data}: any) => {
          let current;

          if(data) {
            current = data.state.routeNames[data.state.index]
            storage.dispatch(changeScreen(current))
          }
        }
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

export default memo(AuthStackScreen);