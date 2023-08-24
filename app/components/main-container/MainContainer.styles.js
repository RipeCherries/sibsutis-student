import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const MainContainerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 30,
  },
});

export default MainContainerStyles;
