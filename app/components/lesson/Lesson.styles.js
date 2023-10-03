import { StyleSheet } from 'react-native';

const LessonStyles = StyleSheet.create({
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 16,
  },
  lessonMarkerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  lessonMarkerVerticalLine: {
    flex: 1,
    width: 2,
  },
  lessonMarkerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  time: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  teacher: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  room: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
});

export default LessonStyles;
