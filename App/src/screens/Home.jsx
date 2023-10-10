import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Account from './Account';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuthContext';
import { TURQUESA, WHITE } from '../data/COLORS';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BURGUERS } from '../data/BURGUERS';

const Home = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut } = useAuthContext();

  const handleLogOut = () => {
    try {
      onLogOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: WHITE }]}>
      <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 30 }}>
        Store for fast food & etc.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: '#F2F6F6',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Fontisto name='zoom' size={24} color='black' />
          <TextInput placeholder='Enter name' />
        </View>
        <Ionicons name='options' size={24} color='black' />
      </View>

      <ScrollView horizontal={true} style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: TURQUESA,
            marginHorizontal: 10,
            backgroundColor: TURQUESA,
            height: 40,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: 'white' }}>Burguers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            height: 40,
            borderRadius: 12,
          }}
        >
          <Text>Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            height: 40,
            borderRadius: 12,
          }}
        >
          <Text>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'gray',
            marginHorizontal: 10,
            height: 40,
            borderRadius: 12,
          }}
        >
          <Text>Soda</Text>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
        data={BURGUERS}
        renderItem={(item) => {
          return (
            <View
              key={item.id}
              style={{
                borderWidth: 1,
                padding: 15,
                borderRadius: 20,
                marginHorizontal: 10,
                width: 150,
              }}
            >
              <Image
                source={{
                  uri: 'https://th.bing.com/th/id/R.021f0b1eb00791d7c3d7d53eaf7eba6c?rik=tXyhA5UuKkPdzw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_HPXWOvg7RcM%2fTSAlV0uVAnI%2fAAAAAAAAACo%2fkdGktUbFux8%2fs1600%2fburger.jpg&ehk=ijL%2bbELtrSC%2fB9P4qS8H8sezgLmFQQLWEx0%2fJB803x4%3d&risl=&pid=ImgRaw&r=0',
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {item.item.name}
              </Text>
              <Text
                style={{
                  color: TURQUESA,
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {item.item.price}
              </Text>
            </View>
          );
        }}
        style={{ height: 350, marginBottom: 50 }}
        horizontal
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
