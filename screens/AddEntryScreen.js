import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';

const AddEntryScreen = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = () => {
    // TODO: Implement submit logic to add/update entry
    console.log(exerciseName, reps);
    // Clear the form fields after submission
    setExerciseName('');
    setReps('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
        style={styles.input}
      />
      <TextInput
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
        style={styles.input}
      />
      <Pressable title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddEntryScreen;

