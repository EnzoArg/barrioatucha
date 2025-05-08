import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PropertyCard = ({ property, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(property)}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{property.name}</Text>
        <Text style={styles.description}>{property.description}</Text>
        <Text style={styles.price}>${property.price}/noche</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  details: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a6fa5',
  },
});

export default PropertyCard;