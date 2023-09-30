import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header } from '@react-navigation/stack';

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://swapi.dev/api/people/');
        await delay(5000);
        const json = await response.json();
        setCharacters(json.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>
        STAR WARS - CHARACTERS
      </Text>
      {isLoading && (
        <View>
          <ActivityIndicator size='large' color='#00ff00' />
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#00ff00' }}>
            Loading...
          </Text>
        </View>
      )}
      <ScrollView style={styles.scrollCharacter}>
        {characters.map((character, id) => {
          return (
            <View key={id} style={styles.character}>
              <View style={styles.info}>
                <Text style={styles.property}>Name:</Text>
                <Text style={styles.infoText}>{character.name}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.property}>Height:</Text>
                <Text style={styles.infoText}>{character.height} cm</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.property}>Gender:</Text>
                <Text style={styles.infoText}>{character.gender}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <Button
        title='Go to Login'
        onPress={() => navigation.navigate('Login', { name: 'Hola' })}
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginTop: 22,
    backgroundColor: '#202124',
  },
  scrollCharacter: {
    width: '100%',
    flex: 1,
    gap: 10,
    padding: 10,
    marginBottom: 5,
  },
  character: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  property: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  infoText: {
    fontSize: 16,
  },
});
