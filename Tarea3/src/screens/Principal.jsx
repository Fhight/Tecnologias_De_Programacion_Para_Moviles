import React from 'react';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';

const Principal = () => {
  return (
    <>
      <StyledText
        tipo={'primary'} //primary, danger, warning, default
        texto={'Hola'}
        fontSize={50}
        fontWeight={200}
        fontStyle={'normal'}
        color={'white'}
        fontFamily={'sans-serif'}
      />
      <StyledButton 
        title={'Texto'}
        alerta={'Saludos'}
        color={'purple'}
        limite={20}
        backgroundColor={'orange'}
        fontSize={20}
        fontWeight={200}
        fontFamily={'sans-serif'}
      />
    </>
  );
};

export default Principal;
