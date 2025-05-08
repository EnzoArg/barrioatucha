import React, { useState } from 'react';
import { View } from 'react-native';
import PropertyList from '../property/PropertyList';
import ReservationForm from '../reservation/ReservationForm';

const AppNavigator = ({ properties, onLogout }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleReservationSubmit = (reservationData) => {
    console.log('Reservation submitted:', reservationData);
    setSelectedProperty(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {selectedProperty ? (
        <ReservationForm 
          property={selectedProperty}
          onSubmit={handleReservationSubmit}
          onCancel={() => setSelectedProperty(null)}
        />
      ) : (
        <PropertyList 
          properties={properties} 
          onSelectProperty={setSelectedProperty} 
        />
      )}
    </View>
  );
};

export default AppNavigator;