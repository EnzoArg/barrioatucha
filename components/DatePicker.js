import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DatePicker = ({ value, onChange, mode = 'date', display = 'default' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{value.toLocaleDateString()}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onChange({}, new Date())}>
        <Text style={styles.buttonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a6fa5',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default DatePicker;

// DONE