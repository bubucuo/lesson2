import React, {useState} from 'react';
import {
  // Button,
  View,
  Alert,
  Switch,
} from 'react-native';

import {Button} from '@rneui/base';

export default function () {
  const [count, setCount] = useState<number>(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Button
        title={count + ''}
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
