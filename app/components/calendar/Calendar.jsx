import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions } from 'react-native';
import CalendarPage from '../calendar-page/CalendarPage';
import { getCalendarDays } from '../../utils/getCalendarDays';

const { width } = Dimensions.get('window');

function Calendar({ selectedDate, onDateChange }) {
  const calendarDays = getCalendarDays(new Date());

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ width: (width - 60) * 3 }}
      snapToInterval={width - 60}
      contentOffset={{
        x: width - 60,
        y: 0,
      }}
      pagingEnabled
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
    >
      <CalendarPage week={calendarDays[0]} selectedDate={selectedDate} onDateChange={onDateChange} />
      <CalendarPage week={calendarDays[1]} selectedDate={selectedDate} onDateChange={onDateChange} />
      <CalendarPage week={calendarDays[2]} selectedDate={selectedDate} onDateChange={onDateChange} />
    </ScrollView>
  );
}

Calendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default Calendar;
