import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const data = Array.from({length: 100}, (_, i) => ({
  id: String(i),
  title: `Item ${i}`,
}));

export default function () {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
