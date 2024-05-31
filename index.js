/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/routers/App';
// import App from './src/MyApp';

AppRegistry.registerComponent(appName, () => App);
