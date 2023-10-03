import React from 'react';
import { ScrollView } from 'react-native';
import Lesson from '../lesson/Lesson';

function Schedule({ lessons, selectedD }) {
  return (
    <ScrollView>
      {
                lessons.map((item) => (
                  <Lesson key={item._id} time={item.time} name={item.name} teacher={item.teacher} room={item.room} selectedD={selectedD} />
                ))
            }
    </ScrollView>
  );
}

export default Schedule;
