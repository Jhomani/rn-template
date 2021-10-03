import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
}

export function Home({navigation, route}: HomeProps) {
  console.log(route);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen </Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}
