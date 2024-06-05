import {View} from 'react-native';
import Section from '../../components/Section';
import {Link} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Section>HomeScreen-2</Section>
      <Link to={{screen: 'movie'}}>go movie</Link>
    </View>
  );
}
