import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { monthNames } from '../../constants/monthNames';

import DateDisplayStyles from './DateDisplay.styles';
import { dayNames } from '../../constants/dayNames';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants/theme';

function DateDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    <View>
      <Text style={[DateDisplayStyles.fullDate, { color: themeColors.textShade }]}>
        {
                    `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
                }
      </Text>
      <Text style={[DateDisplayStyles.dayName, { color: themeColors.text }]}>{dayNames[currentDate.getDay()]}</Text>
    </View>

  );
}

export default DateDisplay;
