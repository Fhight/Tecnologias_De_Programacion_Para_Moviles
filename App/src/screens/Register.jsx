import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { TURQUESA, WHITE } from '../data/COLORS';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={[styles.container, { backgroundColor: WHITE }]}>
      <Text style={styles.title}>Sign Up</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: TURQUESA,
              fontWeight: '500',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder='Enter your name'
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={username}
            onChangeText={(e) => setUsername(e)}
            placeholder='Enter your email'
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder='Enter your password'
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: TURQUESA,
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          gap: 5,
          flexWrap: 'wrap',
        }}
      >
        <Text>By signing up, you are agreeing to our</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: TURQUESA,
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}
          >
            Terms of Service
          </Text>
        </TouchableOpacity>
        <Text>and</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: TURQUESA,
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: 'gray',
  },
});
