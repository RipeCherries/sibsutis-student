import { StyleSheet } from 'react-native';

const GroupItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 15,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupName: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  underline: {
    width: '100%',
    height: 0.5,
  },
});

export default GroupItemStyles;
