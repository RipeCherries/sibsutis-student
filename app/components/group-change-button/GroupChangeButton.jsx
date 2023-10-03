import React, { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../constants/theme';

import GroupChangeButtonStyles from './GroupChangeButton.styles';

function GroupChangeButton() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  const mainGroup = useSelector((store) => store.mainGroup);

  const handlePress = () => {
    navigation.navigate('SettingsSearch');
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={[GroupChangeButtonStyles.btnTitle, { color: themeColors.primary }]}>{mainGroup.groupName}</Text>
    </Pressable>
  );
}

export default GroupChangeButton;
