import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {name as appName} from './app.json';
import Main from './src/Main';

AppRegistry.registerComponent(appName, () => {
  SplashScreen.hide();

  return Main;
});
