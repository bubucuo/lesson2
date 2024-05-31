/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootRouter from '../routers/RootRouter';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
