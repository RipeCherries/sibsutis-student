import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../context/ThemeContext';

import { colors } from '../../constants/theme';
import CustomTabBarIconStyles from './CustomTabBarIcon.styles';

function CustomTabBarIcon({ focused, name }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  return (
    <View
      style={focused && [CustomTabBarIconStyles.customTabBarIconFocused, { backgroundColor: themeColors.secondary }]}
    >
      <Ionicons name={name} size={24} color={focused ? themeColors.primary : themeColors.secondary} />
    </View>
  );
}

CustomTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default CustomTabBarIcon;
