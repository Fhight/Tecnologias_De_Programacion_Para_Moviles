import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Main = () => {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 50,
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        CHARACTERS
      </Text>
      <FlatList
        data={characters}
        renderItem={({ item }, key) => {
          return <Card info={item} key={key} />;
        }}
        style={{ height: 700 }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
