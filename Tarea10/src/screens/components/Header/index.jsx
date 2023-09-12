import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMAGES } from '../../../constants/Images';
import Filters from '../Filters';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, { fontWeight: 'bold', fontSize: 30 }]}>
            Discover{'\n'}
            <Text style={styles.text}>your products</Text>
          </Text>
        </View>
        <View>
          <Image source={IMAGES.user} style={styles.image} />
        </View>
      </View>
      <Filters />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
