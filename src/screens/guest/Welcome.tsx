import React, { useEffect } from 'react';
import {Text, View, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = NativeStackNavigationProp<
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