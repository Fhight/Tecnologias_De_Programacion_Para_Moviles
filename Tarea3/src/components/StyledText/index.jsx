import { Text, StyleSheet, View } from 'react-native';

const StyledText = ({
  tipo,
  texto,
  fontSize,
  fontWeight,
  fontStyle,
  color,
  fontFamily,
}) => {
  return (
    <>
      <View>
        <Text style={text.titulo}>{tipo !== '' ? tipo : 'Default'}</Text>
      </View>
      <View
        style={
          tipo === 'primary'
            ? contenedor.primary
            : tipo === 'danger'
            ? contenedor.danger
            : tipo === 'warning'
            ? contenedor.warning
            : contenedor.default
        }
      >
        <Text style={{ fontSize, fontWeight, fontStyle, color, fontFamily }}>
          {texto}
        </Text>
      </View>
    </>
  );
};

const text = StyleSheet.create({
  titulo: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontVariant: ['small-caps'],
  },
});

const contenedor = StyleSheet.create({
  primary: {
    backgroundColor: 'blue',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  danger: {
    backgroundColor: 'red',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  warning: {
    backgroundColor: 'orange',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  default: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
});

export default StyledText;
