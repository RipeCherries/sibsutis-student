import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import LessonStyles from './Lesson.styles';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants/theme';

function Lesson({ time, name, teacher, room, selectedD }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const [isActive, setIsActive] = useState(false);

  const checkTime = () => {
    const now = new Date();

    const startLessonTime = new Date();
    startLessonTime.setHours(time.startHours, time.startMinutes);

    const endLessonTime = new Date();
    endLessonTime.setHours(time.endHours, time.endMinutes);

    if (now >= startLessonTime && now <= endLessonTime && selectedD.getDate() === now.getDate()) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    checkTime();

    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={LessonStyles.lessonContainer}>
      <View style={LessonStyles.lessonMarkerContainer}>
        <View style={[LessonStyles.lessonMarkerVerticalLine, { backgroundColor: themeColors.primary }]} />
        <View
          style={[
            LessonStyles.lessonMarkerCircle,
            {
              borderColor: themeColors.primary,
              backgroundColor: isActive ? themeColors.primary : themeColors.secondary,
            },
          ]}
        />
        <View style={[LessonStyles.lessonMarkerVerticalLine, { backgroundColor: themeColors.primary }]} />
      </View>
      <View
        style={[
          LessonStyles.container,
          {
            backgroundColor: isActive ? themeColors.lessonBgActive : themeColors.lessonBg,
          },
        ]}
      >
        <Text
          style={[
            LessonStyles.time,
            {
              color: isActive ? themeColors.lessonTextActive : themeColors.lessonOtherText,
            },
          ]}
        >
          {time.startHours}:{time.startMinutes === 0 ? '00' : time.startMinutes}
          {' - '}
          {time.endHours}:{time.endMinutes === 0 ? '00' : time.endMinutes}
        </Text>
        <Text
          style={[
            LessonStyles.name,
            {
              color: isActive ? themeColors.lessonTextActive : themeColors.lessonTitle,
            },
          ]}
        >
          {name}
        </Text>
        {teacher && (
          <Text
            style={[
              LessonStyles.teacher,
              {
                color: isActive ? themeColors.lessonTextActive : themeColors.lessonOtherText,
              },
            ]}
          >
            {teacher}
          </Text>
        )}
        {room && (
          <Text
            style={[
              LessonStyles.room,
              {
                color: isActive ? themeColors.lessonTextActive : themeColors.lessonOtherText,
              },
            ]}
          >
            {room}
          </Text>
        )}
      </View>
    </View>
  );
}

Lesson.propTypes = {
  time: PropTypes.shape({
    startHours: PropTypes.number.isRequired,
    startMinutes: PropTypes.number.isRequired,
    endHours: PropTypes.number.isRequired,
    endMinutes: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  selectedD: PropTypes.instanceOf(Date).isRequired,
};

export default Lesson;
