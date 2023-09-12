import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Product = ({ name, price, image, station, size }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.characteristicContainer}>
        <Text style={styles.characteristicText}>
          #{size} {station}
        </Text>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.priceContainer}>
          <FontAwesome5 name='bitcoin' size={24} color='orange' />
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    paddingBottom: 10,
    paddingTop: 35,
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'cover',
  },
  characteristicContainer: {
    paddingHorizontal: 20,
    gap: 5,
  },
  characteristicText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: 'gray',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  priceText:{
    fontSize: 17,
    fontWeight: '900'
  }
});
