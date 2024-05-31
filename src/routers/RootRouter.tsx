import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {HomeScreen, ProfileScreen} from '../screens/index';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import CinemaScreen from '../screens/CinemaScreen';
import WebScreen from '../screens/WebScreen';

// const Stack = createNativeStackNavigator();

// const {Navigator, Screen, Group} = createNativeStackNavigator();
const {Navigator, Screen, Group} = createBottomTabNavigator();

// const {Navigator, Screen, Group} = createMyTabNavigator();

export default function RootRouter() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}} />
      <Screen name="movie" component={MovieScreen} options={{title: '电影'}} />
      <Screen
        name="cinema"
        component={CinemaScreen}
        options={{title: '影院'}}
      />
      <Screen
        name="webview" // key
        component={WebScreen}
        options={{title: '学习'}}
        initialParams={{uri: 'https://m.vip.com/index.html'}}
      />
    </Navigator>
  );
}
