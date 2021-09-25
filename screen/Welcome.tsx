import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

type RootStackParamList = {
  Home: {userId: string};
  Welcome: undefined;
};

type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface WelcomeProps {
  title: string;
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
}

export const Welcome: React.FC<WelcomeProps> = (props: WelcomeProps) => {
  console.log(props);

  useEffect(() => {
    // SplashScreen.hide();
  }, [])

  return (
    <View>
      <Text>{props.title}</Text>
      <Button
        title="Go to Home bb"
        onPress={() => props.navigation.navigate('Home', {userId: '13214'})}
      />
    </View>
  );
};