import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Lesson from '../lesson/Lesson';

function Schedule({ lessons, selectedD }) {
  return (
    <ScrollView>
      {
        lessons.map((item) => (
          <Lesson
            key={item._id}
            time={item.time}
            name={item.name}
            teacher={item.teacher}
            room={item.room}
            selectedD={selectedD}
          />
        ))
      }
    </ScrollView>
  );
}

Schedule.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    time: PropTypes.shape({
      startHours: PropTypes.number.isRequired,
      startMinutes: PropTypes.number.isRequired,
      endHours: PropTypes.number.isRequired,
      endMinutes: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
  })).isRequired,
  selectedD: PropTypes.instanceOf(Date).isRequired,
};

export default Schedule;
