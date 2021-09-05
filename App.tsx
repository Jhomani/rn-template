import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  Home: {userId: string};
  Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;
type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;

interface WelcomeProps {
  title: string;
  navigation: WelcomeScreenNavigationProp;
  route: WelcomeScreenRouteProp;
}

interface HomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const Welcome: React.FC<WelcomeProps> = (props: WelcomeProps) => {
  console.log(props);

  return (
    <View>
      <Text>{props.title}</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home', {userId: '13214'})}
      />
    </View>
  );
};

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

const {Navigator, Screen} = Stack;

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" options={{animationTypeForReplace: 'pop'}}>
          {props => <Welcome {...props} title="this is parce" />}
          {/*we can add a middlewhere in here*/}
        </Screen>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{animationTypeForReplace: 'pop'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
