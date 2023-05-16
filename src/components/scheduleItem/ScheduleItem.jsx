import React from "react";
import {View} from "react-native";
import Lesson from "../lesson/Lesson";

import Styles from "./schedule-item.scss";
const ScheduleItem = ({ schedule }) => {
    return (
      <View style={ Styles.test }>
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