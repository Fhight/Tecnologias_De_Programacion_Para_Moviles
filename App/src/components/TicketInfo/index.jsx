import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const TicketInfo = ({ type, check }) => {
  const [activate, setActivate] = useState(check);

  const handleCheck = () => {
    setActivate(!activate);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'gray', fontWeight: '500' }}>Rate type</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{type}</Text>
      </View>
      <TouchableOpacity
        style={{ alignItems: 'flex-end' }}
        onPress={() => handleCheck()}
      >
        <AntDesign
          name='checkcircle'
          size={24}
          color={activate ? 'orange' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TicketInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    height: 175,
    width: 175,
  },
});
