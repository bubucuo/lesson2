import React from 'react';
import {View, Text} from 'react-native';
import Section from '../../components/Section';

export default function CinemaScreen(props) {
  console.log(
    '%c [  ]-8',
    'font-size:13px; background:pink; color:#bf2c9f;',
    props,
  );
  return (
    <View>
      <Section>CinemaScreen</Section>
      <Text>{props.route.params.nm}</Text>
    </View>
  );
}
