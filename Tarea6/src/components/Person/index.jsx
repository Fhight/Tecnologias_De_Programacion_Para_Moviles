import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { EDIT_ICON, VIEW_ICON, NO_VIEW_ICON } from '../../utils/ImageUtils';

const Person = ({ nombre, apellido, index, image }) => {
  const [show, setShow] = useState(true);

  const handleView = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 40, fontWeight:600 }}>{nombre}</Text>
          <Text style={{ fontSize: 20, fontWeight:500 }}>{apellido}</Text>
        </View>
        <TouchableOpacity>
          <Image source={EDIT_ICON} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => handleView(e)}>
          <Image source={show ? VIEW_ICON : NO_VIEW_ICON} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  icon: {
    width: 25,
    height: 25,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
