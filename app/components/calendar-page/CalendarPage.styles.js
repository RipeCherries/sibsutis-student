import { StyleSheet } from 'react-native';

const CalendarPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  day: {
    flex: 1 / 7,
    paddingVertical: 1,
    alignItems: 'center',
  },
  dayName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
  },
  dayValue: {
    marginTop: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  selectedDay: {
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default CalendarPageStyles;
