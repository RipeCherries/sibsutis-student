import React from "react";
import {View} from "react-native";
import Lesson from "../lesson/Lesson";

const ScheduleItem = ({ schedule }) => {
    return (
      <View>
          {
              schedule.map((item, index) => {
                  return (
                      <Lesson
                          key={ index }
                          time={ item.time }
                          title={ item.title }
                          teacher={ item.teacher }
                          room={ item.room }
                          isActive={ item.isActive  }
                      />
                  );
              })
          }
      </View>
    );
}

export default ScheduleItem;