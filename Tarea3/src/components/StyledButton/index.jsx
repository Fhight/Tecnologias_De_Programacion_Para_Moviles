import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const StyledButton = ({
  title,
  alerta,
  color,
  limite,
  backgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
}) => {
  const [count, setCount] = useState(0);
  const [habilitado, setHabilitado] = useState(true);

  const handlePress = (e) => {
    e.preventDefault();
    if (count > limite - 1) {
      alert('Ya no puedes presionar más');
      setHabilitado(false);
    }
    alert(alerta);
    setCount(count + 1);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCount(0);
    setHabilitado(true);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 30 }}>
        <Button
          title={'Reset'}
          onPress={(e) => {
            handleReset(e);
          }}
          color={color}
        />
        <TouchableOpacity
          style={styles.boton}
          onPress={(e) => {
            handlePress(e);
          }}
          disabled={!habilitado}
        >
          <Text
            style={{ color, backgroundColor, fontSize, fontWeight, fontFamily }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Presionado {count} veces</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  boton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
});

export default StyledButton;
