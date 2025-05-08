import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const ReservationForm = ({ property, onSubmit, onCancel }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState('1');
  const [showDatePicker, setShowDatePicker] = useState(null);

  const handleSubmit = () => {
    onSubmit({
      propertyId: property.id,
      startDate,
      endDate,
      guests: parseInt(guests, 10),
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar {property.name}</Text>
      
      <Text style={styles.label}>Fecha de inicio</Text>
      <TouchableOpacity 
        style={styles.dateButton}
        onPress={() => setShowDatePicker('start')}
      >
        <Text>{formatDate(startDate)}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Fecha de fin</Text>
      <TouchableOpacity 
        style={styles.dateButton}
        onPress={() => setShowDatePicker('end')}
      >
        <Text>{formatDate(endDate)}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <View style={styles.datePickerContainer}>
          <Text>Seleccione fecha:</Text>
          <View style={styles.datePickerButtons}>
            <Button
              title="Hoy"
              onPress={() => {
                const today = new Date();
                if (showDatePicker === 'start') setStartDate(today);
                else setEndDate(today);
                setShowDatePicker(null);
              }}
            />
            <Button
              title="Mañana"
              onPress={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                if (showDatePicker === 'start') setStartDate(tomorrow);
                else setEndDate(tomorrow);
                setShowDatePicker(null);
              }}
            />
            <Button
              title="Cancelar"
              onPress={() => setShowDatePicker(null)}
            />
          </View>
        </View>
      )}

      <Text style={styles.label}>Número de personas</Text>
      <TextInput
        style={styles.input}
        value={guests}
        onChangeText={setGuests}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  dateButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  datePickerContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  datePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#4a6fa5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReservationForm;

// DONE