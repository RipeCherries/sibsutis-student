import { StyleSheet } from 'react-native';

const CreateAccountStyles = StyleSheet.create({
  bg: {
    backgroundColor: '#E0F2FC',
    width: '100%',
    height: '100%',
  },
  bgPattern: {
    width: '100%',
    height: '20%',
  },
  controls: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#187DC2',
  },
  field: {
    width: '100%',
    marginTop: 20,
  },
  supportText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  input: {
    width: '100%',
    height: 58,
    backgroundColor: '#E0F2FC',
    borderRadius: 15,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  createBtn: {
    marginTop: 40,
    width: '100%',
    height: 58,
    borderRadius: 15,
    backgroundColor: '#187DC2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createBtnText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Montserrat-Medium',
  },
  selectGroupText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
});

export default CreateAccountStyles;
