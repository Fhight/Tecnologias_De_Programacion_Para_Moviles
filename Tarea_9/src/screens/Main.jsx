import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Sign_In from './Sign_In';
import Sign_Up from './Sign_Up';
import Welcome from './Welcome';

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const handleShowRegister = (e) => {
    e.preventDefault();
    setShowRegister(!showRegister);
  };

  return (
    <View style={styles.container}>
      {showLogin ? (
        <Sign_In handleShowLogin={handleShowLogin} />
      ) : showRegister ? (
        <Sign_Up handleShowRegister={handleShowRegister} />
      ) : (
        <Welcome
          handleShowLogin={handleShowLogin}
          handleShowRegister={handleShowRegister}
        />
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
});
