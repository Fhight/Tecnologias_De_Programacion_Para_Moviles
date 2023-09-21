import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const InfoModal = ({ info, seeModal, setSeeModal }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={seeModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setSeeModal(!seeModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              backgroundColor: '#2a6f97',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
              Información
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Id:</Text>
            <Text style={styles.infoText}>{info.id}</Text>
          </View>
          <View style={[styles.infoContainer, styles.infoContainerLight]}>
            <Text style={styles.infoTitle}>Nombre:</Text>
            <Text style={styles.infoText}>{info.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Fecha creación:</Text>
            <Text style={styles.infoText}>{info.createAt}</Text>
          </View>
          <View style={[styles.infoContainer, styles.infoContainerLight]}>
            <Text style={styles.infoTitle}>Fecha editado:</Text>
            <Text style={styles.infoText}>{info.updatedAt !== '' ? info.updatedAt : 'Sin editar'}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Estatus:</Text>
            <Text style={styles.infoText}>{info.completed ? 'Completado' : 'Pendiente'}</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setSeeModal(!seeModal)}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,    
  },
  modalView: {
    margin: 20,
    backgroundColor: '#013a63',
    borderRadius: 20,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'90%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    padding: 5,
    elevation: 2,

  },
  buttonClose: {
    backgroundColor: '#a4161a',
  },
  infoContainer: {
    backgroundColor: '#61a5c2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  infoContainerLight: {
    backgroundColor: '#a9d6e5',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  infoText: {
    fontSize: 17,
    color: 'white',
  },
});
