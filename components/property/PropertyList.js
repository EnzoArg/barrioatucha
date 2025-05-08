import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onSelectProperty }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nuestras Cabañas y Salones</Text>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PropertyCard property={item} onPress={onSelectProperty} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default PropertyList;