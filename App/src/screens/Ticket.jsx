import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TICKET } from '../data/ticketUtils';
import TicketInfo from '../components/TicketInfo';
import GeneralButton from '../components/GeneralButton';

const Ticket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <AntDesign name='left' size={25} color='black' />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$234 000 000</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <AntDesign name='close' size={25} color='black' />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 15, alignSelf: 'center' }}>UroMillions</Text>

        <View
          style={[
            styles.dateContainer,
            {
              backgroundColor: '#E4D0AD',
              width: '60%',
              borderRadius: 10,
              padding: 15,
              gap: 20,
              alignSelf: 'center',
              marginVertical: 10,
            },
          ]}
        >
          <View style={styles.dateContainer}>
            <AntDesign name='calendar' size={24} color='black' />
            <Text>Today</Text>
          </View>
          <View style={styles.dateContainer}>
            <AntDesign name='clockcircleo' size={24} color='black' />
            <Text>21:00:00</Text>
          </View>
        </View>

        <View style={styles.ticketContainer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
              Ticket 1
            </Text>
            <AntDesign name='reload1' size={24} color='white' />
          </View>
          <View>
            <ScrollView horizontal={true}>
              {TICKET.map((item) => (
                <View key={item.id} style={styles.ticketNumber}>
                  <Text>{item.title}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 5 }}>
          <TicketInfo type='One time bet' check={true} />
          <TicketInfo type='Subscription' check={false} />
        </View>
      </View>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <GeneralButton
          text='Watch Results'
          color='#fff'
          backgroundColor='#016f48'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECDCC2',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  ticketContainer: {
    backgroundColor: '#016f48',
    padding: 15,
    borderRadius: 15,
    gap: 30,
    marginVertical: 10,
  },
  ticketNumber: {
    backgroundColor: '#ffd63f',
    padding: 15,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
