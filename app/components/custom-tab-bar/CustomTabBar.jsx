import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

import { colors } from '../../constants/theme';
import CustomTabBarStyles from './CustomTabBar.styles';

function CustomTabBar({ state, descriptors, navigation }) {
  const { theme } = useContext(ThemeContext);
  const themeColors = colors[theme];

  return (
    <View style={[CustomTabBarStyles.customTabBarContainer, { backgroundColor: themeColors.primary }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={CustomTabBarStyles.customTabBarButton}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
          >
            <View>{icon && icon(isFocused)}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

CustomTabBar.propTypes = {
  state: PropTypes.shape({
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    index: PropTypes.number,
  }).isRequired,
  descriptors: PropTypes.objectOf(
    PropTypes.shape({
      key: PropTypes.string,
      options: PropTypes.shape({
        tabBarIcon: PropTypes.func,
        tabBarAccessibilityLabel: PropTypes.string,
        tabBarTestID: PropTypes.string,
      }),
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    emit: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default CustomTabBar;
