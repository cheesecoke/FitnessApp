import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MainScreen = () => {
  // Placeholder data
  const exercises = [
    { id: '1', name: 'Pushups', totalReps: 50 },
    { id: '2', name: 'Squats', totalReps: 40 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>Total Reps: {item.totalReps}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 24,
  },
});

export default MainScreen;

