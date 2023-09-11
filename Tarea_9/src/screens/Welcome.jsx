import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Images } from '../constants/Images';
import Button from '../components/Button';

const Welcome = ({ handleShowLogin, handleShowRegister }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome!</Text>
      <Text style={styles.subText}>Sign in or create a new account</Text>
      <Image source={Images.ballon} />
      <Button
        text='Go to Sign In'
        color='white'
        background={Colors.orange}
        handleShowLogin={handleShowLogin}
      />
      <Button
        text='No account yet?'
        color={Colors.gray}
        secondText='Sign up'
        secondColor={Colors.orange}
        handleShowRegister={handleShowRegister}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  titleText: {
    fontSize: 40,
    fontWeight: '500',
  },
  subText: {
    fontWeight: '300',
    color: Colors.light_gray,
    letterSpacing: 1,
    marginTop: 15,
  },
});
