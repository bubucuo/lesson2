import {isIOS} from '@rneui/base';
import React, {useState} from 'react';
import {ActionSheetIOS, Button, StyleSheet, Text, View} from 'react-native';

export default function IOSComponents() {
  const [result, setResult] = useState('🔮');
  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset'],
        destructiveButtonIndex: 2, // reset
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
        message: 'hello world',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          // 生成新的值
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          // 重置
          setResult('🔮');
        }
      },
    );
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      {isIOS ? (
        <Button onPress={onPress} title="Show Action Sheet" />
      ) : (
        <Text style={{textAlign: 'center'}}>Only available on iOS</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
});
