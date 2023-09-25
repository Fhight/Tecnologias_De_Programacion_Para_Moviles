import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';

const CardInfo = ({ name, status, species, location, episode }) => {
  const [firstSeen, setFirstSeen] = useState('');

  const statusColor =
    status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray';

  useEffect(() => {
    const getFirstSeen = async () => {
      try {
        const response = await fetch(episode[0]);
        const data = await response.json();
        setFirstSeen(data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getFirstSeen();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.name]}>{name}</Text>
        <View style={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
          <Entypo
            name='dot-single'
            size={30}
            color={statusColor}
            style={{ marginLeft: -10 }}
          />
          <Text style={styles.text}>
            {status} - {species}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: 'gray' }}>Last know location:</Text>
        <Text style={styles.text}>{location.name}</Text>
      </View>
      <View>
        <Text style={{ color: 'gray' }}>First seen in:</Text>
        <Text style={styles.text}>{firstSeen}</Text>
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 15,
    width: '70%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
