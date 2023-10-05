import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { USER } from '../data/Images';
import { NUMBERS } from '../data/Numbers';
import ButtonNumber from '../components/ButtonNumber';

const Send = () => {
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 20,
          }}
        >
          <AntDesign name='arrowleft' size={30} color='white' />
        </View>
        <Text style={{ color: 'white', fontSize: 20 }}>Send</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 20,
          }}
        >
          <AntDesign name='wechat' size={30} color='white' />
        </View>
      </View>
      <View style={styles.userInfo}>
        <Image
          source={USER}
          style={{ width: 70, height: 70, borderRadius: 50, marginRight: 80 }}
        />
        <View
          style={{
            backgroundColor: '#e9d66d',
            width: 70,
            height: 70,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
          }}
        >
          <AntDesign name='creditcard' size={24} color='black' />
        </View>
      </View>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '600',
        }}
      >
        Benjamin Parker
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: 'gray',
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '600',
        }}
      >
        **** 3294
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 60,
          alignSelf: 'center',
          marginTop: 30,
        }}
      >
        $340
        <Text
          style={{
            color: 'gray',
          }}
        >
          .00
        </Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {NUMBERS.map((number) => {
          return <ButtonNumber data={number} />;
        })}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#eee273',
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 40,
  },
});
