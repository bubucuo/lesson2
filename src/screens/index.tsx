/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, View} from 'react-native';
import {Link} from '@react-navigation/native';

type Item = any;

export const HomeScreen = ({navigation}: Item) => {
  return (
    <View>
      <Link to={{screen: 'movie'}}>go movie</Link>

      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
};

export const ProfileScreen = ({route}: Item) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
