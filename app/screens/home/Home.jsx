import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MainContainer from '../../components/main-container/MainContainer';

import HomeStyles from './Home.styles';
import DateDisplay from '../../components/date-display/DateDisplay';
import Calendar from '../../components/calendar/Calendar';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants/theme';
import Schedule from '../../components/schedule/Schedule';
import { dayNames } from '../../constants/dayNames';

function compareObjects(obj1, obj2) {
  const time1 = obj1.time;
  const time2 = obj2.time;

  // Сравниваем объекты по времени (сначала по часам, затем по минутам)
  if (time1.startHours < time2.startHours) return -1;
  if (time1.startHours > time2.startHours) return 1;
  if (time1.startMinutes < time2.startMinutes) return -1;
  if (time1.startMinutes > time2.startMinutes) return 1;
  return 0;
}

function Home({ route }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const currentGroup = route.params?.selectedGroup || useSelector((store) => store.mainGroup);
  const lessons = route.params?.lessons || useSelector((store) => store.mainGroupLessons);
  const startOfSemester = useSelector((store) => store.startOfSemester);

  const currentD = new Date();

  const d = new Date();
  const [selectedDate, setSelectedDate] = useState(d);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const filterData = () => {
    const timeDiff = Math.abs(selectedDate.getTime() - new Date(startOfSemester).getTime());
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    const evenOrOddWeek = Math.floor(daysDiff / 7) % 2 === 1 ? 0 : 1;

    return lessons.filter((item) => item.week === evenOrOddWeek && item.weekday === dayNames[selectedDate.getDay()]);
  };

  return (
    <MainContainer>
      <View style={HomeStyles.header}>
        <DateDisplay />
        <Text style={[HomeStyles.groupName, { color: themeColors.primary }]}>{currentGroup.groupName}</Text>
      </View>
      <View style={HomeStyles.calendar}>
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </View>
      <Schedule lessons={filterData().sort(compareObjects)} selectedD={selectedDate} />
    </MainContainer>
  );
}

export default Home;
