import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Fontisto, Feather } from '@expo/vector-icons';
import Searches from './fragments/Searches';

const Filters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.inputSearch}>
          <Fontisto name='zoom' size={20} color='gray' />
          <TextInput placeholder='Search here...' style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.inputFilter}>
          <Feather name='sliders' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.searchesContainer}>
        <Searches text={'Miniso'} />
        <Searches text={'Neurso'} />
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSearch: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,
    width: '75%',
  },
  textInput: {
    fontSize: 18,
    fontWeight: '400',
  },
  inputFilter: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#FDB135',
    alignItems: 'center',
  },
  searchesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
});
