/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootRouter from '../routers/RootRouter';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../store/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootRouter />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
