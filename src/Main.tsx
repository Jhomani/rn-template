import 'react-native-gesture-handler';
import React from 'react';
import Routering from './router/main'
import { Provider } from "react-redux";
import storage from "@redux/config";

const Main = () => {

  return (
    <Provider store={storage} >
      <Routering />
    </Provider> 
  );
}

export default Main;