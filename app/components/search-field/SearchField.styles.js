import { StyleSheet } from 'react-native';

const SearchFieldStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,

  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: 5,
    paddingRight: 25,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
});

export default SearchFieldStyles;
