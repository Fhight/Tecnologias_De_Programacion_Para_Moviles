import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAFICA, USER } from '../data/Images';
import { TRANSACTIONS } from '../data/Transactions';
import Transactions from '../components/Transactions';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../hooks/useAppContext';

const Balance = () => {
  const navigation = useNavigation();
  const { theme, handleIsTheme } = useAppContext();

  return (
    <View
      style={{ backgroundColor: theme.dark ? 'black' : 'white', padding: 10 }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name='arrowleft'
            size={30}
            color={theme.dark ? 'white' : 'black'}
          />
        </TouchableOpacity>
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
          color: 'gray',
          fontSize: 25,
          alignSelf: 'center',
          marginTop: 30,
        }}
      >
        Total balance
      </Text>
      <Text
        style={{
          color: theme.dark ? 'white' : 'black',
          fontSize: 60,
          alignSelf: 'center',
          letterSpacing: -3,
        }}
      >
        $32,751.75
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50,
        }}
      >
        <Text style={{ color: 'gray', fontSize: 20 }}>Day</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Week</Text>
        <Text style={{ color: 'yellow', fontSize: 20 }}>Month</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Year</Text>
      </View>
      <Image
        source={GRAFICA}
        style={{ height: 220, width: '100%', marginTop: 20 }}
        resizeMode='cover'
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: 'gray', fontSize: 20 }}>Jan</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Feb</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Mar</Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Apr</Text>
        <Text style={{ color: theme.dark ? 'white' : 'black', fontSize: 20 }}>
          May
        </Text>
        <Text style={{ color: 'gray', fontSize: 20 }}>Jul</Text>
      </View>
      <View
        style={{
          backgroundColor: '#EDF893',
          padding: 10,
          height: '100%',
          borderRadius: 25,
        }}
      >
        <View
          style={{
            borderBottomWidth: 5,
            borderBottomColor: 'gray',
            marginHorizontal: 160,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: '700' }}>Transactions</Text>
          <Text style={{ fontSize: 20, fontWeight: '700', color: 'gray' }}>
            See all
          </Text>
        </View>
        <FlatList
          data={TRANSACTIONS}
          renderItem={(transaction) => {
            return <Transactions data={transaction} key={transaction.id} />;
          }}
          ItemSeparatorComponent={<View style={{ marginVertical: 2 }} />}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
