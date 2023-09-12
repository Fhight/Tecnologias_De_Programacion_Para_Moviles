import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Product from './fragments/Product';
import { IMAGES } from '../../../constants/Images';
import { PRODUCTS } from '../../../constants/ProductsData';

const Body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Product</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {PRODUCTS.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            station={item.station}
            size={item.size}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
