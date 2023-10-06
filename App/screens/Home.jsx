import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { USER } from '../data/Images';
import { CONTACTS } from '../data/Contacts';
import Contact from '../components/Contact';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../hooks/useAppContext';

const Home = () => {
  const navigation = useNavigation();
  const { theme, handleIsTheme } = useAppContext();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.dark ? 'black' : 'white' },
      ]}
    >
      <View style={styles.header}>
        <Image
          source={USER}
          style={{ height: 50, width: 50, borderRadius: 10 }}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => handleIsTheme()}
        >
          <MaterialCommunityIcons
            name='dots-grid'
            size={30}
            color={theme.dark ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 50,
          color: theme.dark ? 'white' : 'black',
          marginTop: 30,
        }}
      >
        My cards
      </Text>
      <View style={{ flexDirection: 'row', width: '100%', gap: 10 }}>
        <View
          style={{
            backgroundColor: '#EDF893',
            paddingVertical: 60,
            borderRadius: 25,
            alignItems: 'center',
            width: 65,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>+</Text>
        </View>
        <View
          style={{
            backgroundColor: theme.dark ? 'white' : 'black',
            padding: 10,
            borderRadius: 25,
            width: 300,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Fontisto
              name='mastercard'
              size={40}
              color={theme.dark ? 'black' : 'white'}
            />
            <Text style={{ color: 'gray', fontSize: 20 }}>**** 4934</Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: theme.dark ? 'black' : 'white',
            }}
          >
            $
            <Text
              style={{
                fontSize: 46,
                marginBottom: 50,
              }}
            >
              13,397.
            </Text>
            23
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#353333',
            borderRadius: 20,
            padding: 20,
            paddingHorizontal: 35,
          }}
          onPress={() => navigation.navigate('Balance')}
        >
          <AntDesign name='creditcard' size={30} color='white' />
          <Text style={{ color: 'yellow', marginTop: 10 }}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#353333',
            borderRadius: 20,
            padding: 20,
            paddingHorizontal: 35,
          }}
          onPress={() => navigation.navigate('Balance')}
        >
          <AntDesign name='creditcard' size={30} color='white' />
          <Text style={{ color: 'yellow', marginTop: 10 }}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#353333',
            borderRadius: 20,
            padding: 20,
            paddingHorizontal: 35,
          }}
          onPress={() => navigation.navigate('Balance')}
        >
          <AntDesign name='retweet' size={30} color='white' />
          <Text style={{ color: 'yellow', marginTop: 10 }}>Send</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'yellow',
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: theme.dark ? 'white' : 'black' }}>
            Activity
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'yellow',
            borderRadius: 20,
            paddingHorizontal: 15,
            backgroundColor: '#EDF893',
          }}
        >
          <Text style={{ color: 'black' }}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'yellow',
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: theme.dark ? 'white' : 'black' }}>
            Payments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'yellow',
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: theme.dark ? 'white' : 'black' }}>Sale</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#353333',
          padding: 20,
          height: 300,
          borderRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
            My contacts
          </Text>
          <Fontisto name='zoom' size={24} color='white' />
        </View>
        <FlatList
          data={CONTACTS}
          renderItem={(contact) => <Contact data={contact} key={contact.id} />}
          ItemSeparatorComponent={<View style={{ marginVertical: 5 }} />}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    padding: 10,
  },
});
