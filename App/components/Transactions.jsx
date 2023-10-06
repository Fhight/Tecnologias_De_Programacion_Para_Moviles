import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Transactions = ({ data }) => {
  const { name, date, money } = data.item;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 35 }}>
        <AntDesign name='creditcard' size={24} color='yellow' />
      </View>
      <View style={{ alignItems: 'flex-start', flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray' }}>
          {date}
        </Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{money}</Text>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
