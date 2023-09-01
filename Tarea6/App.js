import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person';
import { DATA } from './src/utils/AppUtils';
import { BACKGROUND_IMAGE } from './src/utils/ImageUtils';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor='#fff' />
      <Image source={BACKGROUND_IMAGE} style={styles.image} />
      <View style={{ padding: 10, width: '100%', height: '100%' }}>
        <Text style={styles.title}>USUA<Text style={styles.span}>RIOS</Text></Text>
        <FlatList
          data={DATA}
          renderItem={({ item: { nombre, apellido, image }, index }) => (
            <Person
              nombre={nombre}
              apellido={apellido}
              index={index}
              image={image}
            />
          )}
          ItemSeparatorComponent={
            <View
              style={{
                height: 5,
                borderBottomWidth: 2,
                borderColor: 'white',
                marginBottom: 5,
              }}
            />
          }
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    position: 'absolute',
    resizeMode: 'repeat',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    marginVertical: 10,
  },
  span:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0094FF',
    textAlign: 'center',
    marginVertical: 10,
  }
});
