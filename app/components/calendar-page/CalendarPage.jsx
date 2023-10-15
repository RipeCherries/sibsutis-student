import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text, View } from 'react-native';

import CalendarPageStyles from './CalendarPage.styles';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants/theme';

function CalendarPage({ week, selectedDate, onDateChange }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={CalendarPageStyles.container}>
      {week.map((item) => (
        <Pressable
          style={[
            CalendarPageStyles.day,
            item.obj.getDate() === selectedDate.getDate() ? [CalendarPageStyles.selectedDay,
              { borderColor: themeColors.primary },
            ] : '',
          ]}
          onPress={() => onDateChange(item.obj)}
          key={item.day}
        >
          <Text
            style={[
              CalendarPageStyles.dayName,
              { color: currentDate.getDate() === item.day ? themeColors.primary : themeColors.textShade },
            ]}
          >
            {item.dayName}
          </Text>
          <Text
            style={[
              CalendarPageStyles.dayValue,
              { color: currentDate.getDate() === item.day ? themeColors.primary : themeColors.text },
            ]}
          >
            {item.day}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

CalendarPage.propTypes = {
  week: PropTypes.arrayOf(PropTypes.shape({
    dayName: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    obj: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CalendarPage;
