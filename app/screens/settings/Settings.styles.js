import { StyleSheet } from 'react-native';

const SettingsStyles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  headerTitle: {
    fontSize: 34,
    fontFamily: 'Montserrat-Bold',
  },
  headerUnderline: {
    position: 'absolute',
    top: '120%',
    left: -35,
    width: '80%',
    height: 4,
    borderRadius: 2,
  },
  menu: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuItemDescription: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  appInfo: {
    alignItems: 'center',
    marginTop: 400,
  },
});

export default SettingsStyles;
