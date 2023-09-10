import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

import GroupItemStyles from './GroupItem.styles';
import { colors } from '../../constants/theme';
import { ThemeContext } from '../../context/ThemeContext';

const GroupItem = React.memo(({ groupName }) => {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate('GroupSchedule');
  }

  return (
    <Pressable style={GroupItemStyles.container} onPress={handlePress}>
      <View style={GroupItemStyles.wrapper}>
        <Feather name="users" size={24} color={themeColors.primary} />
        <Text style={[GroupItemStyles.groupName, { color: themeColors.text }]}>{groupName}</Text>
      </View>
      <View style={[GroupItemStyles.underline, { backgroundColor: themeColors.text }]} />
    </Pressable>
  );
});

export default GroupItem;