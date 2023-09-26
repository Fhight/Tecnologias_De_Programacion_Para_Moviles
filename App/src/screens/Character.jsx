import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CharacterInfo from '../components/CharacterInfo';
import EpisodeInfo from '../components/EpisodeInfo';

const Character = ({ navigation, route }) => {
  const {
    item: { image, name, status, species, location, episode, gender },
  } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ alignItems: 'center' }}
        source={{ uri: image }}
        blurRadius={5}
      >
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode='cover'
        />
      </ImageBackground>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <CharacterInfo label='name:' text={name} />
        <CharacterInfo label='specie:' text={species} />
        <CharacterInfo label='gender:' text={gender} />
        <CharacterInfo
          label='status:'
          text={status}
          color={
            status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'
          }
        />
        <CharacterInfo label='last know location:' text={location.name} />
        <CharacterInfo label='total episodes:' text={episode.length} />
        <Text style={[styles.text, { fontWeight: 'bold' }]}>
          List of episodes:
        </Text>
      </ScrollView>
      <FlatList
        data={episode}
        renderItem={({ item }, key) => {
          return <EpisodeInfo url={item} key={key} />;
        }}
        style={{ height: 250, paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272B33',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 20,
  },
});
