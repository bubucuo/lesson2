import {
  // SafeAreaView,
  StyleSheet,
  StatusBar, // 用于控制应用顶部状态栏样式的组件。
} from 'react-native';
import BasicComponents from './components/BasicComponents';
import UserInterface from './components/UserInterface';
import FlatListView from './components/FlatListView';
import SectionListView from './components/SectionListView';
import IOSComponents from './components/IOSComponents';
import TouchView from './components/TouchView';
import AndroidComponents from './components/AndroidComponents';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <BasicComponents /> */}
      {/* <UserInterface /> */}
      {/* <FlatListView /> */}
      {/* <SectionListView /> */}
      {/* <IOSComponents /> */}
      {/* <AndroidComponents /> */}
      <TouchView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ! 1. 为了让组件居中显示，需要设置 flex: 1
  // ! 2. UserInterface才用到这个样式
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  // container: {
  //   // flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
});
export default App;
