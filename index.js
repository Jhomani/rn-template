import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';

import Main from './src/Main';


AppRegistry.registerComponent(appName, () => {

  SplashScreen.hide();

  return Main;
});
