import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import Layout from '../Layout';
import AppStack from './app';
import GuestStrack from './guest';

const Router = () => {
  const {showModal} = useSelector((state: MainState) => state.global);

  useEffect(() => {
    StatusBar.setBackgroundColor('#6A6FB4');
  }, []);

  const suscribeStorage = () => {};

  console.log(showModal, ' on main route');

  return (
    <NavigationContainer>
      <Layout>{true ? <AppStack /> : <GuestStrack />}</Layout>
    </NavigationContainer>
  );
};

export default Router;
