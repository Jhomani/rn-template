import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

// login
declare type LoginScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
export declare type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export interface LoginProps {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
  children: JSX.Element | string;
}

// register
declare type RegisterScreenRouteProp = RouteProp<AuthStackParamList, 'Register'>;
declare type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

export interface RegisterProps {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
  children: JSX.Element | string;
}