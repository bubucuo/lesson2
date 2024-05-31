import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return Math.round(Math.random() * 16).toString(16);
  });
};

export default function TouchView() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>TouchableHighlight {count}</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback
        onPress={() => {
          setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
        }}
        background={TouchableNativeFeedback.Ripple(
          rippleColor,
          rippleOverflow,
        )}>
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  touchable: {flex: 0.5, borderColor: 'black', borderWidth: 1},
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {alignSelf: 'center'},
});
