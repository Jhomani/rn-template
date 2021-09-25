import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {Welcome} from './screen';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {createMyNavigator} from './myNav';

const My = createMyNavigator();

type RootStackParamList = {
  Home: {userId: string};
  Welcome: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

function HomeScreen({navigation, route}: HomeProps) {
  console.log(route);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  useEffect(() => {
  }, [])


  return (
      // <My.Navigator>
      //   <My.Screen name="Welcome" component={Welcome} />
      //   <My.Screen name="Home" component={HomeScreen} />
      // </My.Navigator>
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Welcome" 
          options={{
            animationEnabled: false
          }}
        >
          {props => <Welcome {...props} title="this is parce for you" />}
          {/* we can add a middlewhere in here */}
        </Screen>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            animationEnabled: false
          }}
        /> 
      </Navigator> 
    </NavigationContainer>
  );
};

export default App;
