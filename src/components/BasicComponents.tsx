import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

const logo = 'https://reactnative.dev/img/tiny_logo.png';

export default function () {
  const [text, setText] = useState('default');
  return (
    <ScrollView>
      <View style={styles.main}>
        <Image source={{uri: logo}} style={styles.logo} />
        <ImageBackground source={{uri: logo}} style={styles.logo}>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>Inside</Text>
        </ImageBackground>
        <Text style={styles.bold}>App</Text>
        <Text style={styles.bold}>
          <Text>hello</Text>
          <Text style={{color: 'black'}}>logo</Text>
        </Text>
        <View style={styles.bold}>
          <Text>hello</Text>
          <Text style={{color: 'black'}}>logo</Text>
        </View>
      </View>

      {/* //! 溢出 */}
      <Text numberOfLines={1}>{'溢出'.repeat(100)}</Text>

      <TextInput
        value={text}
        onChangeText={txt => setText(txt)}
        style={[styles.border, {borderColor: 'green'}]}
      />
      <Text>{text}</Text>

      <Text>这是段长文本</Text>
      <Text numberOfLines={2}>{'我是书名'.repeat(100)}</Text>
      <Text>{'我是长文本'.repeat(1000)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {color: 'green'},
  logo: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 20,
    opacity: 0.5,
  },
  bold: {fontWeight: 'bold', color: 'orange'},
  btn: {backgroundColor: 'red'},
  border: {margin: 10, padding: 10, borderWidth: 1, borderColor: 'red'},
});
