import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: '90%'
  },
  phrase: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  }
});

export default SplashStyles;
