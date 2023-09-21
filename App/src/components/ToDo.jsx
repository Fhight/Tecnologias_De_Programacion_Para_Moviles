import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

function ToDo({
  id,
  name,
  createAt,
  updatedAt,
  isCompleted,
  handleDelete,
  handleComplete,
  handleInfo,
  isEdit,
}) {
  return (
    <View style={[styles.container, isCompleted && styles.todoCompleted]}>
      <View>
        <Text style={[{ fontSize: 20 }, isCompleted && styles.textCompleted]}>
          {name}
        </Text>
        <Text style={{ fontSize: 10 }}>{`Created at: \n${createAt}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <View>
          <CustomButton
            text='edit'
            color={'orange'}
            onPress={() => isEdit(id)}
          />
          {updatedAt !== '' && (
            <Text style={{ fontSize: 10, position: 'absolute', width: 150, marginTop:30 }}>{`Updated at: ${updatedAt}`}</Text>
          )}
        </View>
        <CustomButton
          text='eraser'
          color={'red'}
          onPress={() => handleDelete(id)}
        />

        <CustomButton
          text={isCompleted ? 'medal' : 'check'}
          color={isCompleted ? 'green' : 'blue'}
          onPress={() => handleComplete(id)}
        />

        <CustomButton
          text='info-circle'
          color={'black'}
          onPress={() => handleInfo(id)}
        />
      </View>
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#c7f9cc',
    borderRadius: 5,
    alignItems: 'center',
  },
  todoCompleted: {
    backgroundColor: 'orange',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
  },
});
